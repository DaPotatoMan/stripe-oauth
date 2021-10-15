var v=Object.defineProperty,O=Object.defineProperties;var b=Object.getOwnPropertyDescriptors;var f=Object.getOwnPropertySymbols;var L=Object.prototype.hasOwnProperty,U=Object.prototype.propertyIsEnumerable;var w=(t,o,i)=>o in t?v(t,o,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[o]=i,p=(t,o)=>{for(var i in o||(o={}))L.call(o,i)&&w(t,i,o[i]);if(f)for(var i of f(o))U.call(o,i)&&w(t,i,o[i]);return t},g=(t,o)=>O(t,b(o));(function(t,o){typeof exports=="object"&&typeof module!="undefined"?o(exports):typeof define=="function"&&define.amd?define(["exports"],o):(t=typeof globalThis!="undefined"?globalThis:t||self,o(t.StripeOAuth={}))})(this,function(t){"use strict";let o=(n=21)=>{let e="",r=crypto.getRandomValues(new Uint8Array(n));for(;n--;){let s=r[n]&63;s<36?e+=s.toString(36):s<62?e+=(s-26).toString(36).toUpperCase():s<63?e+="_":e+="-"}return e};function i(n,e){const{width:r,height:s}=window.screen,a=(r-n)/2,u=(s-e)/2;return`
      status=no,
      menubar=no,
      toolbar=no,
      location=no,
      directories=no,
      copyhistory=no,
      resizable=yes,
      scrollbars=yes,
      width=${n},
      height=${e},
      top=${u},
      left=${a}
   `}function m(n){const e=o(),r=new URL("https://connect.stripe.com/oauth/authorize");return r.search=new URLSearchParams(g(p({},n),{state:e})).toString(),{hash:e,url:r.toString()}}function y(){const n=new URLSearchParams(window.location.search),e={hash:n.get("state"),code:n.get("code")};window.opener&&window.opener.postMessage(e,{targetOrigin:"*"})}function P(n,e){const r=setInterval(()=>{n.closed&&(clearInterval(r),e==null||e())},1e3)}function S(n){var a;const e=!!((a=n.options)==null?void 0:a.modal),r=m(n.stripe),s=window.open(r.url,e?Date.now().toString():"_blank",e?i(...n.options.size||[900,600]):void 0);return s.focus(),new Promise((u,A)=>{function c(d){var h,l;((h=d==null?void 0:d.data)==null?void 0:h.hash)===r.hash&&(s.removeEventListener("message",c),setTimeout(s.close,2e3),u((l=d.data)==null?void 0:l.code))}P(s,()=>{s.removeEventListener("message",c),A("Window was closed")}),window.addEventListener("message",c)})}t.getOAuthCode=S,t.resolveOAuthParams=y,Object.defineProperty(t,"__esModule",{value:!0}),t[Symbol.toStringTag]="Module"});
