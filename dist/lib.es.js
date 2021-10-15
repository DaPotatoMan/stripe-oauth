var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
let nanoid = (size = 21) => {
  let id = "";
  let bytes = crypto.getRandomValues(new Uint8Array(size));
  while (size--) {
    let byte = bytes[size] & 63;
    if (byte < 36) {
      id += byte.toString(36);
    } else if (byte < 62) {
      id += (byte - 26).toString(36).toUpperCase();
    } else if (byte < 63) {
      id += "_";
    } else {
      id += "-";
    }
  }
  return id;
};
function getPopupParams(w, h) {
  const { width, height } = window.screen;
  const left = (width - w) / 2;
  const top = (height - h) / 2;
  return `
      status=no,
      menubar=no,
      toolbar=no,
      location=no,
      directories=no,
      copyhistory=no,
      resizable=yes,
      scrollbars=yes,
      width=${w},
      height=${h},
      top=${top},
      left=${left}
   `;
}
function createAuthParams(params) {
  const hash = nanoid();
  const url = new URL("https://connect.stripe.com/oauth/authorize");
  url.search = new URLSearchParams(__spreadProps(__spreadValues({}, params), {
    state: hash
  })).toString();
  return {
    hash,
    url: url.toString()
  };
}
function resolveOAuthParams() {
  const params = new URLSearchParams(window.location.search);
  const data = {
    hash: params.get("state"),
    code: params.get("code")
  };
  if (window.opener) {
    window.opener.postMessage(data, { targetOrigin: "*" });
  }
}
function onWindowClosed(target, callback) {
  const timer = setInterval(() => {
    if (target.closed) {
      clearInterval(timer);
      callback == null ? void 0 : callback();
    }
  }, 1e3);
}
function getOAuthCode(params) {
  var _a;
  const isModal = !!((_a = params.options) == null ? void 0 : _a.modal);
  const authParams = createAuthParams(params.stripe);
  const view = window.open(authParams.url, isModal ? Date.now().toString() : "_blank", isModal ? getPopupParams(...params.options.size || [900, 600]) : void 0);
  view.focus();
  return new Promise((resolve, reject) => {
    function onAuthorized(event) {
      var _a2, _b;
      if (((_a2 = event == null ? void 0 : event.data) == null ? void 0 : _a2.hash) === authParams.hash) {
        view.removeEventListener("message", onAuthorized);
        setTimeout(view.close, 2e3);
        resolve((_b = event.data) == null ? void 0 : _b.code);
      }
    }
    onWindowClosed(view, () => {
      view.removeEventListener("message", onAuthorized);
      reject("Window was closed");
    });
    window.addEventListener("message", onAuthorized);
  });
}
export { getOAuthCode, resolveOAuthParams };
