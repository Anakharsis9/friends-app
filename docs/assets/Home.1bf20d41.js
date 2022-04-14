var Be=Object.defineProperty,ke=Object.defineProperties;var je=Object.getOwnPropertyDescriptors;var ee=Object.getOwnPropertySymbols;var Ie=Object.prototype.hasOwnProperty,qe=Object.prototype.propertyIsEnumerable;var te=(t,e,r)=>e in t?Be(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,re=(t,e)=>{for(var r in e||(e={}))Ie.call(e,r)&&te(t,r,e[r]);if(ee)for(var r of ee(e))qe.call(e,r)&&te(t,r,e[r]);return t},ne=(t,e)=>ke(t,je(e));import{_ as we,o as $,c as P,a as h,t as z,w as se,F as Fe,r as He,b as Me,d as Je,e as ae,f as ie,g as oe,u as ue,h as ze,i as q}from"./index.e1198b75.js";import{g as Ve,d as We}from"./index.e2c2e0a9.js";var X={exports:{}},Ee=function(e,r){return function(){for(var n=new Array(arguments.length),a=0;a<n.length;a++)n[a]=arguments[a];return e.apply(r,n)}},Xe=Ee,w=Object.prototype.toString;function K(t){return Array.isArray(t)}function V(t){return typeof t=="undefined"}function Ke(t){return t!==null&&!V(t)&&t.constructor!==null&&!V(t.constructor)&&typeof t.constructor.isBuffer=="function"&&t.constructor.isBuffer(t)}function ge(t){return w.call(t)==="[object ArrayBuffer]"}function Ge(t){return w.call(t)==="[object FormData]"}function Ye(t){var e;return typeof ArrayBuffer!="undefined"&&ArrayBuffer.isView?e=ArrayBuffer.isView(t):e=t&&t.buffer&&ge(t.buffer),e}function Qe(t){return typeof t=="string"}function Ze(t){return typeof t=="number"}function xe(t){return t!==null&&typeof t=="object"}function L(t){if(w.call(t)!=="[object Object]")return!1;var e=Object.getPrototypeOf(t);return e===null||e===Object.prototype}function et(t){return w.call(t)==="[object Date]"}function tt(t){return w.call(t)==="[object File]"}function rt(t){return w.call(t)==="[object Blob]"}function Ce(t){return w.call(t)==="[object Function]"}function nt(t){return xe(t)&&Ce(t.pipe)}function st(t){return w.call(t)==="[object URLSearchParams]"}function at(t){return t.trim?t.trim():t.replace(/^\s+|\s+$/g,"")}function it(){return typeof navigator!="undefined"&&(navigator.product==="ReactNative"||navigator.product==="NativeScript"||navigator.product==="NS")?!1:typeof window!="undefined"&&typeof document!="undefined"}function G(t,e){if(!(t===null||typeof t=="undefined"))if(typeof t!="object"&&(t=[t]),K(t))for(var r=0,s=t.length;r<s;r++)e.call(null,t[r],r,t);else for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.call(null,t[n],n,t)}function W(){var t={};function e(n,a){L(t[a])&&L(n)?t[a]=W(t[a],n):L(n)?t[a]=W({},n):K(n)?t[a]=n.slice():t[a]=n}for(var r=0,s=arguments.length;r<s;r++)G(arguments[r],e);return t}function ot(t,e,r){return G(e,function(n,a){r&&typeof n=="function"?t[a]=Xe(n,r):t[a]=n}),t}function ut(t){return t.charCodeAt(0)===65279&&(t=t.slice(1)),t}var v={isArray:K,isArrayBuffer:ge,isBuffer:Ke,isFormData:Ge,isArrayBufferView:Ye,isString:Qe,isNumber:Ze,isObject:xe,isPlainObject:L,isUndefined:V,isDate:et,isFile:tt,isBlob:rt,isFunction:Ce,isStream:nt,isURLSearchParams:st,isStandardBrowserEnv:it,forEach:G,merge:W,extend:ot,trim:at,stripBOM:ut},x=v;function le(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var Se=function(e,r,s){if(!r)return e;var n;if(s)n=s(r);else if(x.isURLSearchParams(r))n=r.toString();else{var a=[];x.forEach(r,function(l,m){l===null||typeof l=="undefined"||(x.isArray(l)?m=m+"[]":l=[l],x.forEach(l,function(c){x.isDate(c)?c=c.toISOString():x.isObject(c)&&(c=JSON.stringify(c)),a.push(le(m)+"="+le(c))}))}),n=a.join("&")}if(n){var o=e.indexOf("#");o!==-1&&(e=e.slice(0,o)),e+=(e.indexOf("?")===-1?"?":"&")+n}return e},lt=v;function D(){this.handlers=[]}D.prototype.use=function(e,r,s){return this.handlers.push({fulfilled:e,rejected:r,synchronous:s?s.synchronous:!1,runWhen:s?s.runWhen:null}),this.handlers.length-1};D.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)};D.prototype.forEach=function(e){lt.forEach(this.handlers,function(s){s!==null&&e(s)})};var ct=D,ft=v,dt=function(e,r){ft.forEach(e,function(n,a){a!==r&&a.toUpperCase()===r.toUpperCase()&&(e[r]=n,delete e[a])})},$e=function(e,r,s,n,a){return e.config=r,s&&(e.code=s),e.request=n,e.response=a,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}},e},Oe={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},ht=$e,Re=function(e,r,s,n,a){var o=new Error(e);return ht(o,r,s,n,a)},pt=Re,mt=function(e,r,s){var n=s.config.validateStatus;!s.status||!n||n(s.status)?e(s):r(pt("Request failed with status code "+s.status,s.config,null,s.request,s))},N=v,vt=N.isStandardBrowserEnv()?function(){return{write:function(r,s,n,a,o,u){var l=[];l.push(r+"="+encodeURIComponent(s)),N.isNumber(n)&&l.push("expires="+new Date(n).toGMTString()),N.isString(a)&&l.push("path="+a),N.isString(o)&&l.push("domain="+o),u===!0&&l.push("secure"),document.cookie=l.join("; ")},read:function(r){var s=document.cookie.match(new RegExp("(^|;\\s*)("+r+")=([^;]*)"));return s?decodeURIComponent(s[3]):null},remove:function(r){this.write(r,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}(),bt=function(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)},yt=function(e,r){return r?e.replace(/\/+$/,"")+"/"+r.replace(/^\/+/,""):e},_t=bt,wt=yt,Et=function(e,r){return e&&!_t(r)?wt(e,r):r},F=v,gt=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"],xt=function(e){var r={},s,n,a;return e&&F.forEach(e.split(`
`),function(u){if(a=u.indexOf(":"),s=F.trim(u.substr(0,a)).toLowerCase(),n=F.trim(u.substr(a+1)),s){if(r[s]&&gt.indexOf(s)>=0)return;s==="set-cookie"?r[s]=(r[s]?r[s]:[]).concat([n]):r[s]=r[s]?r[s]+", "+n:n}}),r},ce=v,Ct=ce.isStandardBrowserEnv()?function(){var e=/(msie|trident)/i.test(navigator.userAgent),r=document.createElement("a"),s;function n(a){var o=a;return e&&(r.setAttribute("href",o),o=r.href),r.setAttribute("href",o),{href:r.href,protocol:r.protocol?r.protocol.replace(/:$/,""):"",host:r.host,search:r.search?r.search.replace(/^\?/,""):"",hash:r.hash?r.hash.replace(/^#/,""):"",hostname:r.hostname,port:r.port,pathname:r.pathname.charAt(0)==="/"?r.pathname:"/"+r.pathname}}return s=n(window.location.href),function(o){var u=ce.isString(o)?n(o):o;return u.protocol===s.protocol&&u.host===s.host}}():function(){return function(){return!0}}();function Y(t){this.message=t}Y.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")};Y.prototype.__CANCEL__=!0;var B=Y,T=v,St=mt,$t=vt,Ot=Se,Rt=Et,At=xt,Nt=Ct,H=Re,Tt=Oe,Lt=B,fe=function(e){return new Promise(function(s,n){var a=e.data,o=e.headers,u=e.responseType,l;function m(){e.cancelToken&&e.cancelToken.unsubscribe(l),e.signal&&e.signal.removeEventListener("abort",l)}T.isFormData(a)&&delete o["Content-Type"];var i=new XMLHttpRequest;if(e.auth){var c=e.auth.username||"",f=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.Authorization="Basic "+btoa(c+":"+f)}var d=Rt(e.baseURL,e.url);i.open(e.method.toUpperCase(),Ot(d,e.params,e.paramsSerializer),!0),i.timeout=e.timeout;function R(){if(!!i){var y="getAllResponseHeaders"in i?At(i.getAllResponseHeaders()):null,g=!u||u==="text"||u==="json"?i.responseText:i.response,E={data:g,status:i.status,statusText:i.statusText,headers:y,config:e,request:i};St(function(I){s(I),m()},function(I){n(I),m()},E),i=null}}if("onloadend"in i?i.onloadend=R:i.onreadystatechange=function(){!i||i.readyState!==4||i.status===0&&!(i.responseURL&&i.responseURL.indexOf("file:")===0)||setTimeout(R)},i.onabort=function(){!i||(n(H("Request aborted",e,"ECONNABORTED",i)),i=null)},i.onerror=function(){n(H("Network Error",e,null,i)),i=null},i.ontimeout=function(){var g=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded",E=e.transitional||Tt;e.timeoutErrorMessage&&(g=e.timeoutErrorMessage),n(H(g,e,E.clarifyTimeoutError?"ETIMEDOUT":"ECONNABORTED",i)),i=null},T.isStandardBrowserEnv()){var A=(e.withCredentials||Nt(d))&&e.xsrfCookieName?$t.read(e.xsrfCookieName):void 0;A&&(o[e.xsrfHeaderName]=A)}"setRequestHeader"in i&&T.forEach(o,function(g,E){typeof a=="undefined"&&E.toLowerCase()==="content-type"?delete o[E]:i.setRequestHeader(E,g)}),T.isUndefined(e.withCredentials)||(i.withCredentials=!!e.withCredentials),u&&u!=="json"&&(i.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&i.addEventListener("progress",e.onDownloadProgress),typeof e.onUploadProgress=="function"&&i.upload&&i.upload.addEventListener("progress",e.onUploadProgress),(e.cancelToken||e.signal)&&(l=function(y){!i||(n(!y||y&&y.type?new Lt("canceled"):y),i.abort(),i=null)},e.cancelToken&&e.cancelToken.subscribe(l),e.signal&&(e.signal.aborted?l():e.signal.addEventListener("abort",l))),a||(a=null),i.send(a)})},p=v,de=dt,Ut=$e,Pt=Oe,Dt={"Content-Type":"application/x-www-form-urlencoded"};function he(t,e){!p.isUndefined(t)&&p.isUndefined(t["Content-Type"])&&(t["Content-Type"]=e)}function Bt(){var t;return(typeof XMLHttpRequest!="undefined"||typeof process!="undefined"&&Object.prototype.toString.call(process)==="[object process]")&&(t=fe),t}function kt(t,e,r){if(p.isString(t))try{return(e||JSON.parse)(t),p.trim(t)}catch(s){if(s.name!=="SyntaxError")throw s}return(r||JSON.stringify)(t)}var k={transitional:Pt,adapter:Bt(),transformRequest:[function(e,r){return de(r,"Accept"),de(r,"Content-Type"),p.isFormData(e)||p.isArrayBuffer(e)||p.isBuffer(e)||p.isStream(e)||p.isFile(e)||p.isBlob(e)?e:p.isArrayBufferView(e)?e.buffer:p.isURLSearchParams(e)?(he(r,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):p.isObject(e)||r&&r["Content-Type"]==="application/json"?(he(r,"application/json"),kt(e)):e}],transformResponse:[function(e){var r=this.transitional||k.transitional,s=r&&r.silentJSONParsing,n=r&&r.forcedJSONParsing,a=!s&&this.responseType==="json";if(a||n&&p.isString(e)&&e.length)try{return JSON.parse(e)}catch(o){if(a)throw o.name==="SyntaxError"?Ut(o,this,"E_JSON_PARSE"):o}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};p.forEach(["delete","get","head"],function(e){k.headers[e]={}});p.forEach(["post","put","patch"],function(e){k.headers[e]=p.merge(Dt)});var Q=k,jt=v,It=Q,qt=function(e,r,s){var n=this||It;return jt.forEach(s,function(o){e=o.call(n,e,r)}),e},Ae=function(e){return!!(e&&e.__CANCEL__)},pe=v,M=qt,Ft=Ae,Ht=Q,Mt=B;function J(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new Mt("canceled")}var Jt=function(e){J(e),e.headers=e.headers||{},e.data=M.call(e,e.data,e.headers,e.transformRequest),e.headers=pe.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),pe.forEach(["delete","get","head","post","put","patch","common"],function(n){delete e.headers[n]});var r=e.adapter||Ht.adapter;return r(e).then(function(n){return J(e),n.data=M.call(e,n.data,n.headers,e.transformResponse),n},function(n){return Ft(n)||(J(e),n&&n.response&&(n.response.data=M.call(e,n.response.data,n.response.headers,e.transformResponse))),Promise.reject(n)})},b=v,Ne=function(e,r){r=r||{};var s={};function n(i,c){return b.isPlainObject(i)&&b.isPlainObject(c)?b.merge(i,c):b.isPlainObject(c)?b.merge({},c):b.isArray(c)?c.slice():c}function a(i){if(b.isUndefined(r[i])){if(!b.isUndefined(e[i]))return n(void 0,e[i])}else return n(e[i],r[i])}function o(i){if(!b.isUndefined(r[i]))return n(void 0,r[i])}function u(i){if(b.isUndefined(r[i])){if(!b.isUndefined(e[i]))return n(void 0,e[i])}else return n(void 0,r[i])}function l(i){if(i in r)return n(e[i],r[i]);if(i in e)return n(void 0,e[i])}var m={url:o,method:o,data:o,baseURL:u,transformRequest:u,transformResponse:u,paramsSerializer:u,timeout:u,timeoutMessage:u,withCredentials:u,adapter:u,responseType:u,xsrfCookieName:u,xsrfHeaderName:u,onUploadProgress:u,onDownloadProgress:u,decompress:u,maxContentLength:u,maxBodyLength:u,transport:u,httpAgent:u,httpsAgent:u,cancelToken:u,socketPath:u,responseEncoding:u,validateStatus:l};return b.forEach(Object.keys(e).concat(Object.keys(r)),function(c){var f=m[c]||a,d=f(c);b.isUndefined(d)&&f!==l||(s[c]=d)}),s},Te={version:"0.26.1"},zt=Te.version,Z={};["object","boolean","number","function","string","symbol"].forEach(function(t,e){Z[t]=function(s){return typeof s===t||"a"+(e<1?"n ":" ")+t}});var me={};Z.transitional=function(e,r,s){function n(a,o){return"[Axios v"+zt+"] Transitional option '"+a+"'"+o+(s?". "+s:"")}return function(a,o,u){if(e===!1)throw new Error(n(o," has been removed"+(r?" in "+r:"")));return r&&!me[o]&&(me[o]=!0,console.warn(n(o," has been deprecated since v"+r+" and will be removed in the near future"))),e?e(a,o,u):!0}};function Vt(t,e,r){if(typeof t!="object")throw new TypeError("options must be an object");for(var s=Object.keys(t),n=s.length;n-- >0;){var a=s[n],o=e[a];if(o){var u=t[a],l=u===void 0||o(u,a,t);if(l!==!0)throw new TypeError("option "+a+" must be "+l);continue}if(r!==!0)throw Error("Unknown option "+a)}}var Wt={assertOptions:Vt,validators:Z},Le=v,Xt=Se,ve=ct,be=Jt,j=Ne,Ue=Wt,C=Ue.validators;function O(t){this.defaults=t,this.interceptors={request:new ve,response:new ve}}O.prototype.request=function(e,r){typeof e=="string"?(r=r||{},r.url=e):r=e||{},r=j(this.defaults,r),r.method?r.method=r.method.toLowerCase():this.defaults.method?r.method=this.defaults.method.toLowerCase():r.method="get";var s=r.transitional;s!==void 0&&Ue.assertOptions(s,{silentJSONParsing:C.transitional(C.boolean),forcedJSONParsing:C.transitional(C.boolean),clarifyTimeoutError:C.transitional(C.boolean)},!1);var n=[],a=!0;this.interceptors.request.forEach(function(d){typeof d.runWhen=="function"&&d.runWhen(r)===!1||(a=a&&d.synchronous,n.unshift(d.fulfilled,d.rejected))});var o=[];this.interceptors.response.forEach(function(d){o.push(d.fulfilled,d.rejected)});var u;if(!a){var l=[be,void 0];for(Array.prototype.unshift.apply(l,n),l=l.concat(o),u=Promise.resolve(r);l.length;)u=u.then(l.shift(),l.shift());return u}for(var m=r;n.length;){var i=n.shift(),c=n.shift();try{m=i(m)}catch(f){c(f);break}}try{u=be(m)}catch(f){return Promise.reject(f)}for(;o.length;)u=u.then(o.shift(),o.shift());return u};O.prototype.getUri=function(e){return e=j(this.defaults,e),Xt(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")};Le.forEach(["delete","get","head","options"],function(e){O.prototype[e]=function(r,s){return this.request(j(s||{},{method:e,url:r,data:(s||{}).data}))}});Le.forEach(["post","put","patch"],function(e){O.prototype[e]=function(r,s,n){return this.request(j(n||{},{method:e,url:r,data:s}))}});var Kt=O,Gt=B;function S(t){if(typeof t!="function")throw new TypeError("executor must be a function.");var e;this.promise=new Promise(function(n){e=n});var r=this;this.promise.then(function(s){if(!!r._listeners){var n,a=r._listeners.length;for(n=0;n<a;n++)r._listeners[n](s);r._listeners=null}}),this.promise.then=function(s){var n,a=new Promise(function(o){r.subscribe(o),n=o}).then(s);return a.cancel=function(){r.unsubscribe(n)},a},t(function(n){r.reason||(r.reason=new Gt(n),e(r.reason))})}S.prototype.throwIfRequested=function(){if(this.reason)throw this.reason};S.prototype.subscribe=function(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]};S.prototype.unsubscribe=function(e){if(!!this._listeners){var r=this._listeners.indexOf(e);r!==-1&&this._listeners.splice(r,1)}};S.source=function(){var e,r=new S(function(n){e=n});return{token:r,cancel:e}};var Yt=S,Qt=function(e){return function(s){return e.apply(null,s)}},Zt=v,er=function(e){return Zt.isObject(e)&&e.isAxiosError===!0},ye=v,tr=Ee,U=Kt,rr=Ne,nr=Q;function Pe(t){var e=new U(t),r=tr(U.prototype.request,e);return ye.extend(r,U.prototype,e),ye.extend(r,e),r.create=function(n){return Pe(rr(t,n))},r}var _=Pe(nr);_.Axios=U;_.Cancel=B;_.CancelToken=Yt;_.isCancel=Ae;_.VERSION=Te.version;_.all=function(e){return Promise.all(e)};_.spread=Qt;_.isAxiosError=er;X.exports=_;X.exports.default=_;var sr=X.exports;const ar={class:"friend-card p-2 mb-3 mx-0 border-bottom rounded-0"},ir={class:"row g-0"},or={class:"col-3"},ur=["src"],lr={class:"col-8"},cr={class:"card-body"},fr={class:"card-title"},dr={class:"card-text"},hr={class:"text-muted"},pr={props:{fullname:String,photo:String,id:Number},setup(t){return(e,r)=>($(),P("div",ar,[h("div",ir,[h("div",or,[h("img",{src:t.photo,class:"img-fluid rounded-circle",alt:""},null,8,ur)]),h("div",lr,[h("div",cr,[h("h5",fr,z(t.fullname),1),h("p",dr,[h("small",hr,z(t.id),1)])])])])]))}};var mr=we(pr,[["__scopeId","data-v-933bb616"]]);const vr={class:"d-flex flex-column bg-white rounded"},br={class:"non-content p-3 bg-gray rounded-top"},yr={class:"text-uppercase fs-5 text-center"},_r={class:"content row flex-column p-2"},wr={class:"non-content p-3 bg-gray rounded-bottom"},Er={class:"d-grid col-lg-6 col-md-8 col-10"},gr={props:{title:String,list:Array,listId:Number},emits:["updateCardList"],setup(t,{emit:e}){function r(n,a){n.dataTransfer.dropEffect="move",n.dataTransfer.effectAllowed="move",n.dataTransfer.setData("friendId",a.id)}function s(n,a){const o=n.dataTransfer.getData("friendId");e("updateCardList",{friendId:o,listNum:a})}return(n,a)=>($(),P("div",null,[h("div",vr,[h("header",br,[h("span",yr,z(t.title),1)]),h("div",_r,[h("div",{class:"col drop-zone",onDrop:a[0]||(a[0]=o=>s(o,t.listId)),onDragover:a[1]||(a[1]=se(()=>{},["prevent"])),onDragenter:a[2]||(a[2]=se(()=>{},["prevent"]))},[($(!0),P(Fe,null,He(t.list,o=>($(),Je(mr,{key:o.id,fullname:o.first_name+" "+o.last_name,id:o.id,photo:o.photo_100,onDragstart:u=>r(u,o),draggable:"true",class:"drag-el"},null,8,["fullname","id","photo","onDragstart"]))),128))],32)]),h("footer",wr,[h("div",Er,[Me(n.$slots,"footer",{},void 0,!0)])])])]))}};var _e=we(gr,[["__scopeId","data-v-2c592d5e"]]);const xr={class:"container p-2"},Cr={class:"row gx-4 gy-3 pb-3 px-1 mt-lg-2 bg-light rounded"},Rr={setup(t){const e="8136588",r=window.location.origin+"/vk-oauth2"||"https://oauth.vk.com/blank.html",s=`https://oauth.vk.com/authorize?client_id=${e}&display=page&redirect_uri=${r}&scope=friends&response_type=token&v=5.81`,n=ae(Ve()),a=ae([]);i().then(f=>{a.value=f.map(d=>ne(re({},d),{list:1}))});const o=ie(()=>a.value.filter(f=>f.list===1)),u=ie(()=>a.value.filter(f=>f.list===2));function l({friendId:f,listNum:d}){const R=a.value.find(A=>A.id==f);R.list=d}function m(){console.log(u.value)}async function i(){var d;if(!n.value)return[];const{data:f}=await sr.get("https://api.vk.com/method/friends.get",{params:{v:"5.131",access_token:n.value.access_token,user_id:n.value.user_id,order:"name",count:5,fields:"first_name,last_name,photo_100,nickname"}});return((d=f==null?void 0:f.response)==null?void 0:d.items)||[]}function c(){We(),n.value=null,a.value=[]}return(f,d)=>($(),P("div",xr,[h("div",Cr,[oe(_e,{list:ue(o),listId:1,onUpdateCardList:l,title:"Friend List",class:"col-12 col-sm-6"},ze({_:2},[n.value?{name:"footer",fn:q(()=>[h("button",{class:"btn btn-primary",onClick:c},"Logout")])}:{name:"footer",fn:q(()=>[h("a",{class:"btn btn-primary",href:s}," Login with VK ")])}]),1032,["list"]),oe(_e,{list:ue(u),listId:2,onUpdateCardList:l,title:"Selected friends",class:"col-12 col-sm-6"},{footer:q(()=>[h("button",{onClick:m,class:"btn btn-primary"},"Export to console")]),_:1},8,["list"])])]))}};export{Rr as default};