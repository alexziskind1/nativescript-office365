import * as applicationModule from 'application';
import * as utils from 'utils/utils';
import {InitOptions} from "nativescript-office365";

class Office365 {

  public client: MSGraphClient;
  public accessToken: string;

  public setClientIdScopes(clientId: string, scopes: Array<string>) {
    NXOAuth2AuthenticationProvider.setClientIdScopes(clientId, utils.ios.collections.jsArrayToNSArray (scopes));
  }

  public login<T>() : Promise<T> {
    var iosApp = applicationModule.ios;

    return new Promise<T>((resolve, reject)=>{
        if (this.tryLoginSilent()) {
            MSGraphClient.setAuthenticationProvider(NXOAuth2AuthenticationProvider.sharedAuthProvider());
            this.client = MSGraphClient.client();
            this.saveAccessToken();
            resolve();
        }
        else {
            NXOAuth2AuthenticationProvider.sharedAuthProvider().loginWithViewControllerCompletion(iosApp.rootController, (er) => {
                if (er != null) {
                    reject(er);
                }
                else {
                    MSGraphClient.setAuthenticationProvider(NXOAuth2AuthenticationProvider.sharedAuthProvider());
                    this.client = MSGraphClient.client();
                    this.saveAccessToken();
                    resolve();
                }
            });
        } 
    });
  }

  public tryLoginSilent() {
      return NXOAuth2AuthenticationProvider.sharedAuthProvider().loginSilent();
  }

  public logout<T>():Promise<T> {
      return new Promise<T>((resolve, reject) => {
          try {
              NXOAuth2AuthenticationProvider.sharedAuthProvider().logout();
              resolve();
          }
          catch(er) {
              reject(er);
          }
      });
  }

  public saveAccessToken() {
      var accounts = NXOAuth2AccountStore.sharedStore().accountsWithAccountType("MSGraph");
      if (accounts.count > 0) {
          var account: NXOAuth2Account = accounts[0];
          this.accessToken = account.accessToken.accessToken;
          //console.log('accessToken is: ' + account.accessToken.hasExpired);
      }
  }

  public accessTokenExpired() : boolean {
      var accounts = NXOAuth2AccountStore.sharedStore().accountsWithAccountType("MSGraph");
      if (accounts.count > 0) {
          var account: NXOAuth2Account = accounts[0];
          var hasExpired = account.accessToken.hasExpired;
          return hasExpired;
      }
      return true;
  }
}

export var instance : Office365 = null;

export function init(options: InitOptions) : Promise<any> {
  return new Promise(function (resolve, reject) {
    try {
      if (instance !== null) {
        reject("You already ran init");
        return;
      }

      instance = new Office365();
      instance.setClientIdScopes(options.clientId, options.scopes);
      resolve(instance);
    } catch (ex) {
      console.log("Error in office365.init: " + ex);
      reject(ex);
    }
  });
}

export function accessToken() : string {
    return instance.accessToken;
}
export function setClientIdScopes(clientId: string, scopes: Array<string>) {
    instance.setClientIdScopes(clientId, scopes);
}
export function login<T>() : Promise<T> {
    return instance.login();
}
export function logout<T>() : Promise<T> {
    return instance.logout();
}
export function accessTokenExpired() : boolean {
    return instance.accessTokenExpired();
}