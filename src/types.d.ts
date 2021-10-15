/// <reference types="vite/client" />

export interface IStripeParams extends Record<string, string> {
   client_id: string;
   response_type: string;
   scope: string;
   redirect_uri: string;
}

export interface IPopupWindowOptions {
   size: [number, number];
   modal: boolean;
   centered: boolean;
}

export interface IPopupParams {
   stripe: IStripeParams;
   options: IPopupWindowOptions;
}
