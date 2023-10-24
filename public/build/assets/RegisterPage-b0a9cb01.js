import{g as W,r as h,u as Z,a as X,b as G,j as n,L as H,p as J}from"./main-ea3bcec7.js";import{T as y}from"./TextField-09a07e57.js";import{I as _}from"./InputAdornment-1c3242d7.js";import{B as K}from"./Button-dbb12d56.js";import"./extendSxProp-02d77161.js";var j={exports:{}},N={exports:{}};(function(r,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=f;function c(s){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?c=function(u){return typeof u}:c=function(u){return u&&typeof Symbol=="function"&&u.constructor===Symbol&&u!==Symbol.prototype?"symbol":typeof u},c(s)}function f(s){var i=typeof s=="string"||s instanceof String;if(!i){var u=c(s);throw s===null?u="null":u==="object"&&(u=s.constructor.name),new TypeError("Expected a string but received a ".concat(u))}}r.exports=t.default,r.exports.default=t.default})(N,N.exports);var w=N.exports,k={exports:{}};(function(r,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=i;var c=f(w);function f(u){return u&&u.__esModule?u:{default:u}}function s(u){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?s=function(a){return typeof a}:s=function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},s(u)}function i(u,e){(0,c.default)(u);var a,F;s(e)==="object"?(a=e.min||0,F=e.max):(a=arguments[1],F=arguments[2]);var A=encodeURI(u).split(/%..|./).length-1;return A>=a&&(typeof F>"u"||A<=F)}r.exports=t.default,r.exports.default=t.default})(k,k.exports);var V=k.exports,q={exports:{}},$={exports:{}};(function(r,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=c;function c(){var f=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},s=arguments.length>1?arguments[1]:void 0;for(var i in s)typeof f[i]>"u"&&(f[i]=s[i]);return f}r.exports=t.default,r.exports.default=t.default})($,$.exports);var U=$.exports;(function(r,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=u;var c=s(w),f=s(U);function s(e){return e&&e.__esModule?e:{default:e}}var i={require_tld:!0,allow_underscores:!1,allow_trailing_dot:!1,allow_numeric_tld:!1,allow_wildcard:!1,ignore_max_length:!1};function u(e,a){(0,c.default)(e),a=(0,f.default)(a,i),a.allow_trailing_dot&&e[e.length-1]==="."&&(e=e.substring(0,e.length-1)),a.allow_wildcard===!0&&e.indexOf("*.")===0&&(e=e.substring(2));var F=e.split("."),A=F[F.length-1];return a.require_tld&&(F.length<2||!a.allow_numeric_tld&&!/^([a-z\u00A1-\u00A8\u00AA-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}|xn[a-z0-9-]{2,})$/i.test(A)||/\s/.test(A))||!a.allow_numeric_tld&&/^\d+$/.test(A)?!1:F.every(function(d){return!(d.length>63&&!a.ignore_max_length||!/^[a-z_\u00a1-\uffff0-9-]+$/i.test(d)||/[\uff01-\uff5e]/.test(d)||/^-|-$/.test(d)||!a.allow_underscores&&/_/.test(d))})}r.exports=t.default,r.exports.default=t.default})(q,q.exports);var Y=q.exports,I={exports:{}};(function(r,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=F;var c=f(w);function f(A){return A&&A.__esModule?A:{default:A}}var s="(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])",i="(".concat(s,"[.]){3}").concat(s),u=new RegExp("^".concat(i,"$")),e="(?:[0-9a-fA-F]{1,4})",a=new RegExp("^("+"(?:".concat(e,":){7}(?:").concat(e,"|:)|")+"(?:".concat(e,":){6}(?:").concat(i,"|:").concat(e,"|:)|")+"(?:".concat(e,":){5}(?::").concat(i,"|(:").concat(e,"){1,2}|:)|")+"(?:".concat(e,":){4}(?:(:").concat(e,"){0,1}:").concat(i,"|(:").concat(e,"){1,3}|:)|")+"(?:".concat(e,":){3}(?:(:").concat(e,"){0,2}:").concat(i,"|(:").concat(e,"){1,4}|:)|")+"(?:".concat(e,":){2}(?:(:").concat(e,"){0,3}:").concat(i,"|(:").concat(e,"){1,5}|:)|")+"(?:".concat(e,":){1}(?:(:").concat(e,"){0,4}:").concat(i,"|(:").concat(e,"){1,6}|:)|")+"(?::((?::".concat(e,"){0,5}:").concat(i,"|(?::").concat(e,"){1,7}|:))")+")(%[0-9a-zA-Z-.:]{1,})?$");function F(A){var d=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";return(0,c.default)(A),d=String(d),d?d==="4"?u.test(A):d==="6"?a.test(A):!1:F(A,4)||F(A,6)}r.exports=t.default,r.exports.default=t.default})(I,I.exports);var uu=I.exports;(function(r,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=p;var c=e(w),f=e(V),s=e(Y),i=e(uu),u=e(U);function e(o){return o&&o.__esModule?o:{default:o}}var a={allow_display_name:!1,allow_underscores:!1,require_display_name:!1,allow_utf8_local_part:!0,require_tld:!0,blacklisted_chars:"",ignore_max_length:!1,host_blacklist:[],host_whitelist:[]},F=/^([^\x00-\x1F\x7F-\x9F\cX]+)</i,A=/^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~]+$/i,d=/^[a-z\d]+$/,b=/^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f]))*$/i,R=/^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\u00A1-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+$/i,g=/^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*$/i,B=254;function x(o){var l=o.replace(/^"(.+)"$/,"$1");if(!l.trim())return!1;var E=/[\.";<>]/.test(l);if(E){if(l===o)return!1;var m=l.split('"').length===l.split('\\"').length;if(!m)return!1}return!0}function p(o,l){if((0,c.default)(o),l=(0,u.default)(l,a),l.require_display_name||l.allow_display_name){var E=o.match(F);if(E){var m=E[1];if(o=o.replace(m,"").replace(/(^<|>$)/g,""),m.endsWith(" ")&&(m=m.slice(0,-1)),!x(m))return!1}else if(l.require_display_name)return!1}if(!l.ignore_max_length&&o.length>B)return!1;var M=o.split("@"),C=M.pop(),v=C.toLowerCase();if(l.host_blacklist.includes(v)||l.host_whitelist.length>0&&!l.host_whitelist.includes(v))return!1;var D=M.join("@");if(l.domain_specific_validation&&(v==="gmail.com"||v==="googlemail.com")){D=D.toLowerCase();var z=D.split("+")[0];if(!(0,f.default)(z.replace(/\./g,""),{min:6,max:30}))return!1;for(var L=z.split("."),S=0;S<L.length;S++)if(!d.test(L[S]))return!1}if(l.ignore_max_length===!1&&(!(0,f.default)(D,{max:64})||!(0,f.default)(C,{max:254})))return!1;if(!(0,s.default)(C,{require_tld:l.require_tld,ignore_max_length:l.ignore_max_length,allow_underscores:l.allow_underscores})){if(!l.allow_ip_domain)return!1;if(!(0,i.default)(C)){if(!C.startsWith("[")||!C.endsWith("]"))return!1;var O=C.slice(1,-1);if(O.length===0||!(0,i.default)(O))return!1}}if(D[0]==='"')return D=D.slice(1,D.length-1),l.allow_utf8_local_part?g.test(D):b.test(D);for(var Q=l.allow_utf8_local_part?R:A,T=D.split("."),P=0;P<T.length;P++)if(!Q.test(T[P]))return!1;return!(l.blacklisted_chars&&D.search(new RegExp("[".concat(l.blacklisted_chars,"]+"),"g"))!==-1)}r.exports=t.default,r.exports.default=t.default})(j,j.exports);var eu=j.exports;const tu=W(eu),ru=r=>r.trim().replace(/ +(?= )/g,""),au=r=>!r||r.length<6||r.length>32?!1:nu(r),nu=r=>/[A-Za-z\u00AA\u00B5\u00BA\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B4\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AD\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]$/.test(r),ou=()=>{const[r,t]=h.useState(!1),[c,f]=h.useState(!1);Z();const[s,i]=h.useState(!1),[u,e]=h.useState({}),[a,F]=h.useState({}),{register:A}=X(),d=async B=>{B.preventDefault(),await J({loading:s,setLoading:i,successTitle:"Đăng nhập thành công",setError:F,callback:async()=>{var{email:x,name:p,password:o,re_password:l}=Object.fromEntries(new FormData(B.target));p=ru(p),F({});let E={};if(tu(x)||(E.email=!0),au(p)||(E.name=!0),o.length<6&&(E.password=!0),o!=l&&(E.re_password=!0),e(E),Object.keys(E).length>0)throw"Dữ liệu form chưa đúng định dạng";await A({email:x,password:o,name:p})}})},[b,R]=G(),g=b.get("redirect_url");return n.jsxs(n.Fragment,{children:[n.jsx("h5",{className:"text-xl font-bold text-center",children:"Đăng ký"}),n.jsxs("form",{className:"mt-6 flex max-w-xl flex-col space-y-6",onSubmit:d,children:[n.jsx(y,{label:"Tài khoản",name:"email",InputProps:{startAdornment:n.jsx(_,{position:"start",children:n.jsx("span",{className:"icon",children:"email"})})},required:!0,error:u==null?void 0:u.email,helperText:(u==null?void 0:u.email)&&"Email không đúng định dạng"}),n.jsx(y,{label:"Tên",name:"name",InputProps:{startAdornment:n.jsx(_,{position:"start",children:n.jsx("span",{className:"icon",children:"person"})})},required:!0,error:u==null?void 0:u.name,helperText:(u==null?void 0:u.name)&&"Tên phải có ít nhất 6 ký tự và không chứa ký tự đặc biệt"}),n.jsx(y,{label:"Mật khẩu",name:"password",type:r?"text":"password",InputProps:{startAdornment:n.jsx(_,{position:"start",children:n.jsx("span",{className:"icon",children:"key"})}),endAdornment:n.jsx(_,{position:"start",children:n.jsx("span",{className:"icon cursor-pointer",onClick:()=>t(B=>!B),children:r?"visibility_off":"visibility"})})},required:!0,error:u==null?void 0:u.password,helperText:(u==null?void 0:u.password)&&"Mật khẩu không phải có ít nhất 6"}),n.jsx(y,{label:"Nhập lại mật khẩu",name:"re_password",type:c?"text":"password",InputProps:{startAdornment:n.jsx(_,{position:"start",children:n.jsx("span",{className:"icon",children:"key"})}),endAdornment:n.jsx(_,{position:"start",children:n.jsx("span",{className:"icon cursor-pointer",onClick:()=>f(B=>!B),children:c?"visibility_off":"visibility"})})},required:!0,error:u==null?void 0:u.re_password,helperText:(u==null?void 0:u.re_password)&&"Nhập lại mật khẩu không chính xác"}),a.errors?n.jsx("div",{className:"border border-red-300 p-2 rounded bg-red-100 text-red-700 flex flex-col space-y-1 text-sm",children:Object.keys(a.errors).map((B,x)=>n.jsxs("div",{children:["* ",n.jsx("span",{className:"capitalize font-semibold",children:B})," : ",n.jsx("span",{children:a.errors[B].toString()})]},x))}):null,n.jsx(K,{type:"submit",variant:"contained",disabled:s,size:"large",startIcon:s?n.jsx("span",{className:"icon animate-spin",children:"progress_activity"}):null,children:"Tiếp tục"}),n.jsxs("p",{className:"text-center",children:["Bạn đã có tài khoản. ",n.jsx(H,{to:`/auth/login${g?"?redirect_url="+g:""}`,className:"text-blue-600 hover:text-blue-400",children:"Đăng nhập"})]})]})]})};export{ou as default};
