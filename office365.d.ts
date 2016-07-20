declare module "nativescript-office365" {
    export class Office365 {
        public accessToken: string;
        public setClientIdScopes(clientId: string, scopes: Array<string>);
        public login<T>(clientId: string, scopes: Array<string>) : Promise<T>;
        public logout<T>():Promise<T>;
        public accessTokenExpired():boolean;
    }
}

