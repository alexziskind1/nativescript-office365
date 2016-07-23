declare module "nativescript-office365" {

     /**
     * The options object passed into the init function.
     */
    export interface InitOptions {
        clientId: string;
        scopes: Array<string>;
    }

    export function init(options: InitOptions): Promise<any>;
    export function accessToken() : string;
    export function setClientIdScopes(clientId: string, scopes: Array<string>);
    export function login<T>() : Promise<T>;
    export function logout<T>() : Promise<T>;
    export function accessTokenExpired() : boolean;
     
}

