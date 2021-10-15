import { IPopupParams } from './types';
export { resolveOAuthParams } from './utils';
export declare function getOAuthCode(params: IPopupParams): Promise<string>;
