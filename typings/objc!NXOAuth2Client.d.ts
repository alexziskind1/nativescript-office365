
declare var NXOAuth2AccessDeniedErrorCode: number;

declare class NXOAuth2AccessToken extends NSObject implements NSCoding {

	static alloc(): NXOAuth2AccessToken; // inherited from NSObject

	static new(): NXOAuth2AccessToken; // inherited from NSObject

	static tokenFromDefaultKeychainWithServiceProviderName(provider: string): any;

	static tokenWithResponseBody(responseBody: string): any;

	static tokenWithResponseBodyTokenType(responseBody: string, tokenType: string): any;

	/* readonly */ accessToken: string;

	/* readonly */ doesExpire: boolean;

	/* readonly */ expiresAt: Date;

	/* readonly */ hasExpired: boolean;

	/* readonly */ refreshToken: string;

	/* readonly */ responseBody: string;

	/* readonly */ scope: NSSet<any>;

	/* readonly */ tokenType: string;

	constructor(); // inherited from NSObject

	constructor(o: { accessToken: string; });

	constructor(o: { accessToken: string; refreshToken: string; expiresAt: Date; });

	constructor(o: { accessToken: string; refreshToken: string; expiresAt: Date; scope: NSSet<any>; });

	constructor(o: { accessToken: string; refreshToken: string; expiresAt: Date; scope: NSSet<any>; responseBody: string; });

	constructor(o: { accessToken: string; refreshToken: string; expiresAt: Date; scope: NSSet<any>; responseBody: string; tokenType: string; });

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	encodeWithCoder(aCoder: NSCoder): void; // inherited from NSCoding

	removeFromDefaultKeychainWithServiceProviderName(provider: string): void;

	restoreWithOldToken(oldToken: NXOAuth2AccessToken): void;

	self(): NXOAuth2AccessToken; // inherited from NSObjectProtocol

	storeInDefaultKeychainWithServiceProviderName(provider: string): void;
}

declare class NXOAuth2Account extends NSObject {

	static alloc(): NXOAuth2Account; // inherited from NSObject

	static new(): NXOAuth2Account; // inherited from NSObject

	/* readonly */ accessToken: NXOAuth2AccessToken;

	/* readonly */ accountType: string;

	/* readonly */ identifier: string;

	/* readonly */ oauthClient: NXOAuth2Client;

	userData: any;

	constructor(); // inherited from NSObject

	constructor(o: { accountWithAccessToken: NXOAuth2AccessToken; accountType: string; });

	constructor(o: { accountWithOAuthClient: NXOAuth2Client; accountType: string; });

	self(): NXOAuth2Account; // inherited from NSObjectProtocol
}

declare var NXOAuth2AccountDidChangeAccessTokenNotification: string;

declare var NXOAuth2AccountDidChangeUserDataNotification: string;

declare var NXOAuth2AccountDidFailToGetAccessTokenNotification: string;

declare var NXOAuth2AccountDidLoseAccessTokenNotification: string;

declare class NXOAuth2AccountStore extends NSObject {

	static alloc(): NXOAuth2AccountStore; // inherited from NSObject

	static new(): NXOAuth2AccountStore; // inherited from NSObject

	static sharedStore(): any;

	/* readonly */ accounts: NSArray<any>;

	constructor(); // inherited from NSObject

	accountWithIdentifier(identifier: string): NXOAuth2Account;

	accountsWithAccountType(accountType: string): NSArray<any>;

	addAccount(account: NXOAuth2Account): void;

	configurationForAccountType(accountType: string): NSDictionary<any, any>;

	handleRedirectURL(URL: NSURL): boolean;

	removeAccount(account: NXOAuth2Account): void;

	requestAccessToAccountWithType(accountType: string): void;

	requestAccessToAccountWithTypeAssertionTypeAssertion(accountType: string, assertionType: NSURL, assertion: string): void;

	requestAccessToAccountWithTypeUsernamePassword(accountType: string, username: string, password: string): void;

	requestAccessToAccountWithTypeWithPreparedAuthorizationURLHandler(accountType: string, aPreparedAuthorizationURLHandler: (p1: NSURL) => void): void;

	requestClientCredentialsAccessWithType(accountType: string): void;

	self(): NXOAuth2AccountStore; // inherited from NSObjectProtocol

	setClientIDSecretAuthorizationURLTokenURLRedirectURLForAccountType(aClientID: string, aSecret: string, anAuthorizationURL: NSURL, aTokenURL: NSURL, aRedirectURL: NSURL, anAccountType: string): void;

