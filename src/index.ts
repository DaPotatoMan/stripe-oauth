import { IPopupParams } from './types';
import { createAuthParams, getPopupParams } from './utils';

function onWindowClosed(target: Window, callback: VoidFunction) {
   const timer = setInterval(() => {
      if (target.closed) {
         clearInterval(timer);
         callback?.();
      }
   }, 1000);
}

export function getOAuthCode(params: IPopupParams): Promise<string> {
   const isModal = !!params.options?.modal;

   const authParams = createAuthParams(params.stripe);
   const view = window.open(
      authParams.url,
      isModal ? Date.now().toString() : '_blank',
      isModal
         ? getPopupParams(...(params.options.size || [900, 600]))
         : undefined
   ) as Window;

   view.focus();

   // Methods
   return new Promise((resolve, reject) => {
      function onAuthorized(event: MessageEvent) {
         if (event?.data?.hash === authParams.hash) {
            window.removeEventListener('message', onAuthorized);

            // Close window
            setTimeout(() => view.close(), 2000);

            // Resolve Response Code
            resolve(event.data?.code);
         }
      }

      // Events
      onWindowClosed(view, () => {
         window.removeEventListener('message', onAuthorized);
         reject(new Error('Window was closed'));
      });

      window.addEventListener('message', onAuthorized);
   });
}
