<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Test;
use Illuminate\Http\Request;
use TCG\Voyager\Events\BreadDataAdded;
use TCG\Voyager\Facades\Voyager;
use TCG\Voyager\Http\Controllers\VoyagerBaseController;
use Illuminate\Support\Str;

class TestController extends VoyagerBaseController
{
  public function store(Request $request)
  {
    $slug = $this->getSlug($request);

    $dataType = Voyager::model('DataType')
      ->where('slug', '=', $slug)
      ->first();

    // Check permission
    $this->authorize('add', app($dataType->model_name));

    // Validate fields with ajax
    $val = $this->validateBread($request->all(), $dataType->addRows)->validate();

    $code = $this->generateUniqueCode();
    $request->request->add(['code' => $code]);

    $data = $this->insertUpdateData($request, $slug, $dataType->addRows, new $dataType->model_name());

    event(new BreadDataAdded($dataType, $data));

    if (!$request->has('_tagging')) {
      if (
        auth()
        ->user()
        ->can('browse', $data)
      ) {
        $redirect = redirect()->route("voyager.{$dataType->slug}.index");
      } else {
        $redirect = redirect()->back();
      }

      return $redirect->with([
        'message' => __('voyager::generic.successfully_added_new') . " {$dataType->getTranslatedAttribute('display_name_singular')}",
        'alert-type' => 'success',
      ]);
    } else {
      return response()->json(['success' => true, 'data' => $data]);
    }
  }

  public function generateUniqueCode()
  {
    $code = Str::random(6);

    if (Test::where('code', $code)->exists()) {
      $this->generateUniqueCode();
    }

    return $code;
  }
}