	setClientIDSecretScopeAuthorizationURLTokenURLRedirectURLKeyChainGroupForAccountType(aClientID: string, aSecret: string, theScope: NSSet<any>, anAuthorizationURL: NSURL, aTokenURL: NSURL, aRedirectURL: NSURL, aKeyChainGroup: string, anAccountType: string): void;

	setClientIDSecretScopeAuthorizationURLTokenURLRedirectURLKeyChainGroupTokenTypeForAccountType(aClientID: string, aSecret: string, theScope: NSSet<any>, anAuthorizationURL: NSURL, aTokenURL: NSURL, aRedirectURL: NSURL, aKeyChainGroup: string, aTokenType: string, anAccountType: string): void;

	setConfigurationForAccountType(configuration: NSDictionary<any, any>, accountType: string): void;

	setTrustModeHandlerForAccountTypeBlock(accountType: string, handler: (p1: NXOAuth2Connection, p2: string) => NXOAuth2TrustMode): void;

	setTrustedCertificatesHandlerForAccountTypeBlock(accountType: string, handler: (p1: string) => NSArray<any>): void;

	trustModeHandlerForAccountType(accountType: string): (p1: NXOAuth2Connection, p2: string) => NXOAuth2TrustMode;

	trustedCertificatesHandlerForAccountType(accountType: string): (p1: string) => NSArray<any>;
}

declare var NXOAuth2AccountStoreAccountsDidChangeNotification: string;

declare var NXOAuth2AccountStoreDidFailToRequestAccessNotification: string;

declare var NXOAuth2AccountStoreErrorKey: string;

declare var NXOAuth2AccountStoreNewAccountUserInfoKey: string;

declare class NXOAuth2Client extends NSObject implements NXOAuth2ConnectionDelegate {

	static alloc(): NXOAuth2Client; // inherited from NSObject

	static new(): NXOAuth2Client; // inherited from NSObject

	acceptType: string;

	accessToken: NXOAuth2AccessToken;

	additionalAuthenticationParameters: NSDictionary<any, any>;

	/* readonly */ authenticating: boolean;

	/* readonly */ clientId: string;

	/* readonly */ clientSecret: string;

	customHeaderFields: NSDictionary<any, any>;

	delegate: NSObject;

	desiredScope: NSSet<any>;

	persistent: boolean;

	tokenRequestHTTPMethod: string;

	/* readonly */ tokenType: string;

	userAgent: string;

	constructor(); // inherited from NSObject

	constructor(o: { clientID: string; clientSecret: string; authorizeURL: NSURL; tokenURL: NSURL; accessToken: NXOAuth2AccessToken; keyChainGroup: string; persistent: boolean; delegate: NSObject; });

	constructor(o: { clientID: string; clientSecret: string; authorizeURL: NSURL; tokenURL: NSURL; accessToken: NXOAuth2AccessToken; tokenType: string; keyChainGroup: string; persistent: boolean; delegate: NSObject; });

	constructor(o: { clientID: string; clientSecret: string; authorizeURL: NSURL; tokenURL: NSURL; delegate: NSObject; });

	authenticateWithAssertionTypeAssertion(assertionType: NSURL, assertion: string): void;

	authenticateWithClientCredentials(): void;

	authenticateWithUsernamePassword(username: string, password: string): void;

	authorizationURLWithRedirectURL(redirectURL: NSURL): NSURL;

	connectionTrustModeForHostname(connection: NXOAuth2Connection, hostname: string): NXOAuth2TrustMode; // inherited from NXOAuth2TrustDelegate

	connectionTrustedCertificatesForHostname(connection: NXOAuth2Connection, hostname: string): NSArray<any>; // inherited from NXOAuth2TrustDelegate

	oauthConnectionDidFailWithError(connection: NXOAuth2Connection, error: NSError): void; // inherited from NXOAuth2ConnectionDelegate

	oauthConnectionDidFinishWithData(connection: NXOAuth2Connection, data: NSData): void; // inherited from NXOAuth2ConnectionDelegate

	oauthConnectionDidReceiveData(connection: NXOAuth2Connection, data: NSData): void; // inherited from NXOAuth2ConnectionDelegate

	oauthConnectionDidReceiveRedirectToURL(connection: NXOAuth2Connection, redirectURL: NSURL): void; // inherited from NXOAuth2ConnectionDelegate

	oauthConnectionDidReceiveResponse(connection: NXOAuth2Connection, response: NSURLResponse): void; // inherited from NXOAuth2ConnectionDelegate

	oauthConnectionDidSendBytesOfTotal(connection: NXOAuth2Connection, bytesSend: number, bytesTotal: number): void; // inherited from NXOAuth2ConnectionDelegate

