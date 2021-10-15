import { nanoid } from 'nanoid';
import { IStripeParams } from './types';

export function getPopupParams(w: number, h: number) {
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

export function createAuthParams(params: IStripeParams) {
   const hash = nanoid();
   const url = new URL('https://connect.stripe.com/oauth/authorize');

   url.search = new URLSearchParams({
      ...params,
      state: hash
   }).toString();

   return {
      hash,
      url: url.toString()
   };
}

export function resolveOAuthParams() {
   const params = new URLSearchParams(window.location.search);
   const data = {
      hash: params.get('state'),
      code: params.get('code')
   };

   if (window.opener) {
      window.opener.postMessage(data, { targetOrigin: '*' });
   }
}
