var b=Object.defineProperty,A=Object.defineProperties;var v=Object.getOwnPropertyDescriptors;var f=Object.getOwnPropertySymbols;var L=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable;var p=(o,e,i)=>e in o?b(o,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):o[e]=i,m=(o,e)=>{for(var i in e||(e={}))L.call(e,i)&&p(o,i,e[i]);if(f)for(var i of f(e))C.call(e,i)&&p(o,i,e[i]);return o},w=(o,e)=>A(o,v(e));(function(o,e){typeof exports=="object"&&typeof module!="undefined"?e(exports):typeof define=="function"&&define.amd?define(["exports"],e):(o=typeof globalThis!="undefined"?globalThis:o||self,e(o.StripeOAuth={}))})(this,function(o){"use strict";let e=(n=21)=>{let t="",r=crypto.getRandomValues(new Uint8Array(n));for(;n--;){let s=r[n]&63;s<36?t+=s.toString(36):s<62?t+=(s-26).toString(36).toUpperCase():s<63?t+="_":t+="-"}return t};function i(n,t){const{width:r,height:s}=window.screen,d=(r-n)/2,a=(s-t)/2;return`
      status=no,
      menubar=no,
      toolbar=no,
      location=no,
      directories=no,
      copyhistory=no,
      resizable=yes,
      scrollbars=yes,
      width=${n},
      height=${t},
      top=${a},
      left=${d}
   `}function g(n){const t=e(),r=new URL("https://connect.stripe.com/oauth/authorize");return r.search=new URLSearchParams(w(m({},n),{state:t})).toString(),{hash:t,url:r.toString()}}function y(n,t){const r=setInterval(()=>{n.closed&&(clearInterval(r),t==null||t())},1e3)}function S(n){var d;const t=!!((d=n.options)==null?void 0:d.modal),r=g(n.stripe),s=window.open(r.url,t?Date.now().toString():"_blank",t?i(...n.options.size||[900,600]):void 0);return s.focus(),new Promise((a,P)=>{function c(u){var h,l;((h=u==null?void 0:u.data)==null?void 0:h.hash)===r.hash&&(s.removeEventListener("message",c),setTimeout(s.close,2e3),a((l=u.data)==null?void 0:l.code))}y(s,()=>{s.removeEventListener("message",c),P("Window was closed")}),window.addEventListener("message",c)})}o.getOAuthCode=S,Object.defineProperty(o,"__esModule",{value:!0}),o[Symbol.toStringTag]="Module"});