	openRedirectURL(URL: NSURL): boolean;

	refreshAccessToken(): void;

	refreshAccessTokenAndRetryConnection(retryConnection: NXOAuth2Connection): void;

	requestAccess(): void;

	self(): NXOAuth2Client; // inherited from NSObjectProtocol
}

declare var NXOAuth2ClientConnectionContextTokenRefresh: string;

declare var NXOAuth2ClientConnectionContextTokenRequest: string;

interface NXOAuth2ClientDelegate extends NXOAuth2TrustDelegate {

	oauthClientDidFailToGetAccessTokenWithError?(client: NXOAuth2Client, error: NSError): void;

	oauthClientDidGetAccessToken?(client: NXOAuth2Client): void;

	oauthClientDidLoseAccessToken?(client: NXOAuth2Client): void;

	oauthClientDidRefreshAccessToken?(client: NXOAuth2Client): void;

	oauthClientNeedsAuthentication(client: NXOAuth2Client): void;
}
declare var NXOAuth2ClientDelegate: {

	prototype: NXOAuth2ClientDelegate;
};

declare var NXOAuth2ClientVersionNumber: number;

declare var NXOAuth2ClientVersionString: interop.Reference<number>;

declare class NXOAuth2Connection extends NSObject {

	static alloc(): NXOAuth2Connection; // inherited from NSObject

	static new(): NXOAuth2Connection; // inherited from NSObject

	/* readonly */ client: NXOAuth2Client;

	context: any;

	/* readonly */ data: NSData;

	delegate: NSObject;

	/* readonly */ expectedContentLength: number;

	/* readonly */ response: NSURLResponse;

	savesData: boolean;

	/* readonly */ statusCode: number;

	userInfo: NSDictionary<any, any>;

	constructor(); // inherited from NSObject

	constructor(o: { request: NSMutableURLRequest; requestParameters: NSDictionary<any, any>; oauthClient: NXOAuth2Client; delegate: NSObject; });

	constructor(o: { request: NSMutableURLRequest; requestParameters: NSDictionary<any, any>; oauthClient: NXOAuth2Client; sendingProgressHandler: (p1: number, p2: number) => void; responseHandler: (p1: NSURLResponse, p2: NSData, p3: NSError) => void; });

	cancel(): void;

	retry(): void;

	self(): NXOAuth2Connection; // inherited from NSObjectProtocol
}

interface NXOAuth2ConnectionDelegate extends NSObjectProtocol, NXOAuth2TrustDelegate {

	oauthConnectionDidFailWithError?(connection: NXOAuth2Connection, error: NSError): void;

	oauthConnectionDidFinishWithData?(connection: NXOAuth2Connection, data: NSData): void;

	oauthConnectionDidReceiveData?(connection: NXOAuth2Connection, data: NSData): void;

	oauthConnectionDidReceiveRedirectToURL?(connection: NXOAuth2Connection, redirectURL: NSURL): void;

	oauthConnectionDidReceiveResponse?(connection: NXOAuth2Connection, response: NSURLResponse): void;

	oauthConnectionDidSendBytesOfTotal?(connection: NXOAuth2Connection, bytesSend: number, bytesTotal: number): void;
}
declare var NXOAuth2ConnectionDelegate: {

	prototype: NXOAuth2ConnectionDelegate;
};

declare var NXOAuth2ConnectionDidEndNotification: string;

declare var NXOAuth2ConnectionDidStartNotification: string;

declare var NXOAuth2CouldNotRefreshTokenErrorCode: number;

declare var NXOAuth2ErrorDomain: string;

declare class NXOAuth2FileStreamWrapper extends NSObject {

	static alloc(): NXOAuth2FileStreamWrapper; // inherited from NSObject

	static new(): NXOAuth2FileStreamWrapper; // inherited from NSObject

	static wrapperWithStreamContentLength(stream: NSInputStream, contentLength: number): any;

	static wrapperWithStreamContentLengthFileName(stream: NSInputStream, contentLength: number, fileName: string): any;

	/* readonly */ contentLength: number;

	contentType: string;

	/* readonly */ fileName: string;

	/* readonly */ stream: NSInputStream;

	constructor(); // inherited from NSObject

	constructor(o: { stream: NSInputStream; contentLength: number; });

	constructor(o: { stream: NSInputStream; contentLength: number; fileName: string; });

	self(): NXOAuth2FileStreamWrapper; // inherited from NSObjectProtocol
}

declare var NXOAuth2HTTPErrorDomain: string;

