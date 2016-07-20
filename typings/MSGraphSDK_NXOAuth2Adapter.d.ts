
declare const enum MSAccountType {

	UnknownAccount = 0,

	MSAAccount = 1,

	ADAccount = 2
}

declare const enum MSAuthErrorType {

	NetworkError = 0,

	ServiceError = 1,

	SerializationError = 2,

	AuthCanceled = 3,

	InvalidAccountType = 4
}

declare class MSAuthenticationViewController extends UIViewController {

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	constructor(o: { nibName: string; bundle: NSBundle; }); // inherited from UIViewController

	constructor(o: { startURL: NSURL; endURL: NSURL; success: (p1: NSURL, p2: NSError) => void; });

	loadInitialRequest(): void;

	redirectWithStartURLEndURLSuccess(startURL: NSURL, endURL: NSURL, successCompletion: (p1: NSURL, p2: NSError) => void): void;

	self(): MSAuthenticationViewController; // inherited from NSObjectProtocol
}

declare var MSGraphSDK_NXOAuth2AdapterVersionNumber: number;

declare var MSGraphSDK_NXOAuth2AdapterVersionString: interop.Reference<number>;

declare var MS_AADV2_AUTH_URL: string;

declare var MS_AADV2_LOGOUT_URL: string;

declare var MS_AADV2_REDIRECT_URL: string;

declare var MS_AADV2_TOKEN_TYPE: string;

declare var MS_AADV2_TOKEN_URL: string;

declare var MS_API_HEADER_AUTHORIZATION: string;

declare var MS_AUTH_ERROR_DOMAIN: string;

declare class NXOAuth2AuthenticationProvider extends NSObject implements MSAuthenticationProvider {

	static alloc(): NXOAuth2AuthenticationProvider; // inherited from NSObject

	static new(): NXOAuth2AuthenticationProvider; // inherited from NSObject

	static setClientIdScopes(clientId: string, scopes: NSArray<any>): void;

	static sharedAuthProvider(): NXOAuth2AuthenticationProvider;

	authorizationURL: string;

	/* readonly */ clientId: string;

	redirectURL: string;

	/* readonly */ scopes: NSArray<any>;

	tokenType: string;

	tokenURL: string;

	constructor(); // inherited from NSObject

	appendAuthenticationHeadersCompletion(request: NSMutableURLRequest, completionHandler: (p1: NSMutableURLRequest, p2: NSError) => void): void; // inherited from MSAuthenticationProvider

	loginSilent(): boolean;

	loginWithViewControllerCompletion(viewController: UIViewController, completionHandler: (p1: NSError) => void): void;

	logout(): void;

	self(): NXOAuth2AuthenticationProvider; // inherited from NSObjectProtocol

	setClientIdScopes(clientId: string, scopes: NSArray<any>): void;
}
