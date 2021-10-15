import { IStripeParams } from './types';
export declare function getPopupParams(w: number, h: number): string;
export declare function createAuthParams(params: IStripeParams): {
    hash: string;
    url: string;
};
export declare function resolveOAuthParams(): void;