declare var NXOAuth2InvalidClientErrorCode: number;

declare var NXOAuth2InvalidRequestErrorCode: number;

declare var NXOAuth2InvalidScopeErrorCode: number;

declare class NXOAuth2PostBodyPart extends NSObject {

	static alloc(): NXOAuth2PostBodyPart; // inherited from NSObject

	static new(): NXOAuth2PostBodyPart; // inherited from NSObject

	static partWithNameContent(name: string, content: any): any;

	/* readonly */ contentHeaders: string;

	/* readonly */ contentLength: number;

	/* readonly */ contentStream: NSInputStream;

	constructor(); // inherited from NSObject

	constructor(o: { headers: string; dataContent: NSData; });

	constructor(o: { headers: string; streamContent: NSInputStream; length: number; });

	constructor(o: { name: string; content: any; });

	constructor(o: { name: string; streamContent: NSInputStream; streamLength: number; fileName: string; });

	self(): NXOAuth2PostBodyPart; // inherited from NSObjectProtocol
}

declare class NXOAuth2PostBodyStream extends NSInputStream {

	static inputStreamWithData(data: NSData): NXOAuth2PostBodyStream; // inherited from NSInputStream

	static inputStreamWithFileAtPath(path: string): NXOAuth2PostBodyStream; // inherited from NSInputStream

	static inputStreamWithURL(url: NSURL): NXOAuth2PostBodyStream; // inherited from NSInputStream

	/* readonly */ boundary: string;

	/* readonly */ length: number;

	constructor(o: { data: NSData; }); // inherited from NSInputStream

	constructor(o: { fileAtPath: string; }); // inherited from NSInputStream

	constructor(o: { parameters: NSDictionary<any, any>; });

	constructor(o: { URL: NSURL; }); // inherited from NSInputStream
}

declare var NXOAuth2RedirectURIMismatchErrorCode: number;

declare class NXOAuth2Request extends NSObject {

	static alloc(): NXOAuth2Request; // inherited from NSObject

	static new(): NXOAuth2Request; // inherited from NSObject

	static performMethodOnResourceUsingParametersWithAccountSendProgressHandlerResponseHandler(method: string, resource: NSURL, parameters: NSDictionary<any, any>, account: NXOAuth2Account, progressHandler: (p1: number, p2: number) => void, responseHandler: (p1: NSURLResponse, p2: NSData, p3: NSError) => void): void;

	account: NXOAuth2Account;

	parameters: NSDictionary<any, any>;

	requestMethod: string;

	resource: NSURL;

	constructor(); // inherited from NSObject

	constructor(o: { resource: NSURL; method: string; parameters: NSDictionary<any, any>; });

	cancel(): void;

	performRequestWithSendingProgressHandlerResponseHandler(progressHandler: (p1: number, p2: number) => void, responseHandler: (p1: NSURLResponse, p2: NSData, p3: NSError) => void): void;

	self(): NXOAuth2Request; // inherited from NSObjectProtocol

	signedURLRequest(): NSURLRequest;
}

interface NXOAuth2TrustDelegate extends NSObjectProtocol {

	connectionTrustModeForHostname?(connection: NXOAuth2Connection, hostname: string): NXOAuth2TrustMode;

	connectionTrustedCertificatesForHostname?(connection: NXOAuth2Connection, hostname: string): NSArray<any>;
}
declare var NXOAuth2TrustDelegate: {

	prototype: NXOAuth2TrustDelegate;
};

declare const enum NXOAuth2TrustMode {

	AnyCertificate = 1,

	System = 2,

	SpecificCertificate = 4
}

declare var NXOAuth2UnauthorizedClientErrorCode: number;

declare var NXOAuth2UnsupportedResponseTypeErrorCode: number;

declare var kNXOAuth2AccountStoreAccountType: string;

declare var kNXOAuth2AccountStoreConfigurationAdditionalAuthenticationParameters: string;

declare var kNXOAuth2AccountStoreConfigurationAuthorizeURL: string;

declare var kNXOAuth2AccountStoreConfigurationClientID: string;

declare var kNXOAuth2AccountStoreConfigurationCustomHeaderFields: string;

declare var kNXOAuth2AccountStoreConfigurationRedirectURL: string;

declare var kNXOAuth2AccountStoreConfigurationScope: string;

declare var kNXOAuth2AccountStoreConfigurationSecret: string;

declare var kNXOAuth2AccountStoreConfigurationTokenRequestHTTPMethod: string;

declare var kNXOAuth2AccountStoreConfigurationTokenType: string;

declare var kNXOAuth2AccountStoreConfigurationTokenURL: string;
