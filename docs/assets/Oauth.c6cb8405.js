var d=Object.defineProperty,h=Object.defineProperties;var m=Object.getOwnPropertyDescriptors;var n=Object.getOwnPropertySymbols;var y=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable;var u=(t,s,e)=>s in t?d(t,s,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[s]=e,p=(t,s)=>{for(var e in s||(s={}))y.call(s,e)&&u(t,e,s[e]);if(n)for(var e of n(s))v.call(s,e)&&u(t,e,s[e]);return t},i=(t,s)=>h(t,m(s));import{_ as x,j as g}from"./index.a8a65388.js";import{s as j}from"./index.e2c2e0a9.js";const k={props:{hash:{type:String,default:""}},setup(t){const s=t,e=g(),_=s.hash.slice(1).split("&").reduce((o,c)=>{const[f,l]=c.split("=");return i(p({},o),{[f]:l})},{}),{access_token:r,user_id:a}=_;return r&&a&&j(r,a),e.replace("/"),(o,c)=>null}};var F=x(k,[["__file","C:/Dayana/documents/study/Frontend/Projects/friends-app/src/pages/Oauth.vue"]]);export{F as default};