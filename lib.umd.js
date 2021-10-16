var b=Object.defineProperty,A=Object.defineProperties;var v=Object.getOwnPropertyDescriptors;var f=Object.getOwnPropertySymbols;var L=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable;var w=(o,e,i)=>e in o?b(o,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):o[e]=i,p=(o,e)=>{for(var i in e||(e={}))L.call(e,i)&&w(o,i,e[i]);if(f)for(var i of f(e))C.call(e,i)&&w(o,i,e[i]);return o},m=(o,e)=>A(o,v(e));(function(o,e){typeof exports=="object"&&typeof module!="undefined"?e(exports):typeof define=="function"&&define.amd?define(["exports"],e):(o=typeof globalThis!="undefined"?globalThis:o||self,e(o.StripeOAuth={}))})(this,function(o){"use strict";let e=(n=21)=>{let t="",s=crypto.getRandomValues(new Uint8Array(n));for(;n--;){let r=s[n]&63;r<36?t+=r.toString(36):r<62?t+=(r-26).toString(36).toUpperCase():r<63?t+="_":t+="-"}return t};function i(n,t){const{width:s,height:r}=window.screen,d=(s-n)/2,a=(r-t)/2;return`
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
   `}function g(n){const t=e(),s=new URL("https://connect.stripe.com/oauth/authorize");return s.search=new URLSearchParams(m(p({},n),{state:t})).toString(),{hash:t,url:s.toString()}}function y(n,t){const s=setInterval(()=>{n.closed&&(clearInterval(s),t==null||t())},1e3)}function S(n){var d;const t=!!((d=n.options)==null?void 0:d.modal),s=g(n.stripe),r=window.open(s.url,t?Date.now().toString():"_blank",t?i(...n.options.size||[900,600]):void 0);return r.focus(),new Promise((a,P)=>{function c(u){var h,l;((h=u==null?void 0:u.data)==null?void 0:h.hash)===s.hash&&(window.removeEventListener("message",c),setTimeout(()=>r.close(),2e3),a((l=u.data)==null?void 0:l.code))}y(r,()=>{window.removeEventListener("message",c),P(new Error("Window was closed"))}),window.addEventListener("message",c)})}o.getOAuthCode=S,Object.defineProperty(o,"__esModule",{value:!0}),o[Symbol.toStringTag]="Module"});
