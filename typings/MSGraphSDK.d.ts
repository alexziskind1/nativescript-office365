
declare var MSAccessDeniedError: string;

declare var MSActivityLimitReachedError: string;

declare class MSAsyncURLSessionDataTask extends MSURLSessionTask {

	progress: NSProgress;

	constructor(o: { request: NSMutableURLRequest; client: ODataBaseClient; }); // inherited from MSURLSessionTask
}

interface MSAuthenticationProvider extends NSObjectProtocol {

	appendAuthenticationHeadersCompletion(request: NSMutableURLRequest, completionHandler: (p1: NSMutableURLRequest, p2: NSError) => void): void;
}
declare var MSAuthenticationProvider: {

	prototype: MSAuthenticationProvider;
};

declare class MSBlockAuthenticationProvider extends NSObject implements MSAuthenticationProvider {

	static alloc(): MSBlockAuthenticationProvider; // inherited from NSObject

	static new(): MSBlockAuthenticationProvider; // inherited from NSObject

	static providerWithBlock(block: (p1: NSMutableURLRequest, p2: (p1: NSMutableURLRequest, p2: NSError) => void) => void): MSBlockAuthenticationProvider;

	constructor(); // inherited from NSObject

	appendAuthenticationHeadersCompletion(request: NSMutableURLRequest, completionHandler: (p1: NSMutableURLRequest, p2: NSError) => void): void; // inherited from MSAuthenticationProvider

	self(): MSBlockAuthenticationProvider; // inherited from NSObjectProtocol
}

declare const enum MSClientErrorCode {

	BadRequest = 400,

	Unauthorized = 401,

	Forbidden = 403,

	NotFound = 404,

	MethodNotAllowed = 405,

	UNACCEPTABLE = 406,

	Conflict = 409,

	LengthRequired = 411,

	PreconditionFailed = 412,

	RequestEntityTooLarge = 413,

	UnsupportedMediaType = 415,

	RequestRangeNotSatisfiable = 416,

	UnprocessableEntity = 422,

	TooManyRequests = 429,

	InternalServerError = 500,

	NotImplemented = 501,

	ServiceUnavailable = 503,

	InsufficientStorage = 507,

	UnknownError = 999
}

declare class MSCollection extends NSObject {

	static alloc(): MSCollection; // inherited from NSObject

	static new(): MSCollection; // inherited from NSObject

	additionalData: NSDictionary<any, any>;

	nextLink: NSURL;

	value: NSArray<any>;

	constructor(); // inherited from NSObject

	constructor(o: { array: NSArray<any>; nextLink: string; additionalData: NSDictionary<any, any>; });

	arrayFromItem(): NSArray<any>;

	self(): MSCollection; // inherited from NSObjectProtocol
}

declare class MSCollectionRequest extends MSRequest {

	constructor(o: { URL: NSURL; client: ODataBaseClient; }); // inherited from MSRequest

	constructor(o: { URL: NSURL; options: NSArray<any>; client: ODataBaseClient; }); // inherited from MSRequest

	collectionTaskWithRequestOdObjectWithDictionaryCompletion(request: NSMutableURLRequest, castBlock: (p1: NSDictionary<any, any>) => MSObject, completionHandler: (p1: MSCollection, p2: NSError) => void): MSURLSessionDataTask;

	expand(expand: string): MSCollectionRequest; // inherited from MSRequest

	ifMatch(ifMatch: string): MSCollectionRequest; // inherited from MSRequest

	ifNoneMatch(ifNoneMatch: string): MSCollectionRequest; // inherited from MSRequest

	nameConflict(nameConflict: MSNameConflict): MSCollectionRequest; // inherited from MSRequest

	orderBy(orderBy: string): MSCollectionRequest; // inherited from MSRequest

	select(select: string): MSCollectionRequest; // inherited from MSRequest

	top(top: number): MSCollectionRequest; // inherited from MSRequest
}

declare class MSCollectionRequestBuilder extends MSRequestBuilder {

	constructor(o: { URL: NSURL; client: ODataBaseClient; }); // inherited from MSRequestBuilder
}

declare var MSCollectionValueKey: string;

declare class MSDate extends NSObject {

	static alloc(): MSDate; // inherited from NSObject

	static date(): MSDate;

	static dateWithYearMonthDay(year: number, month: number, day: number): MSDate;

	static ms_dateFromString(dateString: string): MSDate;

	static new(): MSDate; // inherited from NSObject

	/* readonly */ day: number;

	/* readonly */ month: number;

	/* readonly */ year: number;

	constructor(); // inherited from NSObject

	constructor(o: { NSDate: Date; });

	constructor(o: { year: number; month: number; day: number; });

	ms_toString(): string;

	self(): MSDate; // inherited from NSObjectProtocol
}

declare class MSError extends NSObject {

	static alloc(): MSError; // inherited from NSObject

	static errorWithDictionary(dictionary: NSDictionary<any, any>): MSError;

	static new(): MSError; // inherited from NSObject

	code: string;

	innerError: MSError;

	message: string;

	constructor(); // inherited from NSObject

	matches(code: string): boolean;

	self(): MSError; // inherited from NSObjectProtocol
}

declare var MSErrorDomain: string;

declare var MSErrorKey: string;

declare class MSExpandOptions extends MSQueryParameters {

	static expand(expand: string): MSExpandOptions;
}

declare const enum MSExpectedResponseCodes {

	OK = 200,

	Created = 201,

	Accepted = 202,

	NotModified = 304
}

declare class MSFunctionParameters extends MSRequestOptions {

	constructor(o: { key: string; value: string; }); // inherited from MSRequestOptions
}

declare var MSGeneralExceptionError: string;

declare class MSGraphAlternativeSecurityId extends MSObject {

	identityProvider: string;

	key: string;

	type: number;

	constructor(o: { dictionary: NSDictionary<any, any>; }); // inherited from MSObject
}

declare var MSGraphApiEndpoint: string;

declare var MSGraphApiVersion: string;

declare class MSGraphAssignedLicense extends MSObject {

	disabledPlans: NSArray<any>;

	skuId: string;

	constructor(o: { dictionary: NSDictionary<any, any>; }); // inherited from MSObject
}

declare class MSGraphAssignedPlan extends MSObject {

	assignedDateTime: Date;

	capabilityStatus: string;

	service: string;

	servicePlanId: string;

	constructor(o: { dictionary: NSDictionary<any, any>; }); // inherited from MSObject
}

declare class MSGraphAttachment extends MSGraphEntity {

	contentType: string;

	isInline: boolean;

	lastModifiedDateTime: Date;

	name: string;

	size: number;
}

declare class MSGraphAttachmentRequest extends MSRequest {

	constructor(o: { URL: NSURL; client: ODataBaseClient; }); // inherited from MSRequest

	constructor(o: { URL: NSURL; options: NSArray<any>; client: ODataBaseClient; }); // inherited from MSRequest

	deleteWithCompletion(completionHandler: (p1: NSError) => void): MSURLSessionDataTask;

	expand(expand: string): MSGraphAttachmentRequest; // inherited from MSRequest

	getWithCompletion(completionHandler: (p1: MSGraphAttachment, p2: NSError) => void): MSURLSessionDataTask;

	ifMatch(ifMatch: string): MSGraphAttachmentRequest; // inherited from MSRequest

	ifNoneMatch(ifNoneMatch: string): MSGraphAttachmentRequest; // inherited from MSRequest

	nameConflict(nameConflict: MSNameConflict): MSGraphAttachmentRequest; // inherited from MSRequest

	orderBy(orderBy: string): MSGraphAttachmentRequest; // inherited from MSRequest

	select(select: string): MSGraphAttachmentRequest; // inherited from MSRequest

	top(top: number): MSGraphAttachmentRequest; // inherited from MSRequest

	updateWithCompletion(attachment: MSGraphAttachment, completionHandler: (p1: MSGraphAttachment, p2: NSError) => void): MSURLSessionDataTask;
}

declare class MSGraphAttachmentRequestBuilder extends MSGraphEntityRequestBuilder {

	request(): MSGraphAttachmentRequest;

	requestWithOptions(options: NSArray<any>): MSGraphAttachmentRequest;
}

declare class MSGraphAttendee extends MSGraphRecipient {

	status: MSGraphResponseStatus;

	type: MSGraphAttendeeType;
}

declare class MSGraphAttendeeType extends NSObject {

	static UnknownEnumValue(): MSGraphAttendeeType;

	static alloc(): MSGraphAttendeeType; // inherited from NSObject

	static attendeeTypeWithEnumValue(val: MSGraphAttendeeTypeValue): MSGraphAttendeeType;

	static new(): MSGraphAttendeeType; // inherited from NSObject

	static optional(): MSGraphAttendeeType;

	static required(): MSGraphAttendeeType;

	static resource(): MSGraphAttendeeType;

	/* readonly */ enumValue: MSGraphAttendeeTypeValue;

	constructor(); // inherited from NSObject

	ms_toString(): string;

	self(): MSGraphAttendeeType; // inherited from NSObjectProtocol
}

declare const enum MSGraphAttendeeTypeValue {

	Required = 0,

	Optional = 1,

	Resource = 2,

	EndOfEnum = 3
}

declare class MSGraphAudio extends MSObject {

	album: string;

	albumArtist: string;

	artist: string;

	bitrate: number;

	composers: string;

	copyright: string;

	disc: number;

	discCount: number;

	duration: number;

	genre: string;

	hasDrm: boolean;

	isVariableBitrate: boolean;

	title: string;

	track: number;

	trackCount: number;

	year: number;

	constructor(o: { dictionary: NSDictionary<any, any>; }); // inherited from MSObject
}

declare class MSGraphBodyType extends NSObject {

	static UnknownEnumValue(): MSGraphBodyType;

	static alloc(): MSGraphBodyType; // inherited from NSObject

	static bodyTypeWithEnumValue(val: MSGraphBodyTypeValue): MSGraphBodyType;

	static html(): MSGraphBodyType;

	static new(): MSGraphBodyType; // inherited from NSObject

	static text(): MSGraphBodyType;

	/* readonly */ enumValue: MSGraphBodyTypeValue;

	constructor(); // inherited from NSObject

	ms_toString(): string;

	self(): MSGraphBodyType; // inherited from NSObjectProtocol
}

declare const enum MSGraphBodyTypeValue {

	Text = 0,

	Html = 1,

	EndOfEnum = 2
}

declare class MSGraphCalendar extends MSGraphEntity {

	calendarView: NSArray<any>;

	changeKey: string;

	color: MSGraphCalendarColor;

	events: NSArray<any>;

	name: string;
}

declare class MSGraphCalendarCalendarViewCollectionRequest extends MSCollectionRequest {

	addEventWithCompletion(event: MSGraphEvent, completionHandler: (p1: MSGraphEvent, p2: NSError) => void): MSURLSessionDataTask;

	getWithCompletion(completionHandler: (p1: MSCollection, p2: MSGraphCalendarCalendarViewCollectionRequest, p3: NSError) => void): MSURLSessionDataTask;
}

declare class MSGraphCalendarCalendarViewCollectionRequestBuilder extends MSCollectionRequestBuilder {

	event(event: string): MSGraphEventRequestBuilder;

	request(): MSGraphCalendarCalendarViewCollectionRequest;

	requestWithOptions(options: NSArray<any>): MSGraphCalendarCalendarViewCollectionRequest;
}

declare class MSGraphCalendarColor extends NSObject {

	static UnknownEnumValue(): MSGraphCalendarColor;

	static alloc(): MSGraphCalendarColor; // inherited from NSObject

	static auto(): MSGraphCalendarColor;

	static calendarColorWithEnumValue(val: MSGraphCalendarColorValue): MSGraphCalendarColor;

	static lightBlue(): MSGraphCalendarColor;

	static lightBrown(): MSGraphCalendarColor;

	static lightGray(): MSGraphCalendarColor;

	static lightGreen(): MSGraphCalendarColor;

	static lightOrange(): MSGraphCalendarColor;

	static lightPink(): MSGraphCalendarColor;

	static lightRed(): MSGraphCalendarColor;

	static lightTeal(): MSGraphCalendarColor;

	static lightYellow(): MSGraphCalendarColor;

	static maxColor(): MSGraphCalendarColor;

	static new(): MSGraphCalendarColor; // inherited from NSObject

	/* readonly */ enumValue: MSGraphCalendarColorValue;

	constructor(); // inherited from NSObject

	ms_toString(): string;

	self(): MSGraphCalendarColor; // inherited from NSObjectProtocol
}

declare const enum MSGraphCalendarColorValue {

	Auto = -1,

	LightBlue = 0,

	LightGreen = 1,

	LightOrange = 2,

	LightGray = 3,

	LightYellow = 4,

	LightTeal = 5,

	LightPink = 6,

	LightBrown = 7,

	LightRed = 8,

	MaxColor = 9,

	EndOfEnum = 10
}

declare class MSGraphCalendarEventsCollectionRequest extends MSCollectionRequest {

	addEventWithCompletion(event: MSGraphEvent, completionHandler: (p1: MSGraphEvent, p2: NSError) => void): MSURLSessionDataTask;

	getWithCompletion(completionHandler: (p1: MSCollection, p2: MSGraphCalendarEventsCollectionRequest, p3: NSError) => void): MSURLSessionDataTask;
}

declare class MSGraphCalendarEventsCollectionRequestBuilder extends MSCollectionRequestBuilder {

	event(event: string): MSGraphEventRequestBuilder;

	request(): MSGraphCalendarEventsCollectionRequest;

	requestWithOptions(options: NSArray<any>): MSGraphCalendarEventsCollectionRequest;
}

declare class MSGraphCalendarGroup extends MSGraphEntity {

	calendars: NSArray<any>;

	changeKey: string;

	classId: string;

	name: string;
}

declare class MSGraphCalendarGroupCalendarsCollectionRequest extends MSCollectionRequest {

	addCalendarWithCompletion(calendar: MSGraphCalendar, completionHandler: (p1: MSGraphCalendar, p2: NSError) => void): MSURLSessionDataTask;

	getWithCompletion(completionHandler: (p1: MSCollection, p2: MSGraphCalendarGroupCalendarsCollectionRequest, p3: NSError) => void): MSURLSessionDataTask;
}

declare class MSGraphCalendarGroupCalendarsCollectionRequestBuilder extends MSCollectionRequestBuilder {

	calendar(calendar: string): MSGraphCalendarRequestBuilder;

	request(): MSGraphCalendarGroupCalendarsCollectionRequest;

	requestWithOptions(options: NSArray<any>): MSGraphCalendarGroupCalendarsCollectionRequest;
}

declare class MSGraphCalendarGroupRequest extends MSRequest {

	constructor(o: { URL: NSURL; client: ODataBaseClient; }); // inherited from MSRequest

	constructor(o: { URL: NSURL; options: NSArray<any>; client: ODataBaseClient; }); // inherited from MSRequest

	deleteWithCompletion(completionHandler: (p1: NSError) => void): MSURLSessionDataTask;

	expand(expand: string): MSGraphCalendarGroupRequest; // inherited from MSRequest

	getWithCompletion(completionHandler: (p1: MSGraphCalendarGroup, p2: NSError) => void): MSURLSessionDataTask;

	ifMatch(ifMatch: string): MSGraphCalendarGroupRequest; // inherited from MSRequest

	ifNoneMatch(ifNoneMatch: string): MSGraphCalendarGroupRequest; // inherited from MSRequest

	nameConflict(nameConflict: MSNameConflict): MSGraphCalendarGroupRequest; // inherited from MSRequest

	orderBy(orderBy: string): MSGraphCalendarGroupRequest; // inherited from MSRequest

	select(select: string): MSGraphCalendarGroupRequest; // inherited from MSRequest

	top(top: number): MSGraphCalendarGroupRequest; // inherited from MSRequest

	updateWithCompletion(calendarGroup: MSGraphCalendarGroup, completionHandler: (p1: MSGraphCalendarGroup, p2: NSError) => void): MSURLSessionDataTask;
}

declare class MSGraphCalendarGroupRequestBuilder extends MSGraphEntityRequestBuilder {

	calendars(): MSGraphCalendarGroupCalendarsCollectionRequestBuilder;

	request(): MSGraphCalendarGroupRequest;

	requestWithOptions(options: NSArray<any>): MSGraphCalendarGroupRequest;
}

declare class MSGraphCalendarRequest extends MSRequest {

	constructor(o: { URL: NSURL; client: ODataBaseClient; }); // inherited from MSRequest

	constructor(o: { URL: NSURL; options: NSArray<any>; client: ODataBaseClient; }); // inherited from MSRequest

	deleteWithCompletion(completionHandler: (p1: NSError) => void): MSURLSessionDataTask;

	expand(expand: string): MSGraphCalendarRequest; // inherited from MSRequest

	getWithCompletion(completionHandler: (p1: MSGraphCalendar, p2: NSError) => void): MSURLSessionDataTask;

	ifMatch(ifMatch: string): MSGraphCalendarRequest; // inherited from MSRequest

	ifNoneMatch(ifNoneMatch: string): MSGraphCalendarRequest; // inherited from MSRequest

	nameConflict(nameConflict: MSNameConflict): MSGraphCalendarRequest; // inherited from MSRequest

	orderBy(orderBy: string): MSGraphCalendarRequest; // inherited from MSRequest

	select(select: string): MSGraphCalendarRequest; // inherited from MSRequest

	top(top: number): MSGraphCalendarRequest; // inherited from MSRequest

	updateWithCompletion(calendar: MSGraphCalendar, completionHandler: (p1: MSGraphCalendar, p2: NSError) => void): MSURLSessionDataTask;
}

declare class MSGraphCalendarRequestBuilder extends MSGraphEntityRequestBuilder {

	calendarView(): MSGraphCalendarCalendarViewCollectionRequestBuilder;

	events(): MSGraphCalendarEventsCollectionRequestBuilder;

	request(): MSGraphCalendarRequest;

	requestWithOptions(options: NSArray<any>): MSGraphCalendarRequest;
}

declare class MSGraphClient extends ODataBaseClient {

	static client(): MSGraphClient;

	static clientWithConfig(config: MSGraphClientConfiguration): MSGraphClient;

	static setApiEndpoint(apiEndpoint: string): void;

	static setAuthenticationProvider(authenticationProvider: MSAuthenticationProvider): void;

	static setHttpProvider(httpProvider: MSHttpProvider): void;

	static setLogger(logger: MSLoggerProtocol): void;

	constructor(o: { URL: string; httpProvider: MSHttpProvider; authenticationProvider: MSAuthenticationProvider; }); // inherited from ODataBaseClient

	devices(): MSGraphDevicesCollectionRequestBuilder;

	directoryObjects(): MSGraphDirectoryObjectsCollectionRequestBuilder;

	directoryRoleTemplates(): MSGraphDirectoryRoleTemplatesCollectionRequestBuilder;

	directoryRoles(): MSGraphDirectoryRolesCollectionRequestBuilder;

	drive(): MSGraphDriveRequestBuilder;

	drives(): MSGraphDrivesCollectionRequestBuilder;

	groups(): MSGraphGroupsCollectionRequestBuilder;

    me(): MSGraphUserRequestBuilder;

	organization(): MSGraphOrganizationCollectionRequestBuilder;

	setLogLevel(level: MSLogLevel): void;

	subscribedSkus(): MSGraphSubscribedSkusCollectionRequestBuilder;

	users(): MSGraphUsersCollectionRequestBuilder;
}

declare class MSGraphClientConfiguration extends NSObject {

	static alloc(): MSGraphClientConfiguration; // inherited from NSObject

	static defaultConfiguration(): MSGraphClientConfiguration;

	static new(): MSGraphClientConfiguration; // inherited from NSObject

	apiEndpoint: string;

	authenticationProvider: MSAuthenticationProvider;

	httpProvider: MSHttpProvider;

	logger: MSLoggerProtocol;

	constructor(); // inherited from NSObject

	self(): MSGraphClientConfiguration; // inherited from NSObjectProtocol
}

declare class MSGraphContact extends MSGraphOutlookItem {

	assistantName: string;

	birthday: Date;

	businessAddress: MSGraphPhysicalAddress;

	businessHomePage: string;

	businessPhones: NSArray<any>;

	children: NSArray<any>;

	companyName: string;

	department: string;

	displayName: string;

	emailAddresses: NSArray<any>;

	fileAs: string;

	generation: string;

	givenName: string;

	homeAddress: MSGraphPhysicalAddress;

	homePhones: NSArray<any>;

	imAddresses: NSArray<any>;

	initials: string;

	jobTitle: string;

	manager: string;

	middleName: string;

	mobilePhone: string;

	nickName: string;

	officeLocation: string;

	otherAddress: MSGraphPhysicalAddress;

	parentFolderId: string;

	personalNotes: string;

	photo: MSGraphProfilePhoto;

	profession: string;

	spouseName: string;

	surname: string;

	title: string;

	yomiCompanyName: string;

	yomiGivenName: string;

	yomiSurname: string;
}

declare class MSGraphContactFolder extends MSGraphEntity {

	childFolders: NSArray<any>;

	contacts: NSArray<any>;

	displayName: string;

	parentFolderId: string;
}

declare class MSGraphContactFolderChildFoldersCollectionRequest extends MSCollectionRequest {

	addContactFolderWithCompletion(contactFolder: MSGraphContactFolder, completionHandler: (p1: MSGraphContactFolder, p2: NSError) => void): MSURLSessionDataTask;

	getWithCompletion(completionHandler: (p1: MSCollection, p2: MSGraphContactFolderChildFoldersCollectionRequest, p3: NSError) => void): MSURLSessionDataTask;
}

declare class MSGraphContactFolderChildFoldersCollectionRequestBuilder extends MSCollectionRequestBuilder {

	contactFolder(contactFolder: string): MSGraphContactFolderRequestBuilder;

	request(): MSGraphContactFolderChildFoldersCollectionRequest;

	requestWithOptions(options: NSArray<any>): MSGraphContactFolderChildFoldersCollectionRequest;
}

declare class MSGraphContactFolderContactsCollectionRequest extends MSCollectionRequest {

	addContactWithCompletion(contact: MSGraphContact, completionHandler: (p1: MSGraphContact, p2: NSError) => void): MSURLSessionDataTask;

	getWithCompletion(completionHandler: (p1: MSCollection, p2: MSGraphContactFolderContactsCollectionRequest, p3: NSError) => void): MSURLSessionDataTask;
}

declare class MSGraphContactFolderContactsCollectionRequestBuilder extends MSCollectionRequestBuilder {

	contact(contact: string): MSGraphContactRequestBuilder;

	request(): MSGraphContactFolderContactsCollectionRequest;

	requestWithOptions(options: NSArray<any>): MSGraphContactFolderContactsCollectionRequest;
}

declare class MSGraphContactFolderRequest extends MSRequest {

	constructor(o: { URL: NSURL; client: ODataBaseClient; }); // inherited from MSRequest

	constructor(o: { URL: NSURL; options: NSArray<any>; client: ODataBaseClient; }); // inherited from MSRequest

	deleteWithCompletion(completionHandler: (p1: NSError) => void): MSURLSessionDataTask;

	expand(expand: string): MSGraphContactFolderRequest; // inherited from MSRequest

	getWithCompletion(completionHandler: (p1: MSGraphContactFolder, p2: NSError) => void): MSURLSessionDataTask;

	ifMatch(ifMatch: string): MSGraphContactFolderRequest; // inherited from MSRequest

	ifNoneMatch(ifNoneMatch: string): MSGraphContactFolderRequest; // inherited from MSRequest

	nameConflict(nameConflict: MSNameConflict): MSGraphContactFolderRequest; // inherited from MSRequest

	orderBy(orderBy: string): MSGraphContactFolderRequest; // inherited from MSRequest

	select(select: string): MSGraphContactFolderRequest; // inherited from MSRequest

	top(top: number): MSGraphContactFolderRequest; // inherited from MSRequest

	updateWithCompletion(contactFolder: MSGraphContactFolder, completionHandler: (p1: MSGraphContactFolder, p2: NSError) => void): MSURLSessionDataTask;
}

declare class MSGraphContactFolderRequestBuilder extends MSGraphEntityRequestBuilder {

	childFolders(): MSGraphContactFolderChildFoldersCollectionRequestBuilder;

	contacts(): MSGraphContactFolderContactsCollectionRequestBuilder;

	request(): MSGraphContactFolderRequest;

	requestWithOptions(options: NSArray<any>): MSGraphContactFolderRequest;
}

declare class MSGraphContactRequest extends MSRequest {

	constructor(o: { URL: NSURL; client: ODataBaseClient; }); // inherited from MSRequest

	constructor(o: { URL: NSURL; options: NSArray<any>; client: ODataBaseClient; }); // inherited from MSRequest

	deleteWithCompletion(completionHandler: (p1: NSError) => void): MSURLSessionDataTask;

	expand(expand: string): MSGraphContactRequest; // inherited from MSRequest

	getWithCompletion(completionHandler: (p1: MSGraphContact, p2: NSError) => void): MSURLSessionDataTask;

	ifMatch(ifMatch: string): MSGraphContactRequest; // inherited from MSRequest

	ifNoneMatch(ifNoneMatch: string): MSGraphContactRequest; // inherited from MSRequest

	nameConflict(nameConflict: MSNameConflict): MSGraphContactRequest; // inherited from MSRequest

	orderBy(orderBy: string): MSGraphContactRequest; // inherited from MSRequest

	select(select: string): MSGraphContactRequest; // inherited from MSRequest

	top(top: number): MSGraphContactRequest; // inherited from MSRequest

	updateWithCompletion(contact: MSGraphContact, completionHandler: (p1: MSGraphContact, p2: NSError) => void): MSURLSessionDataTask;
}

declare class MSGraphContactRequestBuilder extends MSGraphOutlookItemRequestBuilder {

	photo(): MSGraphProfilePhotoRequestBuilder;

	photoValue(): MSGraphProfilePhotoStreamRequest;

	photoValueWithOptions(options: NSArray<any>): MSGraphProfilePhotoStreamRequest;

	request(): MSGraphContactRequest;

	requestWithOptions(options: NSArray<any>): MSGraphContactRequest;
}

declare class MSGraphConversation extends MSGraphEntity {

	hasAttachments: boolean;

	lastDeliveredDateTime: Date;

	preview: string;

	threads: NSArray<any>;

	topic: string;

	uniqueSenders: NSArray<any>;
}

declare class MSGraphConversationRequest extends MSRequest {

	constructor(o: { URL: NSURL; client: ODataBaseClient; }); // inherited from MSRequest

	constructor(o: { URL: NSURL; options: NSArray<any>; client: ODataBaseClient; }); // inherited from MSRequest

	deleteWithCompletion(completionHandler: (p1: NSError) => void): MSURLSessionDataTask;

	expand(expand: string): MSGraphConversationRequest; // inherited from MSRequest

	getWithCompletion(completionHandler: (p1: MSGraphConversation, p2: NSError) => void): MSURLSessionDataTask;

	ifMatch(ifMatch: string): MSGraphConversationRequest; // inherited from MSRequest

	ifNoneMatch(ifNoneMatch: string): MSGraphConversationRequest; // inherited from MSRequest

	nameConflict(nameConflict: MSNameConflict): MSGraphConversationRequest; // inherited from MSRequest

	orderBy(orderBy: string): MSGraphConversationRequest; // inherited from MSRequest

	select(select: string): MSGraphConversationRequest; // inherited from MSRequest

	top(top: number): MSGraphConversationRequest; // inherited from MSRequest

	updateWithCompletion(conversation: MSGraphConversation, completionHandler: (p1: MSGraphConversation, p2: NSError) => void): MSURLSessionDataTask;
}

declare class MSGraphConversationRequestBuilder extends MSGraphEntityRequestBuilder {

	request(): MSGraphConversationRequest;

	requestWithOptions(options: NSArray<any>): MSGraphConversationRequest;

	threads(): MSGraphConversationThreadsCollectionRequestBuilder;
}

declare class MSGraphConversationThread extends MSGraphEntity {

	ccRecipients: NSArray<any>;

	hasAttachments: boolean;

	isLocked: boolean;

	lastDeliveredDateTime: Date;

	posts: NSArray<any>;

	preview: string;

	toRecipients: NSArray<any>;

	topic: string;

	uniqueSenders: NSArray<any>;
}

declare class MSGraphConversationThreadPostsCollectionRequest extends MSCollectionRequest {

	addPostWithCompletion(post: MSGraphPost, completionHandler: (p1: MSGraphPost, p2: NSError) => void): MSURLSessionDataTask;

	getWithCompletion(completionHandler: (p1: MSCollection, p2: MSGraphConversationThreadPostsCollectionRequest, p3: NSError) => void): MSURLSessionDataTask;
}

declare class MSGraphConversationThreadPostsCollectionRequestBuilder extends MSCollectionRequestBuilder {

	post(post: string): MSGraphPostRequestBuilder;

	request(): MSGraphConversationThreadPostsCollectionRequest;

	requestWithOptions(options: NSArray<any>): MSGraphConversationThreadPostsCollectionRequest;
}

declare class MSGraphConversationThreadReplyRequest extends MSRequest {

	/* readonly */ mutableRequest: NSMutableURLRequest;

	constructor(o: { post: MSGraphPost; URL: NSURL; options: NSArray<any>; client: ODataBaseClient; });

	constructor(o: { URL: NSURL; client: ODataBaseClient; }); // inherited from MSRequest

	constructor(o: { URL: NSURL; options: NSArray<any>; client: ODataBaseClient; }); // inherited from MSRequest

	executeWithCompletion(completionHandler: (p1: NSDictionary<any, any>, p2: NSError) => void): MSURLSessionDataTask;

	expand(expand: string): MSGraphConversationThreadReplyRequest; // inherited from MSRequest

	ifMatch(ifMatch: string): MSGraphConversationThreadReplyRequest; // inherited from MSRequest

	ifNoneMatch(ifNoneMatch: string): MSGraphConversationThreadReplyRequest; // inherited from MSRequest

	nameConflict(nameConflict: MSNameConflict): MSGraphConversationThreadReplyRequest; // inherited from MSRequest

	orderBy(orderBy: string): MSGraphConversationThreadReplyRequest; // inherited from MSRequest

	select(select: string): MSGraphConversationThreadReplyRequest; // inherited from MSRequest

	top(top: number): MSGraphConversationThreadReplyRequest; // inherited from MSRequest
}

declare class MSGraphConversationThreadReplyRequestBuilder extends MSRequestBuilder {

	constructor(o: { post: MSGraphPost; URL: NSURL; client: ODataBaseClient; });

	constructor(o: { URL: NSURL; client: ODataBaseClient; }); // inherited from MSRequestBuilder

	request(): MSGraphConversationThreadReplyRequest;

	requestWithOptions(options: NSArray<any>): MSGraphConversationThreadReplyRequest;
}

declare class MSGraphConversationThreadRequest extends MSRequest {

	constructor(o: { URL: NSURL; client: ODataBaseClient; }); // inherited from MSRequest

	constructor(o: { URL: NSURL; options: NSArray<any>; client: ODataBaseClient; }); // inherited from MSRequest

	deleteWithCompletion(completionHandler: (p1: NSError) => void): MSURLSessionDataTask;

	expand(expand: string): MSGraphConversationThreadRequest; // inherited from MSRequest

	getWithCompletion(completionHandler: (p1: MSGraphConversationThread, p2: NSError) => void): MSURLSessionDataTask;

	ifMatch(ifMatch: string): MSGraphConversationThreadRequest; // inherited from MSRequest

	ifNoneMatch(ifNoneMatch: string): MSGraphConversationThreadRequest; // inherited from MSRequest

	nameConflict(nameConflict: MSNameConflict): MSGraphConversationThreadRequest; // inherited from MSRequest

	orderBy(orderBy: string): MSGraphConversationThreadRequest; // inherited from MSRequest

	select(select: string): MSGraphConversationThreadRequest; // inherited from MSRequest

	top(top: number): MSGraphConversationThreadRequest; // inherited from MSRequest

	updateWithCompletion(conversationThread: MSGraphConversationThread, completionHandler: (p1: MSGraphConversationThread, p2: NSError) => void): MSURLSessionDataTask;
}

declare class MSGraphConversationThreadRequestBuilder extends MSGraphEntityRequestBuilder {

	posts(): MSGraphConversationThreadPostsCollectionRequestBuilder;

	replyWithPost(post: MSGraphPost): MSGraphConversationThreadReplyRequestBuilder;

	request(): MSGraphConversationThreadRequest;

	requestWithOptions(options: NSArray<any>): MSGraphConversationThreadRequest;
}

declare class MSGraphConversationThreadsCollectionRequest extends MSCollectionRequest {

	addConversationThreadWithCompletion(conversationThread: MSGraphConversationThread, completionHandler: (p1: MSGraphConversationThread, p2: NSError) => void): MSURLSessionDataTask;

	getWithCompletion(completionHandler: (p1: MSCollection, p2: MSGraphConversationThreadsCollectionRequest, p3: NSError) => void): MSURLSessionDataTask;
}

declare class MSGraphConversationThreadsCollectionRequestBuilder extends MSCollectionRequestBuilder {

	conversationThread(conversationThread: string): MSGraphConversationThreadRequestBuilder;

	request(): MSGraphConversationThreadsCollectionRequest;

	requestWithOptions(options: NSArray<any>): MSGraphConversationThreadsCollectionRequest;
}

declare class MSGraphDateTimeTimeZone extends MSObject {

	dateTime: string;

	timeZone: string;

	constructor(o: { dictionary: NSDictionary<any, any>; }); // inherited from MSObject
}

declare class MSGraphDayOfWeek extends NSObject {

	static UnknownEnumValue(): MSGraphDayOfWeek;

	static alloc(): MSGraphDayOfWeek; // inherited from NSObject

	static dayOfWeekWithEnumValue(val: MSGraphDayOfWeekValue): MSGraphDayOfWeek;

	static friday(): MSGraphDayOfWeek;

	static monday(): MSGraphDayOfWeek;

	static new(): MSGraphDayOfWeek; // inherited from NSObject

	static saturday(): MSGraphDayOfWeek;

	static sunday(): MSGraphDayOfWeek;

	static thursday(): MSGraphDayOfWeek;

	static tuesday(): MSGraphDayOfWeek;

	static wednesday(): MSGraphDayOfWeek;

	/* readonly */ enumValue: MSGraphDayOfWeekValue;

	constructor(); // inherited from NSObject

	ms_toString(): string;

	self(): MSGraphDayOfWeek; // inherited from NSObjectProtocol
}

declare const enum MSGraphDayOfWeekValue {

	Sunday = 0,

	Monday = 1,

	Tuesday = 2,

	Wednesday = 3,

	Thursday = 4,

	Friday = 5,

	Saturday = 6,

	EndOfEnum = 7
}

declare class MSGraphDeleted extends MSObject {

	state: string;

	constructor(o: { dictionary: NSDictionary<any, any>; }); // inherited from MSObject
}

declare class MSGraphDevice extends MSGraphDirectoryObject {

	accountEnabled: boolean;

	alternativeSecurityIds: NSArray<any>;

	approximateLastSignInDateTime: Date;

	deviceId: string;

	deviceMetadata: string;

	deviceVersion: number;

	displayName: string;

	isCompliant: boolean;

	isManaged: boolean;

	onPremisesLastSyncDateTime: Date;

	onPremisesSyncEnabled: boolean;

	operatingSystem: string;

	operatingSystemVersion: string;

	physicalIds: NSArray<any>;

	registeredOwners: NSArray<any>;

	registeredUsers: NSArray<any>;

	trustType: string;
}

declare class MSGraphDeviceRegisteredOwnersCollectionReferencesRequest extends MSCollectionRequest {

	addDirectoryObjectWithCompletion(directoryObject: MSGraphDirectoryObject, completionHandler: (p1: MSGraphDirectoryObject, p2: NSError) => void): MSURLSessionDataTask;
}

declare class MSGraphDeviceRegisteredOwnersCollectionReferencesRequestBuilder extends MSCollectionRequestBuilder {

	request(): MSGraphDeviceRegisteredOwnersCollectionReferencesRequest;

	requestWithOptions(options: NSArray<any>): MSGraphDeviceRegisteredOwnersCollectionReferencesRequest;
}

declare class MSGraphDeviceRegisteredOwnersCollectionWithReferencesRequest extends MSCollectionRequest {

	getWithCompletion(completionHandler: (p1: MSCollection, p2: MSGraphDeviceRegisteredOwnersCollectionWithReferencesRequest, p3: NSError) => void): MSURLSessionDataTask;
}

declare class MSGraphDeviceRegisteredOwnersCollectionWithReferencesRequestBuilder extends MSCollectionRequestBuilder {

	directoryObject(directoryObject: string): MSGraphDirectoryObjectRequestBuilder;

	references(): MSGraphDeviceRegisteredOwnersCollectionReferencesRequestBuilder;

	request(): MSGraphDeviceRegisteredOwnersCollectionWithReferencesRequest;

	requestWithOptions(options: NSArray<any>): MSGraphDeviceRegisteredOwnersCollectionWithReferencesRequest;
}

declare class MSGraphDeviceRegisteredUsersCollectionReferencesRequest extends MSCollectionRequest {

	addDirectoryObjectWithCompletion(directoryObject: MSGraphDirectoryObject, completionHandler: (p1: MSGraphDirectoryObject, p2: NSError) => void): MSURLSessionDataTask;
}

declare class MSGraphDeviceRegisteredUsersCollectionReferencesRequestBuilder extends MSCollectionRequestBuilder {

	request(): MSGraphDeviceRegisteredUsersCollectionReferencesRequest;

	requestWithOptions(options: NSArray<any>): MSGraphDeviceRegisteredUsersCollectionReferencesRequest;
}

declare class MSGraphDeviceRegisteredUsersCollectionWithReferencesRequest extends MSCollectionRequest {

	getWithCompletion(completionHandler: (p1: MSCollection, p2: MSGraphDeviceRegisteredUsersCollectionWithReferencesRequest, p3: NSError) => void): MSURLSessionDataTask;
}

declare class MSGraphDeviceRegisteredUsersCollectionWithReferencesRequestBuilder extends MSCollectionRequestBuilder {

	directoryObject(directoryObject: string): MSGraphDirectoryObjectRequestBuilder;

	references(): MSGraphDeviceRegisteredUsersCollectionReferencesRequestBuilder;

	request(): MSGraphDeviceRegisteredUsersCollectionWithReferencesRequest;

	requestWithOptions(options: NSArray<any>): MSGraphDeviceRegisteredUsersCollectionWithReferencesRequest;
}

declare class MSGraphDeviceRequest extends MSRequest {

	constructor(o: { URL: NSURL; client: ODataBaseClient; }); // inherited from MSRequest

	constructor(o: { URL: NSURL; options: NSArray<any>; client: ODataBaseClient; }); // inherited from MSRequest

	deleteWithCompletion(completionHandler: (p1: NSError) => void): MSURLSessionDataTask;

	expand(expand: string): MSGraphDeviceRequest; // inherited from MSRequest

	getWithCompletion(completionHandler: (p1: MSGraphDevice, p2: NSError) => void): MSURLSessionDataTask;

	ifMatch(ifMatch: string): MSGraphDeviceRequest; // inherited from MSRequest

	ifNoneMatch(ifNoneMatch: string): MSGraphDeviceRequest; // inherited from MSRequest

	nameConflict(nameConflict: MSNameConflict): MSGraphDeviceRequest; // inherited from MSRequest

	orderBy(orderBy: string): MSGraphDeviceRequest; // inherited from MSRequest

	select(select: string): MSGraphDeviceRequest; // inherited from MSRequest

	top(top: number): MSGraphDeviceRequest; // inherited from MSRequest

	updateWithCompletion(device: MSGraphDevice, completionHandler: (p1: MSGraphDevice, p2: NSError) => void): MSURLSessionDataTask;
}

declare class MSGraphDeviceRequestBuilder extends MSGraphDirectoryObjectRequestBuilder {

	registeredOwners(): MSGraphDeviceRegisteredOwnersCollectionWithReferencesRequestBuilder;

	registeredUsers(): MSGraphDeviceRegisteredUsersCollectionWithReferencesRequestBuilder;

	request(): MSGraphDeviceRequest;

	requestWithOptions(options: NSArray<any>): MSGraphDeviceRequest;
}

declare class MSGraphDevicesCollectionRequest extends MSCollectionRequest {

	addDeviceWithCompletion(device: MSGraphDevice, completionHandler: (p1: MSGraphDevice, p2: NSError) => void): MSURLSessionDataTask;

	getWithCompletion(completionHandler: (p1: MSCollection, p2: MSGraphDevicesCollectionRequest, p3: NSError) => void): MSURLSessionDataTask;
}

declare class MSGraphDevicesCollectionRequestBuilder extends MSCollectionRequestBuilder {

	device(device: string): MSGraphDeviceRequestBuilder;

	request(): MSGraphDevicesCollectionRequest;

	requestWithOptions(options: NSArray<any>): MSGraphDevicesCollectionRequest;
}

declare class MSGraphDirectoryObject extends MSGraphEntity {
}

declare class MSGraphDirectoryObjectCheckMemberGroupsRequest extends MSCollectionRequest {

	/* readonly */ mutableRequest: NSMutableURLRequest;

	constructor(o: { groupIds: NSArray<any>; URL: NSURL; options: NSArray<any>; client: ODataBaseClient; });

	executeWithCompletion(completionHandler: (p1: MSCollection, p2: MSGraphDirectoryObjectCheckMemberGroupsRequest, p3: NSError) => void): MSURLSessionDataTask;
}

declare class MSGraphDirectoryObjectCheckMemberGroupsRequestBuilder extends MSRequestBuilder {

	constructor(o: { groupIds: NSArray<any>; URL: NSURL; client: ODataBaseClient; });

	constructor(o: { URL: NSURL; client: ODataBaseClient; }); // inherited from MSRequestBuilder

	request(): MSGraphDirectoryObjectCheckMemberGroupsRequest;

	requestWithOptions(options: NSArray<any>): MSGraphDirectoryObjectCheckMemberGroupsRequest;
}

declare class MSGraphDirectoryObjectGetMemberGroupsRequest extends MSCollectionRequest {

	/* readonly */ mutableRequest: NSMutableURLRequest;

	constructor(o: { securityEnabledOnly: boolean; URL: NSURL; options: NSArray<any>; client: ODataBaseClient; });

	executeWithCompletion(completionHandler: (p1: MSCollection, p2: MSGraphDirectoryObjectGetMemberGroupsRequest, p3: NSError) => void): MSURLSessionDataTask;
}

declare class MSGraphDirectoryObjectGetMemberGroupsRequestBuilder extends MSRequestBuilder {

	constructor(o: { securityEnabledOnly: boolean; URL: NSURL; client: ODataBaseClient; });

	constructor(o: { URL: NSURL; client: ODataBaseClient; }); // inherited from MSRequestBuilder

	request(): MSGraphDirectoryObjectGetMemberGroupsRequest;

	requestWithOptions(options: NSArray<any>): MSGraphDirectoryObjectGetMemberGroupsRequest;
}

declare class MSGraphDirectoryObjectGetMemberObjectsRequest extends MSCollectionRequest {

	/* readonly */ mutableRequest: NSMutableURLRequest;

	constructor(o: { securityEnabledOnly: boolean; URL: NSURL; options: NSArray<any>; client: ODataBaseClient; });

	executeWithCompletion(completionHandler: (p1: MSCollection, p2: MSGraphDirectoryObjectGetMemberObjectsRequest, p3: NSError) => void): MSURLSessionDataTask;
}

declare class MSGraphDirectoryObjectGetMemberObjectsRequestBuilder extends MSRequestBuilder {

	constructor(o: { securityEnabledOnly: boolean; URL: NSURL; client: ODataBaseClient; });

	constructor(o: { URL: NSURL; client: ODataBaseClient; }); // inherited from MSRequestBuilder

	request(): MSGraphDirectoryObjectGetMemberObjectsRequest;

	requestWithOptions(options: NSArray<any>): MSGraphDirectoryObjectGetMemberObjectsRequest;
}

declare class MSGraphDirectoryObjectReferenceRequest extends MSRequest {

	constructor(o: { URL: NSURL; client: ODataBaseClient; }); // inherited from MSRequest

	constructor(o: { URL: NSURL; options: NSArray<any>; client: ODataBaseClient; }); // inherited from MSRequest

	deleteWithCompletion(completionHandler: (p1: NSError) => void): MSURLSessionDataTask;

	expand(expand: string): MSGraphDirectoryObjectReferenceRequest; // inherited from MSRequest

	ifMatch(ifMatch: string): MSGraphDirectoryObjectReferenceRequest; // inherited from MSRequest

	ifNoneMatch(ifNoneMatch: string): MSGraphDirectoryObjectReferenceRequest; // inherited from MSRequest

	nameConflict(nameConflict: MSNameConflict): MSGraphDirectoryObjectReferenceRequest; // inherited from MSRequest

	orderBy(orderBy: string): MSGraphDirectoryObjectReferenceRequest; // inherited from MSRequest

	select(select: string): MSGraphDirectoryObjectReferenceRequest; // inherited from MSRequest

	top(top: number): MSGraphDirectoryObjectReferenceRequest; // inherited from MSRequest
}

declare class MSGraphDirectoryObjectReferenceRequestBuilder extends MSRequestBuilder {

	constructor(o: { URL: NSURL; client: ODataBaseClient; }); // inherited from MSRequestBuilder

	request(): MSGraphDirectoryObjectReferenceRequest;

	requestWithOptions(options: NSArray<any>): MSGraphDirectoryObjectReferenceRequest;
}

declare class MSGraphDirectoryObjectRequest extends MSRequest {

	constructor(o: { URL: NSURL; client: ODataBaseClient; }); // inherited from MSRequest

	constructor(o: { URL: NSURL; options: NSArray<any>; client: ODataBaseClient; }); // inherited from MSRequest

	deleteWithCompletion(completionHandler: (p1: NSError) => void): MSURLSessionDataTask;

	expand(expand: string): MSGraphDirectoryObjectRequest; // inherited from MSRequest

	getWithCompletion(completionHandler: (p1: MSGraphDirectoryObject, p2: NSError) => void): MSURLSessionDataTask;

	ifMatch(ifMatch: string): MSGraphDirectoryObjectRequest; // inherited from MSRequest

	ifNoneMatch(ifNoneMatch: string): MSGraphDirectoryObjectRequest; // inherited from MSRequest

	nameConflict(nameConflict: MSNameConflict): MSGraphDirectoryObjectRequest; // inherited from MSRequest

	orderBy(orderBy: string): MSGraphDirectoryObjectRequest; // inherited from MSRequest

	select(select: string): MSGraphDirectoryObjectRequest; // inherited from MSRequest

	top(top: number): MSGraphDirectoryObjectRequest; // inherited from MSRequest

	updateWithCompletion(directoryObject: MSGraphDirectoryObject, completionHandler: (p1: MSGraphDirectoryObject, p2: NSError) => void): MSURLSessionDataTask;
}

declare class MSGraphDirectoryObjectRequestBuilder extends MSGraphEntityRequestBuilder {

	checkMemberGroupsWithGroupIds(groupIds: NSArray<any>): MSGraphDirectoryObjectCheckMemberGroupsRequestBuilder;

	getMemberGroupsWithSecurityEnabledOnly(securityEnabledOnly: boolean): MSGraphDirectoryObjectGetMemberGroupsRequestBuilder;

	getMemberObjectsWithSecurityEnabledOnly(securityEnabledOnly: boolean): MSGraphDirectoryObjectGetMemberObjectsRequestBuilder;

	request(): MSGraphDirectoryObjectRequest;

	requestWithOptions(options: NSArray<any>): MSGraphDirectoryObjectRequest;
}

declare class MSGraphDirectoryObjectWithReferenceRequest extends MSRequest {

	constructor(o: { URL: NSURL; client: ODataBaseClient; }); // inherited from MSRequest

	constructor(o: { URL: NSURL; options: NSArray<any>; client: ODataBaseClient; }); // inherited from MSRequest

	expand(expand: string): MSGraphDirectoryObjectWithReferenceRequest; // inherited from MSRequest

	getWithCompletion(completionHandler: (p1: MSGraphDirectoryObject, p2: NSError) => void): MSURLSessionDataTask;

	ifMatch(ifMatch: string): MSGraphDirectoryObjectWithReferenceRequest; // inherited from MSRequest

	ifNoneMatch(ifNoneMatch: string): MSGraphDirectoryObjectWithReferenceRequest; // inherited from MSRequest

	nameConflict(nameConflict: MSNameConflict): MSGraphDirectoryObjectWithReferenceRequest; // inherited from MSRequest

	orderBy(orderBy: string): MSGraphDirectoryObjectWithReferenceRequest; // inherited from MSRequest

	select(select: string): MSGraphDirectoryObjectWithReferenceRequest; // inherited from MSRequest

	top(top: number): MSGraphDirectoryObjectWithReferenceRequest; // inherited from MSRequest
}

declare class MSGraphDirectoryObjectWithReferenceRequestBuilder extends MSRequestBuilder {

	constructor(o: { URL: NSURL; client: ODataBaseClient; }); // inherited from MSRequestBuilder

	reference(): MSGraphDirectoryObjectReferenceRequestBuilder;

	request(): MSGraphDirectoryObjectWithReferenceRequest;

	requestWithOptions(options: NSArray<any>): MSGraphDirectoryObjectWithReferenceRequest;
}

declare class MSGraphDirectoryObjectsCollectionRequest extends MSCollectionRequest {

	addDirectoryObjectWithCompletion(directoryObject: MSGraphDirectoryObject, completionHandler: (p1: MSGraphDirectoryObject, p2: NSError) => void): MSURLSessionDataTask;

	getWithCompletion(completionHandler: (p1: MSCollection, p2: MSGraphDirectoryObjectsCollectionRequest, p3: NSError) => void): MSURLSessionDataTask;
}

declare class MSGraphDirectoryObjectsCollectionRequestBuilder extends MSCollectionRequestBuilder {

	directoryObject(directoryObject: string): MSGraphDirectoryObjectRequestBuilder;

	request(): MSGraphDirectoryObjectsCollectionRequest;

	requestWithOptions(options: NSArray<any>): MSGraphDirectoryObjectsCollectionRequest;
}

declare class MSGraphDirectoryRole extends MSGraphDirectoryObject {

	directoryRoleDescription: string;

	displayName: string;

	members: NSArray<any>;

	roleTemplateId: string;
}

declare class MSGraphDirectoryRoleMembersCollectionReferencesRequest extends MSCollectionRequest {

	addDirectoryObjectWithCompletion(directoryObject: MSGraphDirectoryObject, completionHandler: (p1: MSGraphDirectoryObject, p2: NSError) => void): MSURLSessionDataTask;
}

declare class MSGraphDirectoryRoleMembersCollectionReferencesRequestBuilder extends MSCollectionRequestBuilder {

	request(): MSGraphDirectoryRoleMembersCollectionReferencesRequest;

	requestWithOptions(options: NSArray<any>): MSGraphDirectoryRoleMembersCollectionReferencesRequest;
}

declare class MSGraphDirectoryRoleMembersCollectionWithReferencesRequest extends MSCollectionRequest {

	getWithCompletion(completionHandler: (p1: MSCollection, p2: MSGraphDirectoryRoleMembersCollectionWithReferencesRequest, p3: NSError) => void): MSURLSessionDataTask;
}

declare class MSGraphDirectoryRoleMembersCollectionWithReferencesRequestBuilder extends MSCollectionRequestBuilder {

	directoryObject(directoryObject: string): MSGraphDirectoryObjectRequestBuilder;

	references(): MSGraphDirectoryRoleMembersCollectionReferencesRequestBuilder;

	request(): MSGraphDirectoryRoleMembersCollectionWithReferencesRequest;

	requestWithOptions(options: NSArray<any>): MSGraphDirectoryRoleMembersCollectionWithReferencesRequest;
}

declare class MSGraphDirectoryRoleRequest extends MSRequest {

	constructor(o: { URL: NSURL; client: ODataBaseClient; }); // inherited from MSRequest

	constructor(o: { URL: NSURL; options: NSArray<any>; client: ODataBaseClient; }); // inherited from MSRequest

	deleteWithCompletion(completionHandler: (p1: NSError) => void): MSURLSessionDataTask;

	expand(expand: string): MSGraphDirectoryRoleRequest; // inherited from MSRequest

	getWithCompletion(completionHandler: (p1: MSGraphDirectoryRole, p2: NSError) => void): MSURLSessionDataTask;

	ifMatch(ifMatch: string): MSGraphDirectoryRoleRequest; // inherited from MSRequest

	ifNoneMatch(ifNoneMatch: string): MSGraphDirectoryRoleRequest; // inherited from MSRequest

	nameConflict(nameConflict: MSNameConflict): MSGraphDirectoryRoleRequest; // inherited from MSRequest

	orderBy(orderBy: string): MSGraphDirectoryRoleRequest; // inherited from MSRequest

	select(select: string): MSGraphDirectoryRoleRequest; // inherited from MSRequest

	top(top: number): MSGraphDirectoryRoleRequest; // inherited from MSRequest

	updateWithCompletion(directoryRole: MSGraphDirectoryRole, completionHandler: (p1: MSGraphDirectoryRole, p2: NSError) => void): MSURLSessionDataTask;
}

declare class MSGraphDirectoryRoleRequestBuilder extends MSGraphDirectoryObjectRequestBuilder {

	members(): MSGraphDirectoryRoleMembersCollectionWithReferencesRequestBuilder;

	request(): MSGraphDirectoryRoleRequest;

	requestWithOptions(options: NSArray<any>): MSGraphDirectoryRoleRequest;
}

declare class MSGraphDirectoryRoleTemplate extends MSGraphDirectoryObject {

	directoryRoleTemplateDescription: string;

	displayName: string;
}

declare class MSGraphDirectoryRoleTemplateRequest extends MSRequest {

	constructor(o: { URL: NSURL; client: ODataBaseClient; }); // inherited from MSRequest

	constructor(o: { URL: NSURL; options: NSArray<any>; client: ODataBaseClient; }); // inherited from MSRequest

	deleteWithCompletion(completionHandler: (p1: NSError) => void): MSURLSessionDataTask;

	expand(expand: string): MSGraphDirectoryRoleTemplateRequest; // inherited from MSRequest

	getWithCompletion(completionHandler: (p1: MSGraphDirectoryRoleTemplate, p2: NSError) => void): MSURLSessionDataTask;

	ifMatch(ifMatch: string): MSGraphDirectoryRoleTemplateRequest; // inherited from MSRequest

	ifNoneMatch(ifNoneMatch: string): MSGraphDirectoryRoleTemplateRequest; // inherited from MSRequest

	nameConflict(nameConflict: MSNameConflict): MSGraphDirectoryRoleTemplateRequest; // inherited from MSRequest

	orderBy(orderBy: string): MSGraphDirectoryRoleTemplateRequest; // inherited from MSRequest

	select(select: string): MSGraphDirectoryRoleTemplateRequest; // inherited from MSRequest

	top(top: number): MSGraphDirectoryRoleTemplateRequest; // inherited from MSRequest

	updateWithCompletion(directoryRoleTemplate: MSGraphDirectoryRoleTemplate, completionHandler: (p1: MSGraphDirectoryRoleTemplate, p2: NSError) => void): MSURLSessionDataTask;
}

declare class MSGraphDirectoryRoleTemplateRequestBuilder extends MSGraphDirectoryObjectRequestBuilder {

	request(): MSGraphDirectoryRoleTemplateRequest;

	requestWithOptions(options: NSArray<any>): MSGraphDirectoryRoleTemplateRequest;
}

declare class MSGraphDirectoryRoleTemplatesCollectionRequest extends MSCollectionRequest {

	addDirectoryRoleTemplateWithCompletion(directoryRoleTemplate: MSGraphDirectoryRoleTemplate, completionHandler: (p1: MSGraphDirectoryRoleTemplate, p2: NSError) => void): MSURLSessionDataTask;

	getWithCompletion(completionHandler: (p1: MSCollection, p2: MSGraphDirectoryRoleTemplatesCollectionRequest, p3: NSError) => void): MSURLSessionDataTask;
}

declare class MSGraphDirectoryRoleTemplatesCollectionRequestBuilder extends MSCollectionRequestBuilder {

	directoryRoleTemplate(directoryRoleTemplate: string): MSGraphDirectoryRoleTemplateRequestBuilder;

	request(): MSGraphDirectoryRoleTemplatesCollectionRequest;

	requestWithOptions(options: NSArray<any>): MSGraphDirectoryRoleTemplatesCollectionRequest;
}

declare class MSGraphDirectoryRolesCollectionRequest extends MSCollectionRequest {

	addDirectoryRoleWithCompletion(directoryRole: MSGraphDirectoryRole, completionHandler: (p1: MSGraphDirectoryRole, p2: NSError) => void): MSURLSessionDataTask;

	getWithCompletion(completionHandler: (p1: MSCollection, p2: MSGraphDirectoryRolesCollectionRequest, p3: NSError) => void): MSURLSessionDataTask;
}

declare class MSGraphDirectoryRolesCollectionRequestBuilder extends MSCollectionRequestBuilder {

	directoryRole(directoryRole: string): MSGraphDirectoryRoleRequestBuilder;

	request(): MSGraphDirectoryRolesCollectionRequest;

	requestWithOptions(options: NSArray<any>): MSGraphDirectoryRolesCollectionRequest;
}

declare class MSGraphDrive extends MSGraphEntity {

	driveType: string;

	items: NSArray<any>;

	owner: MSGraphIdentitySet;

	quota: MSGraphQuota;

	root: MSGraphDriveItem;

	special: NSArray<any>;
}

declare class MSGraphDriveItem extends MSGraphEntity {

	audio: MSGraphAudio;

	cTag: string;

	children: NSArray<any>;

	createdBy: MSGraphIdentitySet;

	createdByUser: MSGraphUser;

	createdDateTime: Date;

	deleted: MSGraphDeleted;

	driveItemDescription: string;

	eTag: string;

	file: MSGraphFile;

	fileSystemInfo: MSGraphFileSystemInfo;

	folder: MSGraphFolder;

	image: MSGraphImage;

	lastModifiedBy: MSGraphIdentitySet;

	lastModifiedByUser: MSGraphUser;

	lastModifiedDateTime: Date;

	location: MSGraphGeoCoordinates;

	name: string;

	package: MSGraphPackage;

	parentReference: MSGraphItemReference;

	permissions: NSArray<any>;

	photo: MSGraphPhoto;

	remoteItem: MSGraphRemoteItem;

	searchResult: MSGraphSearchResult;

	shared: MSGraphShared;

	size: number;

	specialFolder: MSGraphSpecialFolder;

	thumbnails: NSArray<any>;

	video: MSGraphVideo;

	webDavUrl: string;

	webUrl: string;
}

declare class MSGraphDriveItemChildrenCollectionRequest extends MSCollectionRequest {

	addDriveItemWithCompletion(driveItem: MSGraphDriveItem, completionHandler: (p1: MSGraphDriveItem, p2: NSError) => void): MSURLSessionDataTask;

	getWithCompletion(completionHandler: (p1: MSCollection, p2: MSGraphDriveItemChildrenCollectionRequest, p3: NSError) => void): MSURLSessionDataTask;
}

declare class MSGraphDriveItemChildrenCollectionRequestBuilder extends MSCollectionRequestBuilder {

	driveItem(driveItem: string): MSGraphDriveItemRequestBuilder;

	request(): MSGraphDriveItemChildrenCollectionRequest;

	requestWithOptions(options: NSArray<any>): MSGraphDriveItemChildrenCollectionRequest;
}

declare class MSGraphDriveItemContentRequest extends MSRequest {

	constructor(o: { URL: NSURL; client: ODataBaseClient; }); // inherited from MSRequest

	constructor(o: { URL: NSURL; options: NSArray<any>; client: ODataBaseClient; }); // inherited from MSRequest

	downloadWithCompletion(completionHandler: (p1: NSURL, p2: NSURLResponse, p3: NSError) => void): MSURLSessionDownloadTask;

	expand(expand: string): MSGraphDriveItemContentRequest; // inherited from MSRequest

	ifMatch(ifMatch: string): MSGraphDriveItemContentRequest; // inherited from MSRequest

	ifNoneMatch(ifNoneMatch: string): MSGraphDriveItemContentRequest; // inherited from MSRequest

	nameConflict(nameConflict: MSNameConflict): MSGraphDriveItemContentRequest; // inherited from MSRequest

	orderBy(orderBy: string): MSGraphDriveItemContentRequest; // inherited from MSRequest

	select(select: string): MSGraphDriveItemContentRequest; // inherited from MSRequest

	top(top: number): MSGraphDriveItemContentRequest; // inherited from MSRequest

	uploadFromDataCompletion(data: NSData, completionHandler: (p1: MSGraphDriveItem, p2: NSError) => void): MSURLSessionUploadTask;

	uploadFromFileCompletion(fileUrl: NSURL, completionHandler: (p1: MSGraphDriveItem, p2: NSError) => void): MSURLSessionUploadTask;
}

declare class MSGraphDriveItemCopyRequest extends MSRequest {

	/* readonly */ mutableRequest: NSMutableURLRequest;

	constructor(o: { name: string; parentReference: MSGraphItemReference; URL: NSURL; options: NSArray<any>; client: ODataBaseClient; });

	constructor(o: { URL: NSURL; client: ODataBaseClient; }); // inherited from MSRequest

	constructor(o: { URL: NSURL; options: NSArray<any>; client: ODataBaseClient; }); // inherited from MSRequest

	executeWithCompletion(completionHandler: (p1: MSGraphDriveItem, p2: NSError) => void): MSURLSessionDataTask;

	expand(expand: string): MSGraphDriveItemCopyRequest; // inherited from MSRequest

	ifMatch(ifMatch: string): MSGraphDriveItemCopyRequest; // inherited from MSRequest

	ifNoneMatch(ifNoneMatch: string): MSGraphDriveItemCopyRequest; // inherited from MSRequest

	nameConflict(nameConflict: MSNameConflict): MSGraphDriveItemCopyRequest; // inherited from MSRequest

	orderBy(orderBy: string): MSGraphDriveItemCopyRequest; // inherited from MSRequest

	select(select: string): MSGraphDriveItemCopyRequest; // inherited from MSRequest

	top(top: number): MSGraphDriveItemCopyRequest; // inherited from MSRequest
}

declare class MSGraphDriveItemCopyRequestBuilder extends MSRequestBuilder {

	constructor(o: { name: string; parentReference: MSGraphItemReference; URL: NSURL; client: ODataBaseClient; });

	constructor(o: { URL: NSURL; client: ODataBaseClient; }); // inherited from MSRequestBuilder

	request(): MSGraphDriveItemCopyRequest;

	requestWithOptions(options: NSArray<any>): MSGraphDriveItemCopyRequest;
}

declare class MSGraphDriveItemCreateLinkRequest extends MSRequest {

	/* readonly */ mutableRequest: NSMutableURLRequest;

	constructor(o: { type: string; scope: string; URL: NSURL; options: NSArray<any>; client: ODataBaseClient; });

	constructor(o: { URL: NSURL; client: ODataBaseClient; }); // inherited from MSRequest

	constructor(o: { URL: NSURL; options: NSArray<any>; client: ODataBaseClient; }); // inherited from MSRequest

	executeWithCompletion(completionHandler: (p1: MSGraphPermission, p2: NSError) => void): MSURLSessionDataTask;

	expand(expand: string): MSGraphDriveItemCreateLinkRequest; // inherited from MSRequest

	ifMatch(ifMatch: string): MSGraphDriveItemCreateLinkRequest; // inherited from MSRequest

	ifNoneMatch(ifNoneMatch: string): MSGraphDriveItemCreateLinkRequest; // inherited from MSRequest

	nameConflict(nameConflict: MSNameConflict): MSGraphDriveItemCreateLinkRequest; // inherited from MSRequest

	orderBy(orderBy: string): MSGraphDriveItemCreateLinkRequest; // inherited from MSRequest

	select(select: string): MSGraphDriveItemCreateLinkRequest; // inherited from MSRequest

	top(top: number): MSGraphDriveItemCreateLinkRequest; // inherited from MSRequest
}

declare class MSGraphDriveItemCreateLinkRequestBuilder extends MSRequestBuilder {

	constructor(o: { type: string; scope: string; URL: NSURL; client: ODataBaseClient; });

	constructor(o: { URL: NSURL; client: ODataBaseClient; }); // inherited from MSRequestBuilder

	request(): MSGraphDriveItemCreateLinkRequest;

	requestWithOptions(options: NSArray<any>): MSGraphDriveItemCreateLinkRequest;
}

declare class MSGraphDriveItemDeltaRequest extends MSCollectionRequest {

	/* readonly */ mutableRequest: NSMutableURLRequest;

	executeWithCompletion(completionHandler: (p1: MSCollection, p2: MSGraphDriveItemDeltaRequest, p3: NSError) => void): MSURLSessionDataTask;
}

declare class MSGraphDriveItemDeltaRequestBuilder extends MSRequestBuilder {

	constructor(o: { URL: NSURL; client: ODataBaseClient; }); // inherited from MSRequestBuilder

	request(): MSGraphDriveItemDeltaRequest;

	requestWithOptions(options: NSArray<any>): MSGraphDriveItemDeltaRequest;
}

declare class MSGraphDriveItemPermissionsCollectionRequest extends MSCollectionRequest {

	addPermissionWithCompletion(permission: MSGraphPermission, completionHandler: (p1: MSGraphPermission, p2: NSError) => void): MSURLSessionDataTask;

	getWithCompletion(completionHandler: (p1: MSCollection, p2: MSGraphDriveItemPermissionsCollectionRequest, p3: NSError) => void): MSURLSessionDataTask;
}

declare class MSGraphDriveItemPermissionsCollectionRequestBuilder extends MSCollectionRequestBuilder {

	permission(permission: string): MSGraphPermissionRequestBuilder;

	request(): MSGraphDriveItemPermissionsCollectionRequest;

	requestWithOptions(options: NSArray<any>): MSGraphDriveItemPermissionsCollectionRequest;
}

declare class MSGraphDriveItemRequest extends MSRequest {

	constructor(o: { URL: NSURL; client: ODataBaseClient; }); // inherited from MSRequest

	constructor(o: { URL: NSURL; options: NSArray<any>; client: ODataBaseClient; }); // inherited from MSRequest

	deleteWithCompletion(completionHandler: (p1: NSError) => void): MSURLSessionDataTask;

	expand(expand: string): MSGraphDriveItemRequest; // inherited from MSRequest

	getWithCompletion(completionHandler: (p1: MSGraphDriveItem, p2: NSError) => void): MSURLSessionDataTask;

	ifMatch(ifMatch: string): MSGraphDriveItemRequest; // inherited from MSRequest

	ifNoneMatch(ifNoneMatch: string): MSGraphDriveItemRequest; // inherited from MSRequest

	nameConflict(nameConflict: MSNameConflict): MSGraphDriveItemRequest; // inherited from MSRequest

	orderBy(orderBy: string): MSGraphDriveItemRequest; // inherited from MSRequest

	select(select: string): MSGraphDriveItemRequest; // inherited from MSRequest

	top(top: number): MSGraphDriveItemRequest; // inherited from MSRequest

	updateWithCompletion(driveItem: MSGraphDriveItem, completionHandler: (p1: MSGraphDriveItem, p2: NSError) => void): MSURLSessionDataTask;
}

declare class MSGraphDriveItemRequestBuilder extends MSGraphEntityRequestBuilder {

	children(): MSGraphDriveItemChildrenCollectionRequestBuilder;

	contentRequest(): MSGraphDriveItemContentRequest;

	contentRequestWithOptions(options: NSArray<any>): MSGraphDriveItemContentRequest;

	copyWithNameParentReference(name: string, parentReference: MSGraphItemReference): MSGraphDriveItemCopyRequestBuilder;

	createLinkWithTypeScope(type: string, scope: string): MSGraphDriveItemCreateLinkRequestBuilder;

	createdByUser(): MSGraphUserRequestBuilder;

	delta(): MSGraphDriveItemDeltaRequestBuilder;

	itemByPath(path: string): MSGraphDriveItemRequestBuilder;

	lastModifiedByUser(): MSGraphUserRequestBuilder;

	permissions(): MSGraphDriveItemPermissionsCollectionRequestBuilder;

	request(): MSGraphDriveItemRequest;

	requestWithOptions(options: NSArray<any>): MSGraphDriveItemRequest;

	searchWithQ(q: string): MSGraphDriveItemSearchRequestBuilder;

	thumbnails(): MSGraphDriveItemThumbnailsCollectionRequestBuilder;
}

declare class MSGraphDriveItemSearchRequest extends MSCollectionRequest {

	/* readonly */ mutableRequest: NSMutableURLRequest;

	constructor(o: { q: string; URL: NSURL; options: NSArray<any>; client: ODataBaseClient; });

	executeWithCompletion(completionHandler: (p1: MSCollection, p2: MSGraphDriveItemSearchRequest, p3: NSError) => void): MSURLSessionDataTask;
}

declare class MSGraphDriveItemSearchRequestBuilder extends MSRequestBuilder {

	constructor(o: { q: string; URL: NSURL; client: ODataBaseClient; });

	constructor(o: { URL: NSURL; client: ODataBaseClient; }); // inherited from MSRequestBuilder

	request(): MSGraphDriveItemSearchRequest;

	requestWithOptions(options: NSArray<any>): MSGraphDriveItemSearchRequest;
}

declare class MSGraphDriveItemThumbnailsCollectionRequest extends MSCollectionRequest {

	getWithCompletion(completionHandler: (p1: MSCollection, p2: MSGraphDriveItemThumbnailsCollectionRequest, p3: NSError) => void): MSURLSessionDataTask;
}

declare class MSGraphDriveItemThumbnailsCollectionRequestBuilder extends MSCollectionRequestBuilder {

	request(): MSGraphDriveItemThumbnailsCollectionRequest;

	requestWithOptions(options: NSArray<any>): MSGraphDriveItemThumbnailsCollectionRequest;

	thumbnailSet(thumbnailSet: string): MSGraphThumbnailSetRequestBuilder;
}

declare class MSGraphDriveItemsCollectionRequest extends MSCollectionRequest {

	addDriveItemWithCompletion(driveItem: MSGraphDriveItem, completionHandler: (p1: MSGraphDriveItem, p2: NSError) => void): MSURLSessionDataTask;

	getWithCompletion(completionHandler: (p1: MSCollection, p2: MSGraphDriveItemsCollectionRequest, p3: NSError) => void): MSURLSessionDataTask;
}

declare class MSGraphDriveItemsCollectionRequestBuilder extends MSCollectionRequestBuilder {

	driveItem(driveItem: string): MSGraphDriveItemRequestBuilder;

	request(): MSGraphDriveItemsCollectionRequest;

	requestWithOptions(options: NSArray<any>): MSGraphDriveItemsCollectionRequest;
}

declare class MSGraphDriveRecentRequest extends MSCollectionRequest {

	/* readonly */ mutableRequest: NSMutableURLRequest;

	executeWithCompletion(completionHandler: (p1: MSCollection, p2: MSGraphDriveRecentRequest, p3: NSError) => void): MSURLSessionDataTask;
}

declare class MSGraphDriveRecentRequestBuilder extends MSRequestBuilder {

	constructor(o: { URL: NSURL; client: ODataBaseClient; }); // inherited from MSRequestBuilder

	request(): MSGraphDriveRecentRequest;

	requestWithOptions(options: NSArray<any>): MSGraphDriveRecentRequest;
}

declare class MSGraphDriveRecipient extends MSObject {

	alias: string;

	email: string;

	objectId: string;

	constructor(o: { dictionary: NSDictionary<any, any>; }); // inherited from MSObject
}

declare class MSGraphDriveRequest extends MSRequest {

	constructor(o: { URL: NSURL; client: ODataBaseClient; }); // inherited from MSRequest

	constructor(o: { URL: NSURL; options: NSArray<any>; client: ODataBaseClient; }); // inherited from MSRequest

	deleteWithCompletion(completionHandler: (p1: NSError) => void): MSURLSessionDataTask;

	expand(expand: string): MSGraphDriveRequest; // inherited from MSRequest

	getWithCompletion(completionHandler: (p1: MSGraphDrive, p2: NSError) => void): MSURLSessionDataTask;

	ifMatch(ifMatch: string): MSGraphDriveRequest; // inherited from MSRequest

	ifNoneMatch(ifNoneMatch: string): MSGraphDriveRequest; // inherited from MSRequest

	nameConflict(nameConflict: MSNameConflict): MSGraphDriveRequest; // inherited from MSRequest

	orderBy(orderBy: string): MSGraphDriveRequest; // inherited from MSRequest

	select(select: string): MSGraphDriveRequest; // inherited from MSRequest

	top(top: number): MSGraphDriveRequest; // inherited from MSRequest

	updateWithCompletion(drive: MSGraphDrive, completionHandler: (p1: MSGraphDrive, p2: NSError) => void): MSURLSessionDataTask;
}

declare class MSGraphDriveRequestBuilder extends MSGraphEntityRequestBuilder {

	items(): MSGraphDriveItemsCollectionRequestBuilder;

	recent(): MSGraphDriveRecentRequestBuilder;

	request(): MSGraphDriveRequest;

	requestWithOptions(options: NSArray<any>): MSGraphDriveRequest;

	root(): MSGraphDriveItemRequestBuilder;

	sharedWithMe(): MSGraphDriveSharedWithMeRequestBuilder;

	special(): MSGraphDriveSpecialCollectionRequestBuilder;
}

declare class MSGraphDriveSharedWithMeRequest extends MSCollectionRequest {

	/* readonly */ mutableRequest: NSMutableURLRequest;

	executeWithCompletion(completionHandler: (p1: MSCollection, p2: MSGraphDriveSharedWithMeRequest, p3: NSError) => void): MSURLSessionDataTask;
}

declare class MSGraphDriveSharedWithMeRequestBuilder extends MSRequestBuilder {

	constructor(o: { URL: NSURL; client: ODataBaseClient; }); // inherited from MSRequestBuilder

	request(): MSGraphDriveSharedWithMeRequest;

	requestWithOptions(options: NSArray<any>): MSGraphDriveSharedWithMeRequest;
}

declare class MSGraphDriveSpecialCollectionRequest extends MSCollectionRequest {

	addDriveItemWithCompletion(driveItem: MSGraphDriveItem, completionHandler: (p1: MSGraphDriveItem, p2: NSError) => void): MSURLSessionDataTask;

	getWithCompletion(completionHandler: (p1: MSCollection, p2: MSGraphDriveSpecialCollectionRequest, p3: NSError) => void): MSURLSessionDataTask;
}

declare class MSGraphDriveSpecialCollectionRequestBuilder extends MSCollectionRequestBuilder {

	approot(): MSGraphDriveItemRequestBuilder;

	driveItem(driveItem: string): MSGraphDriveItemRequestBuilder;

	request(): MSGraphDriveSpecialCollectionRequest;

	requestWithOptions(options: NSArray<any>): MSGraphDriveSpecialCollectionRequest;
}

declare class MSGraphDrivesCollectionRequest extends MSCollectionRequest {

	getWithCompletion(completionHandler: (p1: MSCollection, p2: MSGraphDrivesCollectionRequest, p3: NSError) => void): MSURLSessionDataTask;
}

declare class MSGraphDrivesCollectionRequestBuilder extends MSCollectionRequestBuilder {

	drive(drive: string): MSGraphDriveRequestBuilder;

	request(): MSGraphDrivesCollectionRequest;

	requestWithOptions(options: NSArray<any>): MSGraphDrivesCollectionRequest;
}

declare class MSGraphEmailAddress extends MSObject {

	address: string;

	name: string;

	constructor(o: { dictionary: NSDictionary<any, any>; }); // inherited from MSObject
}

declare class MSGraphEntity extends MSObject {

	entityId: string;

	oDataType: string;

	constructor(o: { dictionary: NSDictionary<any, any>; }); // inherited from MSObject
}

declare class MSGraphEntityRequest extends MSRequest {

	constructor(o: { URL: NSURL; client: ODataBaseClient; }); // inherited from MSRequest

	constructor(o: { URL: NSURL; options: NSArray<any>; client: ODataBaseClient; }); // inherited from MSRequest

	deleteWithCompletion(completionHandler: (p1: NSError) => void): MSURLSessionDataTask;

	expand(expand: string): MSGraphEntityRequest; // inherited from MSRequest

	getWithCompletion(completionHandler: (p1: MSGraphEntity, p2: NSError) => void): MSURLSessionDataTask;

	ifMatch(ifMatch: string): MSGraphEntityRequest; // inherited from MSRequest

	ifNoneMatch(ifNoneMatch: string): MSGraphEntityRequest; // inherited from MSRequest

	nameConflict(nameConflict: MSNameConflict): MSGraphEntityRequest; // inherited from MSRequest

	orderBy(orderBy: string): MSGraphEntityRequest; // inherited from MSRequest

	select(select: string): MSGraphEntityRequest; // inherited from MSRequest

	top(top: number): MSGraphEntityRequest; // inherited from MSRequest

	updateWithCompletion(entity: MSGraphEntity, completionHandler: (p1: MSGraphEntity, p2: NSError) => void): MSURLSessionDataTask;
}

declare class MSGraphEntityRequestBuilder extends MSRequestBuilder {

	constructor(o: { URL: NSURL; client: ODataBaseClient; }); // inherited from MSRequestBuilder

	request(): MSGraphEntityRequest;

	requestWithOptions(options: NSArray<any>): MSGraphEntityRequest;
}

declare class MSGraphEvent extends MSGraphOutlookItem {

	attachments: NSArray<any>;

	attendees: NSArray<any>;

	body: MSGraphItemBody;

	bodyPreview: string;

	calendar: MSGraphCalendar;

	end: MSGraphDateTimeTimeZone;

	hasAttachments: boolean;

	iCalUId: string;

	importance: MSGraphImportance;

	instances: NSArray<any>;

	isAllDay: boolean;

	isCancelled: boolean;

	isOrganizer: boolean;

	isReminderOn: boolean;

	location: MSGraphLocation;

	organizer: MSGraphRecipient;

	originalEndTimeZone: string;

	originalStart: Date;

	originalStartTimeZone: string;

	recurrence: MSGraphPatternedRecurrence;

	reminderMinutesBeforeStart: number;

	responseRequested: boolean;

	responseStatus: MSGraphResponseStatus;

	sensitivity: MSGraphSensitivity;

	seriesMasterId: string;

	showAs: MSGraphFreeBusyStatus;

	start: MSGraphDateTimeTimeZone;

	subject: string;

	type: MSGraphEventType;

	webLink: string;
}

declare class MSGraphEventAcceptRequest extends MSRequest {

	/* readonly */ mutableRequest: NSMutableURLRequest;

	constructor(o: { comment: string; sendResponse: boolean; URL: NSURL; options: NSArray<any>; client: ODataBaseClient; });

	constructor(o: { URL: NSURL; client: ODataBaseClient; }); // inherited from MSRequest

	constructor(o: { URL: NSURL; options: NSArray<any>; client: ODataBaseClient; }); // inherited from MSRequest

	executeWithCompletion(completionHandler: (p1: NSDictionary<any, any>, p2: NSError) => void): MSURLSessionDataTask;

	expand(expand: string): MSGraphEventAcceptRequest; // inherited from MSRequest

	ifMatch(ifMatch: string): MSGraphEventAcceptRequest; // inherited from MSRequest

	ifNoneMatch(ifNoneMatch: string): MSGraphEventAcceptRequest; // inherited from MSRequest

	nameConflict(nameConflict: MSNameConflict): MSGraphEventAcceptRequest; // inherited from MSRequest

	orderBy(orderBy: string): MSGraphEventAcceptRequest; // inherited from MSRequest

	select(select: string): MSGraphEventAcceptRequest; // inherited from MSRequest

	top(top: number): MSGraphEventAcceptRequest; // inherited from MSRequest
}

declare class MSGraphEventAcceptRequestBuilder extends MSRequestBuilder {

	constructor(o: { comment: string; sendResponse: boolean; URL: NSURL; client: ODataBaseClient; });

	constructor(o: { URL: NSURL; client: ODataBaseClient; }); // inherited from MSRequestBuilder

	request(): MSGraphEventAcceptRequest;

	requestWithOptions(options: NSArray<any>): MSGraphEventAcceptRequest;
}

declare class MSGraphEventAttachmentsCollectionRequest extends MSCollectionRequest {

	addAttachmentWithCompletion(attachment: MSGraphAttachment, completionHandler: (p1: MSGraphAttachment, p2: NSError) => void): MSURLSessionDataTask;

	getWithCompletion(completionHandler: (p1: MSCollection, p2: MSGraphEventAttachmentsCollectionRequest, p3: NSError) => void): MSURLSessionDataTask;
}

declare class MSGraphEventAttachmentsCollectionRequestBuilder extends MSCollectionRequestBuilder {

	attachment(attachment: string): MSGraphAttachmentRequestBuilder;

	request(): MSGraphEventAttachmentsCollectionRequest;

	requestWithOptions(options: NSArray<any>): MSGraphEventAttachmentsCollectionRequest;
}

declare class MSGraphEventDeclineRequest extends MSRequest {

	/* readonly */ mutableRequest: NSMutableURLRequest;

	constructor(o: { comment: string; sendResponse: boolean; URL: NSURL; options: NSArray<any>; client: ODataBaseClient; });

	constructor(o: { URL: NSURL; client: ODataBaseClient; }); // inherited from MSRequest

	constructor(o: { URL: NSURL; options: NSArray<any>; client: ODataBaseClient; }); // inherited from MSRequest

	executeWithCompletion(completionHandler: (p1: NSDictionary<any, any>, p2: NSError) => void): MSURLSessionDataTask;

	expand(expand: string): MSGraphEventDeclineRequest; // inherited from MSRequest

	ifMatch(ifMatch: string): MSGraphEventDeclineRequest; // inherited from MSRequest

	ifNoneMatch(ifNoneMatch: string): MSGraphEventDeclineRequest; // inherited from MSRequest

	nameConflict(nameConflict: MSNameConflict): MSGraphEventDeclineRequest; // inherited from MSRequest

	orderBy(orderBy: string): MSGraphEventDeclineRequest; // inherited from MSRequest

	select(select: string): MSGraphEventDeclineRequest; // inherited from MSRequest

	top(top: number): MSGraphEventDeclineRequest; // inherited from MSRequest
}

declare class MSGraphEventDeclineRequestBuilder extends MSRequestBuilder {

	constructor(o: { comment: string; sendResponse: boolean; URL: NSURL; client: ODataBaseClient; });

	constructor(o: { URL: NSURL; client: ODataBaseClient; }); // inherited from MSRequestBuilder

	request(): MSGraphEventDeclineRequest;

	requestWithOptions(options: NSArray<any>): MSGraphEventDeclineRequest;
}

declare class MSGraphEventDismissReminderRequest extends MSRequest {

	/* readonly */ mutableRequest: NSMutableURLRequest;

	constructor(o: { URL: NSURL; client: ODataBaseClient; }); // inherited from MSRequest

	constructor(o: { URL: NSURL; options: NSArray<any>; client: ODataBaseClient; }); // inherited from MSRequest

	executeWithCompletion(completionHandler: (p1: NSDictionary<any, any>, p2: NSError) => void): MSURLSessionDataTask;

	expand(expand: string): MSGraphEventDismissReminderRequest; // inherited from MSRequest

	ifMatch(ifMatch: string): MSGraphEventDismissReminderRequest; // inherited from MSRequest

	ifNoneMatch(ifNoneMatch: string): MSGraphEventDismissReminderRequest; // inherited from MSRequest

	nameConflict(nameConflict: MSNameConflict): MSGraphEventDismissReminderRequest; // inherited from MSRequest

	orderBy(orderBy: string): MSGraphEventDismissReminderRequest; // inherited from MSRequest

	select(select: string): MSGraphEventDismissReminderRequest; // inherited from MSRequest

	top(top: number): MSGraphEventDismissReminderRequest; // inherited from MSRequest
}

declare class MSGraphEventDismissReminderRequestBuilder extends MSRequestBuilder {

	constructor(o: { URL: NSURL; client: ODataBaseClient; }); // inherited from MSRequestBuilder

	request(): MSGraphEventDismissReminderRequest;

	requestWithOptions(options: NSArray<any>): MSGraphEventDismissReminderRequest;
}

declare class MSGraphEventInstancesCollectionRequest extends MSCollectionRequest {

	addEventWithCompletion(event: MSGraphEvent, completionHandler: (p1: MSGraphEvent, p2: NSError) => void): MSURLSessionDataTask;

	getWithCompletion(completionHandler: (p1: MSCollection, p2: MSGraphEventInstancesCollectionRequest, p3: NSError) => void): MSURLSessionDataTask;
}

declare class MSGraphEventInstancesCollectionRequestBuilder extends MSCollectionRequestBuilder {

	event(event: string): MSGraphEventRequestBuilder;

	request(): MSGraphEventInstancesCollectionRequest;

	requestWithOptions(options: NSArray<any>): MSGraphEventInstancesCollectionRequest;
}

declare class MSGraphEventMessage extends MSGraphMessage {

	event: MSGraphEvent;

	meetingMessageType: MSGraphMeetingMessageType;
}

declare class MSGraphEventMessageRequest extends MSRequest {

	constructor(o: { URL: NSURL; client: ODataBaseClient; }); // inherited from MSRequest

	constructor(o: { URL: NSURL; options: NSArray<any>; client: ODataBaseClient; }); // inherited from MSRequest

	deleteWithCompletion(completionHandler: (p1: NSError) => void): MSURLSessionDataTask;

	expand(expand: string): MSGraphEventMessageRequest; // inherited from MSRequest

	getWithCompletion(completionHandler: (p1: MSGraphEventMessage, p2: NSError) => void): MSURLSessionDataTask;

	ifMatch(ifMatch: string): MSGraphEventMessageRequest; // inherited from MSRequest

	ifNoneMatch(ifNoneMatch: string): MSGraphEventMessageRequest; // inherited from MSRequest

	nameConflict(nameConflict: MSNameConflict): MSGraphEventMessageRequest; // inherited from MSRequest

	orderBy(orderBy: string): MSGraphEventMessageRequest; // inherited from MSRequest

	select(select: string): MSGraphEventMessageRequest; // inherited from MSRequest

	top(top: number): MSGraphEventMessageRequest; // inherited from MSRequest

	updateWithCompletion(eventMessage: MSGraphEventMessage, completionHandler: (p1: MSGraphEventMessage, p2: NSError) => void): MSURLSessionDataTask;
}

declare class MSGraphEventMessageRequestBuilder extends MSGraphMessageRequestBuilder {

	event(): MSGraphEventRequestBuilder;

	request(): MSGraphEventMessageRequest;

	requestWithOptions(options: NSArray<any>): MSGraphEventMessageRequest;
}

declare class MSGraphEventRequest extends MSRequest {

	constructor(o: { URL: NSURL; client: ODataBaseClient; }); // inherited from MSRequest

	constructor(o: { URL: NSURL; options: NSArray<any>; client: ODataBaseClient; }); // inherited from MSRequest

	deleteWithCompletion(completionHandler: (p1: NSError) => void): MSURLSessionDataTask;

	expand(expand: string): MSGraphEventRequest; // inherited from MSRequest

	getWithCompletion(completionHandler: (p1: MSGraphEvent, p2: NSError) => void): MSURLSessionDataTask;

	ifMatch(ifMatch: string): MSGraphEventRequest; // inherited from MSRequest

	ifNoneMatch(ifNoneMatch: string): MSGraphEventRequest; // inherited from MSRequest

	nameConflict(nameConflict: MSNameConflict): MSGraphEventRequest; // inherited from MSRequest

	orderBy(orderBy: string): MSGraphEventRequest; // inherited from MSRequest

	select(select: string): MSGraphEventRequest; // inherited from MSRequest

	top(top: number): MSGraphEventRequest; // inherited from MSRequest

	updateWithCompletion(event: MSGraphEvent, completionHandler: (p1: MSGraphEvent, p2: NSError) => void): MSURLSessionDataTask;
}

declare class MSGraphEventRequestBuilder extends MSGraphOutlookItemRequestBuilder {

	acceptWithCommentSendResponse(comment: string, sendResponse: boolean): MSGraphEventAcceptRequestBuilder;

	attachments(): MSGraphEventAttachmentsCollectionRequestBuilder;

	calendar(): MSGraphCalendarRequestBuilder;

	declineWithCommentSendResponse(comment: string, sendResponse: boolean): MSGraphEventDeclineRequestBuilder;

	dismissReminder(): MSGraphEventDismissReminderRequestBuilder;

	instances(): MSGraphEventInstancesCollectionRequestBuilder;

	request(): MSGraphEventRequest;

	requestWithOptions(options: NSArray<any>): MSGraphEventRequest;

	snoozeReminderWithNewReminderTime(newReminderTime: MSGraphDateTimeTimeZone): MSGraphEventSnoozeReminderRequestBuilder;

	tentativelyAcceptWithCommentSendResponse(comment: string, sendResponse: boolean): MSGraphEventTentativelyAcceptRequestBuilder;
}

declare class MSGraphEventSnoozeReminderRequest extends MSRequest {

	/* readonly */ mutableRequest: NSMutableURLRequest;

	constructor(o: { newReminderTime: MSGraphDateTimeTimeZone; URL: NSURL; options: NSArray<any>; client: ODataBaseClient; });

	constructor(o: { URL: NSURL; client: ODataBaseClient; }); // inherited from MSRequest

	constructor(o: { URL: NSURL; options: NSArray<any>; client: ODataBaseClient; }); // inherited from MSRequest

	executeWithCompletion(completionHandler: (p1: NSDictionary<any, any>, p2: NSError) => void): MSURLSessionDataTask;

	expand(expand: string): MSGraphEventSnoozeReminderRequest; // inherited from MSRequest

	ifMatch(ifMatch: string): MSGraphEventSnoozeReminderRequest; // inherited from MSRequest

	ifNoneMatch(ifNoneMatch: string): MSGraphEventSnoozeReminderRequest; // inherited from MSRequest

	nameConflict(nameConflict: MSNameConflict): MSGraphEventSnoozeReminderRequest; // inherited from MSRequest

	orderBy(orderBy: string): MSGraphEventSnoozeReminderRequest; // inherited from MSRequest

	select(select: string): MSGraphEventSnoozeReminderRequest; // inherited from MSRequest

	top(top: number): MSGraphEventSnoozeReminderRequest; // inherited from MSRequest
}

declare class MSGraphEventSnoozeReminderRequestBuilder extends MSRequestBuilder {

	constructor(o: { newReminderTime: MSGraphDateTimeTimeZone; URL: NSURL; client: ODataBaseClient; });

	constructor(o: { URL: NSURL; client: ODataBaseClient; }); // inherited from MSRequestBuilder

	request(): MSGraphEventSnoozeReminderRequest;

	requestWithOptions(options: NSArray<any>): MSGraphEventSnoozeReminderRequest;
}

declare class MSGraphEventTentativelyAcceptRequest extends MSRequest {

	/* readonly */ mutableRequest: NSMutableURLRequest;

	constructor(o: { comment: string; sendResponse: boolean; URL: NSURL; options: NSArray<any>; client: ODataBaseClient; });

	constructor(o: { URL: NSURL; client: ODataBaseClient; }); // inherited from MSRequest

	constructor(o: { URL: NSURL; options: NSArray<any>; client: ODataBaseClient; }); // inherited from MSRequest

	executeWithCompletion(completionHandler: (p1: NSDictionary<any, any>, p2: NSError) => void): MSURLSessionDataTask;

	expand(expand: string): MSGraphEventTentativelyAcceptRequest; // inherited from MSRequest

	ifMatch(ifMatch: string): MSGraphEventTentativelyAcceptRequest; // inherited from MSRequest

	ifNoneMatch(ifNoneMatch: string): MSGraphEventTentativelyAcceptRequest; // inherited from MSRequest

	nameConflict(nameConflict: MSNameConflict): MSGraphEventTentativelyAcceptRequest; // inherited from MSRequest

	orderBy(orderBy: string): MSGraphEventTentativelyAcceptRequest; // inherited from MSRequest

	select(select: string): MSGraphEventTentativelyAcceptRequest; // inherited from MSRequest

	top(top: number): MSGraphEventTentativelyAcceptRequest; // inherited from MSRequest
}

declare class MSGraphEventTentativelyAcceptRequestBuilder extends MSRequestBuilder {

	constructor(o: { comment: string; sendResponse: boolean; URL: NSURL; client: ODataBaseClient; });

	constructor(o: { URL: NSURL; client: ODataBaseClient; }); // inherited from MSRequestBuilder

	request(): MSGraphEventTentativelyAcceptRequest;

	requestWithOptions(options: NSArray<any>): MSGraphEventTentativelyAcceptRequest;
}

declare class MSGraphEventType extends NSObject {

	static UnknownEnumValue(): MSGraphEventType;

	static alloc(): MSGraphEventType; // inherited from NSObject

	static eventTypeWithEnumValue(val: MSGraphEventTypeValue): MSGraphEventType;

	static exception(): MSGraphEventType;

	static new(): MSGraphEventType; // inherited from NSObject

	static occurrence(): MSGraphEventType;

	static seriesMaster(): MSGraphEventType;

	static singleInstance(): MSGraphEventType;

	/* readonly */ enumValue: MSGraphEventTypeValue;

	constructor(); // inherited from NSObject

	ms_toString(): string;

	self(): MSGraphEventType; // inherited from NSObjectProtocol
}

declare const enum MSGraphEventTypeValue {

	SingleInstance = 0,

	Occurrence = 1,

	Exception = 2,

	SeriesMaster = 3,

	EndOfEnum = 4
}

declare class MSGraphFile extends MSObject {

	hashes: MSGraphHashes;

	mimeType: string;

	constructor(o: { dictionary: NSDictionary<any, any>; }); // inherited from MSObject
}

declare class MSGraphFileAttachment extends MSGraphAttachment {

	contentBytes: string;

	contentId: string;

	contentLocation: string;
}

declare class MSGraphFileAttachmentRequest extends MSRequest {

	constructor(o: { URL: NSURL; client: ODataBaseClient; }); // inherited from MSRequest

	constructor(o: { URL: NSURL; options: NSArray<any>; client: ODataBaseClient; }); // inherited from MSRequest

	deleteWithCompletion(completionHandler: (p1: NSError) => void): MSURLSessionDataTask;

	expand(expand: string): MSGraphFileAttachmentRequest; // inherited from MSRequest

	getWithCompletion(completionHandler: (p1: MSGraphFileAttachment, p2: NSError) => void): MSURLSessionDataTask;

	ifMatch(ifMatch: string): MSGraphFileAttachmentRequest; // inherited from MSRequest

	ifNoneMatch(ifNoneMatch: string): MSGraphFileAttachmentRequest; // inherited from MSRequest

	nameConflict(nameConflict: MSNameConflict): MSGraphFileAttachmentRequest; // inherited from MSRequest

	orderBy(orderBy: string): MSGraphFileAttachmentRequest; // inherited from MSRequest

	select(select: string): MSGraphFileAttachmentRequest; // inherited from MSRequest

	top(top: number): MSGraphFileAttachmentRequest; // inherited from MSRequest

	updateWithCompletion(fileAttachment: MSGraphFileAttachment, completionHandler: (p1: MSGraphFileAttachment, p2: NSError) => void): MSURLSessionDataTask;
}

declare class MSGraphFileAttachmentRequestBuilder extends MSGraphAttachmentRequestBuilder {

	request(): MSGraphFileAttachmentRequest;

	requestWithOptions(options: NSArray<any>): MSGraphFileAttachmentRequest;
}

declare class MSGraphFileSystemInfo extends MSObject {

	createdDateTime: Date;

	lastModifiedDateTime: Date;

	constructor(o: { dictionary: NSDictionary<any, any>; }); // inherited from MSObject
}

declare class MSGraphFolder extends MSObject {

	childCount: number;

	constructor(o: { dictionary: NSDictionary<any, any>; }); // inherited from MSObject
}

declare class MSGraphFreeBusyStatus extends NSObject {

	static UnknownEnumValue(): MSGraphFreeBusyStatus;

	static alloc(): MSGraphFreeBusyStatus; // inherited from NSObject

	static busy(): MSGraphFreeBusyStatus;

	static free(): MSGraphFreeBusyStatus;

	static freeBusyStatusWithEnumValue(val: MSGraphFreeBusyStatusValue): MSGraphFreeBusyStatus;

	static new(): MSGraphFreeBusyStatus; // inherited from NSObject

	static oof(): MSGraphFreeBusyStatus;

	static tentative(): MSGraphFreeBusyStatus;

	static unknown(): MSGraphFreeBusyStatus;

	static workingElsewhere(): MSGraphFreeBusyStatus;

	/* readonly */ enumValue: MSGraphFreeBusyStatusValue;

	constructor(); // inherited from NSObject

	ms_toString(): string;

	self(): MSGraphFreeBusyStatus; // inherited from NSObjectProtocol
}

declare const enum MSGraphFreeBusyStatusValue {

	Unknown = -1,

	Free = 0,

	Tentative = 1,

	Busy = 2,

	Oof = 3,

	WorkingElsewhere = 4,

	EndOfEnum = 5
}

declare class MSGraphGeoCoordinates extends MSObject {

	altitude: number;

	latitude: number;

	longitude: number;

	constructor(o: { dictionary: NSDictionary<any, any>; }); // inherited from MSObject
}

declare class MSGraphGroup extends MSGraphDirectoryObject {

	acceptedSenders: NSArray<any>;

	allowExternalSenders: boolean;

	autoSubscribeNewMembers: boolean;

	calendar: MSGraphCalendar;

	calendarView: NSArray<any>;

	conversations: NSArray<any>;

	createdOnBehalfOf: MSGraphDirectoryObject;

	displayName: string;

	drive: MSGraphDrive;

	events: NSArray<any>;

	groupDescription: string;

	groupTypes: NSArray<any>;

	isSubscribedByMail: boolean;

	mail: string;

	mailEnabled: boolean;

	mailNickname: string;

	memberOf: NSArray<any>;

	members: NSArray<any>;

	onPremisesLastSyncDateTime: Date;

	onPremisesSecurityIdentifier: string;

	onPremisesSyncEnabled: boolean;

	owners: NSArray<any>;

	photo: MSGraphProfilePhoto;

	proxyAddresses: NSArray<any>;

	rejectedSenders: NSArray<any>;

	securityEnabled: boolean;

	threads: NSArray<any>;

	unseenCount: number;

	visibility: string;
}

declare class MSGraphGroupAcceptedSendersCollectionRequest extends MSCollectionRequest {

	addDirectoryObjectWithCompletion(directoryObject: MSGraphDirectoryObject, completionHandler: (p1: MSGraphDirectoryObject, p2: NSError) => void): MSURLSessionDataTask;

	getWithCompletion(completionHandler: (p1: MSCollection, p2: MSGraphGroupAcceptedSendersCollectionRequest, p3: NSError) => void): MSURLSessionDataTask;
}

declare class MSGraphGroupAcceptedSendersCollectionRequestBuilder extends MSCollectionRequestBuilder {

	directoryObject(directoryObject: string): MSGraphDirectoryObjectRequestBuilder;

	request(): MSGraphGroupAcceptedSendersCollectionRequest;

	requestWithOptions(options: NSArray<any>): MSGraphGroupAcceptedSendersCollectionRequest;
}

declare class MSGraphGroupAddFavoriteRequest extends MSRequest {

	/* readonly */ mutableRequest: NSMutableURLRequest;

	constructor(o: { URL: NSURL; client: ODataBaseClient; }); // inherited from MSRequest

	constructor(o: { URL: NSURL; options: NSArray<any>; client: ODataBaseClient; }); // inherited from MSRequest

	executeWithCompletion(completionHandler: (p1: NSDictionary<any, any>, p2: NSError) => void): MSURLSessionDataTask;

	expand(expand: string): MSGraphGroupAddFavoriteRequest; // inherited from MSRequest

	ifMatch(ifMatch: string): MSGraphGroupAddFavoriteRequest; // inherited from MSRequest

	ifNoneMatch(ifNoneMatch: string): MSGraphGroupAddFavoriteRequest; // inherited from MSRequest

	nameConflict(nameConflict: MSNameConflict): MSGraphGroupAddFavoriteRequest; // inherited from MSRequest

	orderBy(orderBy: string): MSGraphGroupAddFavoriteRequest; // inherited from MSRequest

	select(select: string): MSGraphGroupAddFavoriteRequest; // inherited from MSRequest

	top(top: number): MSGraphGroupAddFavoriteRequest; // inherited from MSRequest
}

declare class MSGraphGroupAddFavoriteRequestBuilder extends MSRequestBuilder {

	constructor(o: { URL: NSURL; client: ODataBaseClient; }); // inherited from MSRequestBuilder

	request(): MSGraphGroupAddFavoriteRequest;

	requestWithOptions(options: NSArray<any>): MSGraphGroupAddFavoriteRequest;
}

declare class MSGraphGroupCalendarViewCollectionRequest extends MSCollectionRequest {

	addEventWithCompletion(event: MSGraphEvent, completionHandler: (p1: MSGraphEvent, p2: NSError) => void): MSURLSessionDataTask;

	getWithCompletion(completionHandler: (p1: MSCollection, p2: MSGraphGroupCalendarViewCollectionRequest, p3: NSError) => void): MSURLSessionDataTask;
}

declare class MSGraphGroupCalendarViewCollectionRequestBuilder extends MSCollectionRequestBuilder {

	event(event: string): MSGraphEventRequestBuilder;

	request(): MSGraphGroupCalendarViewCollectionRequest;

	requestWithOptions(options: NSArray<any>): MSGraphGroupCalendarViewCollectionRequest;
}

declare class MSGraphGroupConversationsCollectionRequest extends MSCollectionRequest {

	addConversationWithCompletion(conversation: MSGraphConversation, completionHandler: (p1: MSGraphConversation, p2: NSError) => void): MSURLSessionDataTask;

	getWithCompletion(completionHandler: (p1: MSCollection, p2: MSGraphGroupConversationsCollectionRequest, p3: NSError) => void): MSURLSessionDataTask;
}

declare class MSGraphGroupConversationsCollectionRequestBuilder extends MSCollectionRequestBuilder {

	conversation(conversation: string): MSGraphConversationRequestBuilder;

	request(): MSGraphGroupConversationsCollectionRequest;

	requestWithOptions(options: NSArray<any>): MSGraphGroupConversationsCollectionRequest;
}

declare class MSGraphGroupEventsCollectionRequest extends MSCollectionRequest {

	addEventWithCompletion(event: MSGraphEvent, completionHandler: (p1: MSGraphEvent, p2: NSError) => void): MSURLSessionDataTask;

	getWithCompletion(completionHandler: (p1: MSCollection, p2: MSGraphGroupEventsCollectionRequest, p3: NSError) => void): MSURLSessionDataTask;
}

declare class MSGraphGroupEventsCollectionRequestBuilder extends MSCollectionRequestBuilder {

	event(event: string): MSGraphEventRequestBuilder;

	request(): MSGraphGroupEventsCollectionRequest;

	requestWithOptions(options: NSArray<any>): MSGraphGroupEventsCollectionRequest;
}

declare class MSGraphGroupMemberOfCollectionReferencesRequest extends MSCollectionRequest {

	addDirectoryObjectWithCompletion(directoryObject: MSGraphDirectoryObject, completionHandler: (p1: MSGraphDirectoryObject, p2: NSError) => void): MSURLSessionDataTask;
}

declare class MSGraphGroupMemberOfCollectionReferencesRequestBuilder extends MSCollectionRequestBuilder {

	request(): MSGraphGroupMemberOfCollectionReferencesRequest;

	requestWithOptions(options: NSArray<any>): MSGraphGroupMemberOfCollectionReferencesRequest;
}

declare class MSGraphGroupMemberOfCollectionWithReferencesRequest extends MSCollectionRequest {

	getWithCompletion(completionHandler: (p1: MSCollection, p2: MSGraphGroupMemberOfCollectionWithReferencesRequest, p3: NSError) => void): MSURLSessionDataTask;
}

declare class MSGraphGroupMemberOfCollectionWithReferencesRequestBuilder extends MSCollectionRequestBuilder {

	directoryObject(directoryObject: string): MSGraphDirectoryObjectRequestBuilder;

	references(): MSGraphGroupMemberOfCollectionReferencesRequestBuilder;

	request(): MSGraphGroupMemberOfCollectionWithReferencesRequest;

	requestWithOptions(options: NSArray<any>): MSGraphGroupMemberOfCollectionWithReferencesRequest;
}

declare class MSGraphGroupMembersCollectionReferencesRequest extends MSCollectionRequest {

	addDirectoryObjectWithCompletion(directoryObject: MSGraphDirectoryObject, completionHandler: (p1: MSGraphDirectoryObject, p2: NSError) => void): MSURLSessionDataTask;
}

declare class MSGraphGroupMembersCollectionReferencesRequestBuilder extends MSCollectionRequestBuilder {

	request(): MSGraphGroupMembersCollectionReferencesRequest;

	requestWithOptions(options: NSArray<any>): MSGraphGroupMembersCollectionReferencesRequest;
}

declare class MSGraphGroupMembersCollectionWithReferencesRequest extends MSCollectionRequest {

	getWithCompletion(completionHandler: (p1: MSCollection, p2: MSGraphGroupMembersCollectionWithReferencesRequest, p3: NSError) => void): MSURLSessionDataTask;
}

declare class MSGraphGroupMembersCollectionWithReferencesRequestBuilder extends MSCollectionRequestBuilder {

	directoryObject(directoryObject: string): MSGraphDirectoryObjectRequestBuilder;

	references(): MSGraphGroupMembersCollectionReferencesRequestBuilder;

	request(): MSGraphGroupMembersCollectionWithReferencesRequest;

	requestWithOptions(options: NSArray<any>): MSGraphGroupMembersCollectionWithReferencesRequest;
}

declare class MSGraphGroupOwnersCollectionReferencesRequest extends MSCollectionRequest {

	addDirectoryObjectWithCompletion(directoryObject: MSGraphDirectoryObject, completionHandler: (p1: MSGraphDirectoryObject, p2: NSError) => void): MSURLSessionDataTask;
}

declare class MSGraphGroupOwnersCollectionReferencesRequestBuilder extends MSCollectionRequestBuilder {

	request(): MSGraphGroupOwnersCollectionReferencesRequest;

	requestWithOptions(options: NSArray<any>): MSGraphGroupOwnersCollectionReferencesRequest;
}

declare class MSGraphGroupOwnersCollectionWithReferencesRequest extends MSCollectionRequest {

	getWithCompletion(completionHandler: (p1: MSCollection, p2: MSGraphGroupOwnersCollectionWithReferencesRequest, p3: NSError) => void): MSURLSessionDataTask;
}

declare class MSGraphGroupOwnersCollectionWithReferencesRequestBuilder extends MSCollectionRequestBuilder {

	directoryObject(directoryObject: string): MSGraphDirectoryObjectRequestBuilder;

	references(): MSGraphGroupOwnersCollectionReferencesRequestBuilder;

	request(): MSGraphGroupOwnersCollectionWithReferencesRequest;

	requestWithOptions(options: NSArray<any>): MSGraphGroupOwnersCollectionWithReferencesRequest;
}

declare class MSGraphGroupRejectedSendersCollectionRequest extends MSCollectionRequest {

	addDirectoryObjectWithCompletion(directoryObject: MSGraphDirectoryObject, completionHandler: (p1: MSGraphDirectoryObject, p2: NSError) => void): MSURLSessionDataTask;

	getWithCompletion(completionHandler: (p1: MSCollection, p2: MSGraphGroupRejectedSendersCollectionRequest, p3: NSError) => void): MSURLSessionDataTask;
}

declare class MSGraphGroupRejectedSendersCollectionRequestBuilder extends MSCollectionRequestBuilder {

	directoryObject(directoryObject: string): MSGraphDirectoryObjectRequestBuilder;

	request(): MSGraphGroupRejectedSendersCollectionRequest;

	requestWithOptions(options: NSArray<any>): MSGraphGroupRejectedSendersCollectionRequest;
}

declare class MSGraphGroupRemoveFavoriteRequest extends MSRequest {

	/* readonly */ mutableRequest: NSMutableURLRequest;

	constructor(o: { URL: NSURL; client: ODataBaseClient; }); // inherited from MSRequest

	constructor(o: { URL: NSURL; options: NSArray<any>; client: ODataBaseClient; }); // inherited from MSRequest

	executeWithCompletion(completionHandler: (p1: NSDictionary<any, any>, p2: NSError) => void): MSURLSessionDataTask;

	expand(expand: string): MSGraphGroupRemoveFavoriteRequest; // inherited from MSRequest

	ifMatch(ifMatch: string): MSGraphGroupRemoveFavoriteRequest; // inherited from MSRequest

	ifNoneMatch(ifNoneMatch: string): MSGraphGroupRemoveFavoriteRequest; // inherited from MSRequest

	nameConflict(nameConflict: MSNameConflict): MSGraphGroupRemoveFavoriteRequest; // inherited from MSRequest

	orderBy(orderBy: string): MSGraphGroupRemoveFavoriteRequest; // inherited from MSRequest

	select(select: string): MSGraphGroupRemoveFavoriteRequest; // inherited from MSRequest

	top(top: number): MSGraphGroupRemoveFavoriteRequest; // inherited from MSRequest
}

declare class MSGraphGroupRemoveFavoriteRequestBuilder extends MSRequestBuilder {

	constructor(o: { URL: NSURL; client: ODataBaseClient; }); // inherited from MSRequestBuilder

	request(): MSGraphGroupRemoveFavoriteRequest;

	requestWithOptions(options: NSArray<any>): MSGraphGroupRemoveFavoriteRequest;
}

declare class MSGraphGroupRequest extends MSRequest {

	constructor(o: { URL: NSURL; client: ODataBaseClient; }); // inherited from MSRequest

	constructor(o: { URL: NSURL; options: NSArray<any>; client: ODataBaseClient; }); // inherited from MSRequest

	deleteWithCompletion(completionHandler: (p1: NSError) => void): MSURLSessionDataTask;

	expand(expand: string): MSGraphGroupRequest; // inherited from MSRequest

	getWithCompletion(completionHandler: (p1: MSGraphGroup, p2: NSError) => void): MSURLSessionDataTask;

	ifMatch(ifMatch: string): MSGraphGroupRequest; // inherited from MSRequest

	ifNoneMatch(ifNoneMatch: string): MSGraphGroupRequest; // inherited from MSRequest

	nameConflict(nameConflict: MSNameConflict): MSGraphGroupRequest; // inherited from MSRequest

	orderBy(orderBy: string): MSGraphGroupRequest; // inherited from MSRequest

	select(select: string): MSGraphGroupRequest; // inherited from MSRequest

	top(top: number): MSGraphGroupRequest; // inherited from MSRequest

	updateWithCompletion(group: MSGraphGroup, completionHandler: (p1: MSGraphGroup, p2: NSError) => void): MSURLSessionDataTask;
}

declare class MSGraphGroupRequestBuilder extends MSGraphDirectoryObjectRequestBuilder {

	acceptedSenders(directoryObject: string): MSGraphDirectoryObjectRequestBuilder;

	addFavorite(): MSGraphGroupAddFavoriteRequestBuilder;

	calendar(): MSGraphCalendarRequestBuilder;

	calendarView(): MSGraphGroupCalendarViewCollectionRequestBuilder;

	conversations(conversation: string): MSGraphConversationRequestBuilder;

	createdOnBehalfOf(): MSGraphDirectoryObjectRequestBuilder;

	drive(): MSGraphDriveRequestBuilder;

	events(): MSGraphGroupEventsCollectionRequestBuilder;

	memberOf(): MSGraphGroupMemberOfCollectionWithReferencesRequestBuilder;

	members(): MSGraphGroupMembersCollectionWithReferencesRequestBuilder;

	owners(directoryObject: string): MSGraphDirectoryObjectRequestBuilder;

	photo(): MSGraphProfilePhotoRequestBuilder;

	photoValue(): MSGraphProfilePhotoStreamRequest;

	photoValueWithOptions(options: NSArray<any>): MSGraphProfilePhotoStreamRequest;

	rejectedSenders(): MSGraphGroupRejectedSendersCollectionRequestBuilder;

	removeFavorite(): MSGraphGroupRemoveFavoriteRequestBuilder;

	request(): MSGraphGroupRequest;

	requestWithOptions(options: NSArray<any>): MSGraphGroupRequest;

	resetUnseenCount(): MSGraphGroupResetUnseenCountRequestBuilder;

	subscribeByMail(): MSGraphGroupSubscribeByMailRequestBuilder;

	threads(conversationThread: string): MSGraphConversationThreadRequestBuilder;

	unsubscribeByMail(): MSGraphGroupUnsubscribeByMailRequestBuilder;
}

declare class MSGraphGroupResetUnseenCountRequest extends MSRequest {

	/* readonly */ mutableRequest: NSMutableURLRequest;

	constructor(o: { URL: NSURL; client: ODataBaseClient; }); // inherited from MSRequest

	constructor(o: { URL: NSURL; options: NSArray<any>; client: ODataBaseClient; }); // inherited from MSRequest

	executeWithCompletion(completionHandler: (p1: NSDictionary<any, any>, p2: NSError) => void): MSURLSessionDataTask;

	expand(expand: string): MSGraphGroupResetUnseenCountRequest; // inherited from MSRequest

	ifMatch(ifMatch: string): MSGraphGroupResetUnseenCountRequest; // inherited from MSRequest

	ifNoneMatch(ifNoneMatch: string): MSGraphGroupResetUnseenCountRequest; // inherited from MSRequest

	nameConflict(nameConflict: MSNameConflict): MSGraphGroupResetUnseenCountRequest; // inherited from MSRequest

	orderBy(orderBy: string): MSGraphGroupResetUnseenCountRequest; // inherited from MSRequest

	select(select: string): MSGraphGroupResetUnseenCountRequest; // inherited from MSRequest

	top(top: number): MSGraphGroupResetUnseenCountRequest; // inherited from MSRequest
}

declare class MSGraphGroupResetUnseenCountRequestBuilder extends MSRequestBuilder {

	constructor(o: { URL: NSURL; client: ODataBaseClient; }); // inherited from MSRequestBuilder

	request(): MSGraphGroupResetUnseenCountRequest;

	requestWithOptions(options: NSArray<any>): MSGraphGroupResetUnseenCountRequest;
}

declare class MSGraphGroupSubscribeByMailRequest extends MSRequest {

	/* readonly */ mutableRequest: NSMutableURLRequest;

	constructor(o: { URL: NSURL; client: ODataBaseClient; }); // inherited from MSRequest

	constructor(o: { URL: NSURL; options: NSArray<any>; client: ODataBaseClient; }); // inherited from MSRequest

	executeWithCompletion(completionHandler: (p1: NSDictionary<any, any>, p2: NSError) => void): MSURLSessionDataTask;

	expand(expand: string): MSGraphGroupSubscribeByMailRequest; // inherited from MSRequest

	ifMatch(ifMatch: string): MSGraphGroupSubscribeByMailRequest; // inherited from MSRequest

	ifNoneMatch(ifNoneMatch: string): MSGraphGroupSubscribeByMailRequest; // inherited from MSRequest

	nameConflict(nameConflict: MSNameConflict): MSGraphGroupSubscribeByMailRequest; // inherited from MSRequest

	orderBy(orderBy: string): MSGraphGroupSubscribeByMailRequest; // inherited from MSRequest

	select(select: string): MSGraphGroupSubscribeByMailRequest; // inherited from MSRequest

	top(top: number): MSGraphGroupSubscribeByMailRequest; // inherited from MSRequest
}

declare class MSGraphGroupSubscribeByMailRequestBuilder extends MSRequestBuilder {

	constructor(o: { URL: NSURL; client: ODataBaseClient; }); // inherited from MSRequestBuilder

	request(): MSGraphGroupSubscribeByMailRequest;

	requestWithOptions(options: NSArray<any>): MSGraphGroupSubscribeByMailRequest;
}

declare class MSGraphGroupThreadsCollectionRequest extends MSCollectionRequest {

	addConversationThreadWithCompletion(conversationThread: MSGraphConversationThread, completionHandler: (p1: MSGraphConversationThread, p2: NSError) => void): MSURLSessionDataTask;

	getWithCompletion(completionHandler: (p1: MSCollection, p2: MSGraphGroupThreadsCollectionRequest, p3: NSError) => void): MSURLSessionDataTask;
}

declare class MSGraphGroupThreadsCollectionRequestBuilder extends MSCollectionRequestBuilder {

	conversationThread(conversationThread: string): MSGraphConversationThreadRequestBuilder;

	request(): MSGraphGroupThreadsCollectionRequest;

	requestWithOptions(options: NSArray<any>): MSGraphGroupThreadsCollectionRequest;
}

declare class MSGraphGroupUnsubscribeByMailRequest extends MSRequest {

	/* readonly */ mutableRequest: NSMutableURLRequest;

	constructor(o: { URL: NSURL; client: ODataBaseClient; }); // inherited from MSRequest

	constructor(o: { URL: NSURL; options: NSArray<any>; client: ODataBaseClient; }); // inherited from MSRequest

	executeWithCompletion(completionHandler: (p1: NSDictionary<any, any>, p2: NSError) => void): MSURLSessionDataTask;

	expand(expand: string): MSGraphGroupUnsubscribeByMailRequest; // inherited from MSRequest

	ifMatch(ifMatch: string): MSGraphGroupUnsubscribeByMailRequest; // inherited from MSRequest

	ifNoneMatch(ifNoneMatch: string): MSGraphGroupUnsubscribeByMailRequest; // inherited from MSRequest

	nameConflict(nameConflict: MSNameConflict): MSGraphGroupUnsubscribeByMailRequest; // inherited from MSRequest

	orderBy(orderBy: string): MSGraphGroupUnsubscribeByMailRequest; // inherited from MSRequest

	select(select: string): MSGraphGroupUnsubscribeByMailRequest; // inherited from MSRequest

	top(top: number): MSGraphGroupUnsubscribeByMailRequest; // inherited from MSRequest
}

declare class MSGraphGroupUnsubscribeByMailRequestBuilder extends MSRequestBuilder {

	constructor(o: { URL: NSURL; client: ODataBaseClient; }); // inherited from MSRequestBuilder

	request(): MSGraphGroupUnsubscribeByMailRequest;

	requestWithOptions(options: NSArray<any>): MSGraphGroupUnsubscribeByMailRequest;
}

declare class MSGraphGroupsCollectionRequest extends MSCollectionRequest {

	addGroupWithCompletion(group: MSGraphGroup, completionHandler: (p1: MSGraphGroup, p2: NSError) => void): MSURLSessionDataTask;

	getWithCompletion(completionHandler: (p1: MSCollection, p2: MSGraphGroupsCollectionRequest, p3: NSError) => void): MSURLSessionDataTask;
}

declare class MSGraphGroupsCollectionRequestBuilder extends MSCollectionRequestBuilder {

	group(group: string): MSGraphGroupRequestBuilder;

	request(): MSGraphGroupsCollectionRequest;

	requestWithOptions(options: NSArray<any>): MSGraphGroupsCollectionRequest;
}

declare class MSGraphHashes extends MSObject {

	crc32Hash: string;

	sha1Hash: string;

	constructor(o: { dictionary: NSDictionary<any, any>; }); // inherited from MSObject
}

declare class MSGraphIdentity extends MSObject {

	displayName: string;

	identityId: string;

	constructor(o: { dictionary: NSDictionary<any, any>; }); // inherited from MSObject
}

declare class MSGraphIdentitySet extends MSObject {

	application: MSGraphIdentity;

	device: MSGraphIdentity;

	user: MSGraphIdentity;

	constructor(o: { dictionary: NSDictionary<any, any>; }); // inherited from MSObject
}

declare class MSGraphImage extends MSObject {

	height: number;

	width: number;

	constructor(o: { dictionary: NSDictionary<any, any>; }); // inherited from MSObject
}

declare class MSGraphImportance extends NSObject {

	static UnknownEnumValue(): MSGraphImportance;

	static alloc(): MSGraphImportance; // inherited from NSObject

	static high(): MSGraphImportance;

	static importanceWithEnumValue(val: MSGraphImportanceValue): MSGraphImportance;

	static low(): MSGraphImportance;

	static new(): MSGraphImportance; // inherited from NSObject

	static normal(): MSGraphImportance;

	/* readonly */ enumValue: MSGraphImportanceValue;

	constructor(); // inherited from NSObject

	ms_toString(): string;

	self(): MSGraphImportance; // inherited from NSObjectProtocol
}

declare const enum MSGraphImportanceValue {

	Low = 0,

	Normal = 1,

	High = 2,

	EndOfEnum = 3
}

declare class MSGraphItemAttachment extends MSGraphAttachment {

	item: MSGraphOutlookItem;
}

declare class MSGraphItemAttachmentRequest extends MSRequest {

	constructor(o: { URL: NSURL; client: ODataBaseClient; }); // inherited from MSRequest

	constructor(o: { URL: NSURL; options: NSArray<any>; client: ODataBaseClient; }); // inherited from MSRequest

	deleteWithCompletion(completionHandler: (p1: NSError) => void): MSURLSessionDataTask;

	expand(expand: string): MSGraphItemAttachmentRequest; // inherited from MSRequest

	getWithCompletion(completionHandler: (p1: MSGraphItemAttachment, p2: NSError) => void): MSURLSessionDataTask;

	ifMatch(ifMatch: string): MSGraphItemAttachmentRequest; // inherited from MSRequest

	ifNoneMatch(ifNoneMatch: string): MSGraphItemAttachmentRequest; // inherited from MSRequest

	nameConflict(nameConflict: MSNameConflict): MSGraphItemAttachmentRequest; // inherited from MSRequest

	orderBy(orderBy: string): MSGraphItemAttachmentRequest; // inherited from MSRequest

	select(select: string): MSGraphItemAttachmentRequest; // inherited from MSRequest

	top(top: number): MSGraphItemAttachmentRequest; // inherited from MSRequest

	updateWithCompletion(itemAttachment: MSGraphItemAttachment, completionHandler: (p1: MSGraphItemAttachment, p2: NSError) => void): MSURLSessionDataTask;
}

declare class MSGraphItemAttachmentRequestBuilder extends MSGraphAttachmentRequestBuilder {

	item(): MSGraphOutlookItemRequestBuilder;

	request(): MSGraphItemAttachmentRequest;

	requestWithOptions(options: NSArray<any>): MSGraphItemAttachmentRequest;
}

declare class MSGraphItemBody extends MSObject {

	content: string;

	contentType: MSGraphBodyType;

	constructor(o: { dictionary: NSDictionary<any, any>; }); // inherited from MSObject
}

declare class MSGraphItemReference extends MSObject {

	driveId: string;

	itemReferenceId: string;

	path: string;

	constructor(o: { dictionary: NSDictionary<any, any>; }); // inherited from MSObject
}

declare class MSGraphLicenseUnitsDetail extends MSObject {

	enabled: number;

	suspended: number;

	warning: number;

	constructor(o: { dictionary: NSDictionary<any, any>; }); // inherited from MSObject
}

declare class MSGraphLocation extends MSObject {

	address: MSGraphPhysicalAddress;

	displayName: string;

	constructor(o: { dictionary: NSDictionary<any, any>; }); // inherited from MSObject
}

declare class MSGraphMailFolder extends MSGraphEntity {

	childFolderCount: number;

	childFolders: NSArray<any>;

	displayName: string;

	messages: NSArray<any>;

	parentFolderId: string;

	totalItemCount: number;

	unreadItemCount: number;
}

declare class MSGraphMailFolderChildFoldersCollectionRequest extends MSCollectionRequest {

	addMailFolderWithCompletion(mailFolder: MSGraphMailFolder, completionHandler: (p1: MSGraphMailFolder, p2: NSError) => void): MSURLSessionDataTask;

	getWithCompletion(completionHandler: (p1: MSCollection, p2: MSGraphMailFolderChildFoldersCollectionRequest, p3: NSError) => void): MSURLSessionDataTask;
}

declare class MSGraphMailFolderChildFoldersCollectionRequestBuilder extends MSCollectionRequestBuilder {

	mailFolder(mailFolder: string): MSGraphMailFolderRequestBuilder;

	request(): MSGraphMailFolderChildFoldersCollectionRequest;

	requestWithOptions(options: NSArray<any>): MSGraphMailFolderChildFoldersCollectionRequest;
}

declare class MSGraphMailFolderCopyRequest extends MSRequest {

	/* readonly */ mutableRequest: NSMutableURLRequest;

	constructor(o: { destinationId: string; URL: NSURL; options: NSArray<any>; client: ODataBaseClient; });

	constructor(o: { URL: NSURL; client: ODataBaseClient; }); // inherited from MSRequest

	constructor(o: { URL: NSURL; options: NSArray<any>; client: ODataBaseClient; }); // inherited from MSRequest

	executeWithCompletion(completionHandler: (p1: MSGraphMailFolder, p2: NSError) => void): MSURLSessionDataTask;

	expand(expand: string): MSGraphMailFolderCopyRequest; // inherited from MSRequest

	ifMatch(ifMatch: string): MSGraphMailFolderCopyRequest; // inherited from MSRequest

	ifNoneMatch(ifNoneMatch: string): MSGraphMailFolderCopyRequest; // inherited from MSRequest

	nameConflict(nameConflict: MSNameConflict): MSGraphMailFolderCopyRequest; // inherited from MSRequest

	orderBy(orderBy: string): MSGraphMailFolderCopyRequest; // inherited from MSRequest

	select(select: string): MSGraphMailFolderCopyRequest; // inherited from MSRequest

	top(top: number): MSGraphMailFolderCopyRequest; // inherited from MSRequest
}

declare class MSGraphMailFolderCopyRequestBuilder extends MSRequestBuilder {

	constructor(o: { destinationId: string; URL: NSURL; client: ODataBaseClient; });

	constructor(o: { URL: NSURL; client: ODataBaseClient; }); // inherited from MSRequestBuilder

	request(): MSGraphMailFolderCopyRequest;

	requestWithOptions(options: NSArray<any>): MSGraphMailFolderCopyRequest;
}

declare class MSGraphMailFolderMessagesCollectionRequest extends MSCollectionRequest {

	addMessageWithCompletion(message: MSGraphMessage, completionHandler: (p1: MSGraphMessage, p2: NSError) => void): MSURLSessionDataTask;

	getWithCompletion(completionHandler: (p1: MSCollection, p2: MSGraphMailFolderMessagesCollectionRequest, p3: NSError) => void): MSURLSessionDataTask;
}

declare class MSGraphMailFolderMessagesCollectionRequestBuilder extends MSCollectionRequestBuilder {

	message(message: string): MSGraphMessageRequestBuilder;

	request(): MSGraphMailFolderMessagesCollectionRequest;

	requestWithOptions(options: NSArray<any>): MSGraphMailFolderMessagesCollectionRequest;
}

declare class MSGraphMailFolderMoveRequest extends MSRequest {

	/* readonly */ mutableRequest: NSMutableURLRequest;

	constructor(o: { destinationId: string; URL: NSURL; options: NSArray<any>; client: ODataBaseClient; });

	constructor(o: { URL: NSURL; client: ODataBaseClient; }); // inherited from MSRequest

	constructor(o: { URL: NSURL; options: NSArray<any>; client: ODataBaseClient; }); // inherited from MSRequest

	executeWithCompletion(completionHandler: (p1: MSGraphMailFolder, p2: NSError) => void): MSURLSessionDataTask;

	expand(expand: string): MSGraphMailFolderMoveRequest; // inherited from MSRequest

	ifMatch(ifMatch: string): MSGraphMailFolderMoveRequest; // inherited from MSRequest

	ifNoneMatch(ifNoneMatch: string): MSGraphMailFolderMoveRequest; // inherited from MSRequest

	nameConflict(nameConflict: MSNameConflict): MSGraphMailFolderMoveRequest; // inherited from MSRequest

	orderBy(orderBy: string): MSGraphMailFolderMoveRequest; // inherited from MSRequest

	select(select: string): MSGraphMailFolderMoveRequest; // inherited from MSRequest

	top(top: number): MSGraphMailFolderMoveRequest; // inherited from MSRequest
}

declare class MSGraphMailFolderMoveRequestBuilder extends MSRequestBuilder {

	constructor(o: { destinationId: string; URL: NSURL; client: ODataBaseClient; });

	constructor(o: { URL: NSURL; client: ODataBaseClient; }); // inherited from MSRequestBuilder

	request(): MSGraphMailFolderMoveRequest;

	requestWithOptions(options: NSArray<any>): MSGraphMailFolderMoveRequest;
}

declare class MSGraphMailFolderRequest extends MSRequest {

	constructor(o: { URL: NSURL; client: ODataBaseClient; }); // inherited from MSRequest

	constructor(o: { URL: NSURL; options: NSArray<any>; client: ODataBaseClient; }); // inherited from MSRequest

	deleteWithCompletion(completionHandler: (p1: NSError) => void): MSURLSessionDataTask;

	expand(expand: string): MSGraphMailFolderRequest; // inherited from MSRequest

	getWithCompletion(completionHandler: (p1: MSGraphMailFolder, p2: NSError) => void): MSURLSessionDataTask;

	ifMatch(ifMatch: string): MSGraphMailFolderRequest; // inherited from MSRequest

	ifNoneMatch(ifNoneMatch: string): MSGraphMailFolderRequest; // inherited from MSRequest

	nameConflict(nameConflict: MSNameConflict): MSGraphMailFolderRequest; // inherited from MSRequest

	orderBy(orderBy: string): MSGraphMailFolderRequest; // inherited from MSRequest

	select(select: string): MSGraphMailFolderRequest; // inherited from MSRequest

	top(top: number): MSGraphMailFolderRequest; // inherited from MSRequest

	updateWithCompletion(mailFolder: MSGraphMailFolder, completionHandler: (p1: MSGraphMailFolder, p2: NSError) => void): MSURLSessionDataTask;
}

declare class MSGraphMailFolderRequestBuilder extends MSGraphEntityRequestBuilder {

	childFolders(): MSGraphMailFolderChildFoldersCollectionRequestBuilder;

	copyWithDestinationId(destinationId: string): MSGraphMailFolderCopyRequestBuilder;

	messages(): MSGraphMailFolderMessagesCollectionRequestBuilder;

	moveWithDestinationId(destinationId: string): MSGraphMailFolderMoveRequestBuilder;

	request(): MSGraphMailFolderRequest;

	requestWithOptions(options: NSArray<any>): MSGraphMailFolderRequest;
}

declare class MSGraphMeetingMessageType extends NSObject {

	static UnknownEnumValue(): MSGraphMeetingMessageType;

	static alloc(): MSGraphMeetingMessageType; // inherited from NSObject

	static meetingAccepted(): MSGraphMeetingMessageType;

	static meetingCancelled(): MSGraphMeetingMessageType;

	static meetingDeclined(): MSGraphMeetingMessageType;

	static meetingMessageTypeWithEnumValue(val: MSGraphMeetingMessageTypeValue): MSGraphMeetingMessageType;

	static meetingRequest(): MSGraphMeetingMessageType;

	static meetingTenativelyAccepted(): MSGraphMeetingMessageType;

	static new(): MSGraphMeetingMessageType; // inherited from NSObject

	static none(): MSGraphMeetingMessageType;

	/* readonly */ enumValue: MSGraphMeetingMessageTypeValue;

	constructor(); // inherited from NSObject

	ms_toString(): string;

	self(): MSGraphMeetingMessageType; // inherited from NSObjectProtocol
}

declare const enum MSGraphMeetingMessageTypeValue {

	None = 0,

	MeetingRequest = 1,

	MeetingCancelled = 2,

	MeetingAccepted = 3,

	MeetingTenativelyAccepted = 4,

	MeetingDeclined = 5,

	EndOfEnum = 6
}

declare class MSGraphMessage extends MSGraphOutlookItem {

	attachments: NSArray<any>;

	bccRecipients: NSArray<any>;

	body: MSGraphItemBody;

	bodyPreview: string;

	ccRecipients: NSArray<any>;

	conversationId: string;

	from: MSGraphRecipient;

	hasAttachments: boolean;

	importance: MSGraphImportance;

	internetMessageId: string;

	isDeliveryReceiptRequested: boolean;

	isDraft: boolean;

	isRead: boolean;

	isReadReceiptRequested: boolean;

	parentFolderId: string;

	receivedDateTime: Date;

	replyTo: NSArray<any>;

	sender: MSGraphRecipient;

	sentDateTime: Date;

	subject: string;

	toRecipients: NSArray<any>;

	uniqueBody: MSGraphItemBody;

	webLink: string;
}

declare class MSGraphMessageAttachmentsCollectionRequest extends MSCollectionRequest {

	addAttachmentWithCompletion(attachment: MSGraphAttachment, completionHandler: (p1: MSGraphAttachment, p2: NSError) => void): MSURLSessionDataTask;

	getWithCompletion(completionHandler: (p1: MSCollection, p2: MSGraphMessageAttachmentsCollectionRequest, p3: NSError) => void): MSURLSessionDataTask;
}

declare class MSGraphMessageAttachmentsCollectionRequestBuilder extends MSCollectionRequestBuilder {

	attachment(attachment: string): MSGraphAttachmentRequestBuilder;

	request(): MSGraphMessageAttachmentsCollectionRequest;

	requestWithOptions(options: NSArray<any>): MSGraphMessageAttachmentsCollectionRequest;
}

declare class MSGraphMessageCopyRequest extends MSRequest {

	/* readonly */ mutableRequest: NSMutableURLRequest;

	constructor(o: { destinationId: string; URL: NSURL; options: NSArray<any>; client: ODataBaseClient; });

	constructor(o: { URL: NSURL; client: ODataBaseClient; }); // inherited from MSRequest

	constructor(o: { URL: NSURL; options: NSArray<any>; client: ODataBaseClient; }); // inherited from MSRequest

	executeWithCompletion(completionHandler: (p1: MSGraphMessage, p2: NSError) => void): MSURLSessionDataTask;

	expand(expand: string): MSGraphMessageCopyRequest; // inherited from MSRequest

	ifMatch(ifMatch: string): MSGraphMessageCopyRequest; // inherited from MSRequest

	ifNoneMatch(ifNoneMatch: string): MSGraphMessageCopyRequest; // inherited from MSRequest

	nameConflict(nameConflict: MSNameConflict): MSGraphMessageCopyRequest; // inherited from MSRequest

	orderBy(orderBy: string): MSGraphMessageCopyRequest; // inherited from MSRequest

	select(select: string): MSGraphMessageCopyRequest; // inherited from MSRequest

	top(top: number): MSGraphMessageCopyRequest; // inherited from MSRequest
}

declare class MSGraphMessageCopyRequestBuilder extends MSRequestBuilder {

	constructor(o: { destinationId: string; URL: NSURL; client: ODataBaseClient; });

	constructor(o: { URL: NSURL; client: ODataBaseClient; }); // inherited from MSRequestBuilder

	request(): MSGraphMessageCopyRequest;

	requestWithOptions(options: NSArray<any>): MSGraphMessageCopyRequest;
}

declare class MSGraphMessageCreateForwardRequest extends MSRequest {

	/* readonly */ mutableRequest: NSMutableURLRequest;

	constructor(o: { URL: NSURL; client: ODataBaseClient; }); // inherited from MSRequest

	constructor(o: { URL: NSURL; options: NSArray<any>; client: ODataBaseClient; }); // inherited from MSRequest

	executeWithCompletion(completionHandler: (p1: MSGraphMessage, p2: NSError) => void): MSURLSessionDataTask;

	expand(expand: string): MSGraphMessageCreateForwardRequest; // inherited from MSRequest

	ifMatch(ifMatch: string): MSGraphMessageCreateForwardRequest; // inherited from MSRequest

	ifNoneMatch(ifNoneMatch: string): MSGraphMessageCreateForwardRequest; // inherited from MSRequest

	nameConflict(nameConflict: MSNameConflict): MSGraphMessageCreateForwardRequest; // inherited from MSRequest

	orderBy(orderBy: string): MSGraphMessageCreateForwardRequest; // inherited from MSRequest

	select(select: string): MSGraphMessageCreateForwardRequest; // inherited from MSRequest

	top(top: number): MSGraphMessageCreateForwardRequest; // inherited from MSRequest
}

declare class MSGraphMessageCreateForwardRequestBuilder extends MSRequestBuilder {

	constructor(o: { URL: NSURL; client: ODataBaseClient; }); // inherited from MSRequestBuilder

	request(): MSGraphMessageCreateForwardRequest;

	requestWithOptions(options: NSArray<any>): MSGraphMessageCreateForwardRequest;
}

declare class MSGraphMessageCreateReplyAllRequest extends MSRequest {

	/* readonly */ mutableRequest: NSMutableURLRequest;

	constructor(o: { URL: NSURL; client: ODataBaseClient; }); // inherited from MSRequest

	constructor(o: { URL: NSURL; options: NSArray<any>; client: ODataBaseClient; }); // inherited from MSRequest

	executeWithCompletion(completionHandler: (p1: MSGraphMessage, p2: NSError) => void): MSURLSessionDataTask;

	expand(expand: string): MSGraphMessageCreateReplyAllRequest; // inherited from MSRequest

	ifMatch(ifMatch: string): MSGraphMessageCreateReplyAllRequest; // inherited from MSRequest

	ifNoneMatch(ifNoneMatch: string): MSGraphMessageCreateReplyAllRequest; // inherited from MSRequest

	nameConflict(nameConflict: MSNameConflict): MSGraphMessageCreateReplyAllRequest; // inherited from MSRequest

	orderBy(orderBy: string): MSGraphMessageCreateReplyAllRequest; // inherited from MSRequest

	select(select: string): MSGraphMessageCreateReplyAllRequest; // inherited from MSRequest

	top(top: number): MSGraphMessageCreateReplyAllRequest; // inherited from MSRequest
}

declare class MSGraphMessageCreateReplyAllRequestBuilder extends MSRequestBuilder {

	constructor(o: { URL: NSURL; client: ODataBaseClient; }); // inherited from MSRequestBuilder

	request(): MSGraphMessageCreateReplyAllRequest;

	requestWithOptions(options: NSArray<any>): MSGraphMessageCreateReplyAllRequest;
}

declare class MSGraphMessageCreateReplyRequest extends MSRequest {

	/* readonly */ mutableRequest: NSMutableURLRequest;

	constructor(o: { URL: NSURL; client: ODataBaseClient; }); // inherited from MSRequest

	constructor(o: { URL: NSURL; options: NSArray<any>; client: ODataBaseClient; }); // inherited from MSRequest

	executeWithCompletion(completionHandler: (p1: MSGraphMessage, p2: NSError) => void): MSURLSessionDataTask;

	expand(expand: string): MSGraphMessageCreateReplyRequest; // inherited from MSRequest

	ifMatch(ifMatch: string): MSGraphMessageCreateReplyRequest; // inherited from MSRequest

	ifNoneMatch(ifNoneMatch: string): MSGraphMessageCreateReplyRequest; // inherited from MSRequest

	nameConflict(nameConflict: MSNameConflict): MSGraphMessageCreateReplyRequest; // inherited from MSRequest

	orderBy(orderBy: string): MSGraphMessageCreateReplyRequest; // inherited from MSRequest

	select(select: string): MSGraphMessageCreateReplyRequest; // inherited from MSRequest

	top(top: number): MSGraphMessageCreateReplyRequest; // inherited from MSRequest
}

declare class MSGraphMessageCreateReplyRequestBuilder extends MSRequestBuilder {

	constructor(o: { URL: NSURL; client: ODataBaseClient; }); // inherited from MSRequestBuilder

	request(): MSGraphMessageCreateReplyRequest;

	requestWithOptions(options: NSArray<any>): MSGraphMessageCreateReplyRequest;
}

declare class MSGraphMessageForwardRequest extends MSRequest {

	/* readonly */ mutableRequest: NSMutableURLRequest;

	constructor(o: { comment: string; toRecipients: NSArray<any>; URL: NSURL; options: NSArray<any>; client: ODataBaseClient; });

	constructor(o: { URL: NSURL; client: ODataBaseClient; }); // inherited from MSRequest

	constructor(o: { URL: NSURL; options: NSArray<any>; client: ODataBaseClient; }); // inherited from MSRequest

	executeWithCompletion(completionHandler: (p1: NSDictionary<any, any>, p2: NSError) => void): MSURLSessionDataTask;

	expand(expand: string): MSGraphMessageForwardRequest; // inherited from MSRequest

	ifMatch(ifMatch: string): MSGraphMessageForwardRequest; // inherited from MSRequest

	ifNoneMatch(ifNoneMatch: string): MSGraphMessageForwardRequest; // inherited from MSRequest

	nameConflict(nameConflict: MSNameConflict): MSGraphMessageForwardRequest; // inherited from MSRequest

	orderBy(orderBy: string): MSGraphMessageForwardRequest; // inherited from MSRequest

	select(select: string): MSGraphMessageForwardRequest; // inherited from MSRequest

	top(top: number): MSGraphMessageForwardRequest; // inherited from MSRequest
}

declare class MSGraphMessageForwardRequestBuilder extends MSRequestBuilder {

	constructor(o: { comment: string; toRecipients: NSArray<any>; URL: NSURL; client: ODataBaseClient; });

	constructor(o: { URL: NSURL; client: ODataBaseClient; }); // inherited from MSRequestBuilder

	request(): MSGraphMessageForwardRequest;

	requestWithOptions(options: NSArray<any>): MSGraphMessageForwardRequest;
}

declare class MSGraphMessageMoveRequest extends MSRequest {

	/* readonly */ mutableRequest: NSMutableURLRequest;

	constructor(o: { destinationId: string; URL: NSURL; options: NSArray<any>; client: ODataBaseClient; });

	constructor(o: { URL: NSURL; client: ODataBaseClient; }); // inherited from MSRequest

	constructor(o: { URL: NSURL; options: NSArray<any>; client: ODataBaseClient; }); // inherited from MSRequest

	executeWithCompletion(completionHandler: (p1: MSGraphMessage, p2: NSError) => void): MSURLSessionDataTask;

	expand(expand: string): MSGraphMessageMoveRequest; // inherited from MSRequest

	ifMatch(ifMatch: string): MSGraphMessageMoveRequest; // inherited from MSRequest

	ifNoneMatch(ifNoneMatch: string): MSGraphMessageMoveRequest; // inherited from MSRequest

	nameConflict(nameConflict: MSNameConflict): MSGraphMessageMoveRequest; // inherited from MSRequest

	orderBy(orderBy: string): MSGraphMessageMoveRequest; // inherited from MSRequest

	select(select: string): MSGraphMessageMoveRequest; // inherited from MSRequest

	top(top: number): MSGraphMessageMoveRequest; // inherited from MSRequest
}

declare class MSGraphMessageMoveRequestBuilder extends MSRequestBuilder {

	constructor(o: { destinationId: string; URL: NSURL; client: ODataBaseClient; });

	constructor(o: { URL: NSURL; client: ODataBaseClient; }); // inherited from MSRequestBuilder

	request(): MSGraphMessageMoveRequest;

	requestWithOptions(options: NSArray<any>): MSGraphMessageMoveRequest;
}

declare class MSGraphMessageReplyAllRequest extends MSRequest {

	/* readonly */ mutableRequest: NSMutableURLRequest;

	constructor(o: { comment: string; URL: NSURL; options: NSArray<any>; client: ODataBaseClient; });

	constructor(o: { URL: NSURL; client: ODataBaseClient; }); // inherited from MSRequest

	constructor(o: { URL: NSURL; options: NSArray<any>; client: ODataBaseClient; }); // inherited from MSRequest

	executeWithCompletion(completionHandler: (p1: NSDictionary<any, any>, p2: NSError) => void): MSURLSessionDataTask;

	expand(expand: string): MSGraphMessageReplyAllRequest; // inherited from MSRequest

	ifMatch(ifMatch: string): MSGraphMessageReplyAllRequest; // inherited from MSRequest

	ifNoneMatch(ifNoneMatch: string): MSGraphMessageReplyAllRequest; // inherited from MSRequest

	nameConflict(nameConflict: MSNameConflict): MSGraphMessageReplyAllRequest; // inherited from MSRequest

	orderBy(orderBy: string): MSGraphMessageReplyAllRequest; // inherited from MSRequest

	select(select: string): MSGraphMessageReplyAllRequest; // inherited from MSRequest

	top(top: number): MSGraphMessageReplyAllRequest; // inherited from MSRequest
}

declare class MSGraphMessageReplyAllRequestBuilder extends MSRequestBuilder {

	constructor(o: { comment: string; URL: NSURL; client: ODataBaseClient; });

	constructor(o: { URL: NSURL; client: ODataBaseClient; }); // inherited from MSRequestBuilder

	request(): MSGraphMessageReplyAllRequest;

	requestWithOptions(options: NSArray<any>): MSGraphMessageReplyAllRequest;
}

declare class MSGraphMessageReplyRequest extends MSRequest {

	/* readonly */ mutableRequest: NSMutableURLRequest;

	constructor(o: { comment: string; URL: NSURL; options: NSArray<any>; client: ODataBaseClient; });

	constructor(o: { URL: NSURL; client: ODataBaseClient; }); // inherited from MSRequest

	constructor(o: { URL: NSURL; options: NSArray<any>; client: ODataBaseClient; }); // inherited from MSRequest

	executeWithCompletion(completionHandler: (p1: NSDictionary<any, any>, p2: NSError) => void): MSURLSessionDataTask;

	expand(expand: string): MSGraphMessageReplyRequest; // inherited from MSRequest

	ifMatch(ifMatch: string): MSGraphMessageReplyRequest; // inherited from MSRequest

	ifNoneMatch(ifNoneMatch: string): MSGraphMessageReplyRequest; // inherited from MSRequest

	nameConflict(nameConflict: MSNameConflict): MSGraphMessageReplyRequest; // inherited from MSRequest

	orderBy(orderBy: string): MSGraphMessageReplyRequest; // inherited from MSRequest

	select(select: string): MSGraphMessageReplyRequest; // inherited from MSRequest

	top(top: number): MSGraphMessageReplyRequest; // inherited from MSRequest
}

declare class MSGraphMessageReplyRequestBuilder extends MSRequestBuilder {

	constructor(o: { comment: string; URL: NSURL; client: ODataBaseClient; });

	constructor(o: { URL: NSURL; client: ODataBaseClient; }); // inherited from MSRequestBuilder

	request(): MSGraphMessageReplyRequest;

	requestWithOptions(options: NSArray<any>): MSGraphMessageReplyRequest;
}

declare class MSGraphMessageRequest extends MSRequest {

	constructor(o: { URL: NSURL; client: ODataBaseClient; }); // inherited from MSRequest

	constructor(o: { URL: NSURL; options: NSArray<any>; client: ODataBaseClient; }); // inherited from MSRequest

	deleteWithCompletion(completionHandler: (p1: NSError) => void): MSURLSessionDataTask;

	expand(expand: string): MSGraphMessageRequest; // inherited from MSRequest

	getWithCompletion(completionHandler: (p1: MSGraphMessage, p2: NSError) => void): MSURLSessionDataTask;

	ifMatch(ifMatch: string): MSGraphMessageRequest; // inherited from MSRequest

	ifNoneMatch(ifNoneMatch: string): MSGraphMessageRequest; // inherited from MSRequest

	nameConflict(nameConflict: MSNameConflict): MSGraphMessageRequest; // inherited from MSRequest

	orderBy(orderBy: string): MSGraphMessageRequest; // inherited from MSRequest

	select(select: string): MSGraphMessageRequest; // inherited from MSRequest

	top(top: number): MSGraphMessageRequest; // inherited from MSRequest

	updateWithCompletion(message: MSGraphMessage, completionHandler: (p1: MSGraphMessage, p2: NSError) => void): MSURLSessionDataTask;
}

declare class MSGraphMessageRequestBuilder extends MSGraphOutlookItemRequestBuilder {

	attachments(): MSGraphMessageAttachmentsCollectionRequestBuilder;

	copyWithDestinationId(destinationId: string): MSGraphMessageCopyRequestBuilder;

	createForward(): MSGraphMessageCreateForwardRequestBuilder;

	createReply(): MSGraphMessageCreateReplyRequestBuilder;

	createReplyAll(): MSGraphMessageCreateReplyAllRequestBuilder;

	forwardWithCommentToRecipients(comment: string, toRecipients: NSArray<any>): MSGraphMessageForwardRequestBuilder;

	moveWithDestinationId(destinationId: string): MSGraphMessageMoveRequestBuilder;

	replyAllWithComment(comment: string): MSGraphMessageReplyAllRequestBuilder;

	replyWithComment(comment: string): MSGraphMessageReplyRequestBuilder;

	request(): MSGraphMessageRequest;

	requestWithOptions(options: NSArray<any>): MSGraphMessageRequest;

	send(): MSGraphMessageSendRequestBuilder;
}

declare class MSGraphMessageSendRequest extends MSRequest {

	/* readonly */ mutableRequest: NSMutableURLRequest;

	constructor(o: { URL: NSURL; client: ODataBaseClient; }); // inherited from MSRequest

	constructor(o: { URL: NSURL; options: NSArray<any>; client: ODataBaseClient; }); // inherited from MSRequest

	executeWithCompletion(completionHandler: (p1: NSDictionary<any, any>, p2: NSError) => void): MSURLSessionDataTask;

	expand(expand: string): MSGraphMessageSendRequest; // inherited from MSRequest

	ifMatch(ifMatch: string): MSGraphMessageSendRequest; // inherited from MSRequest

	ifNoneMatch(ifNoneMatch: string): MSGraphMessageSendRequest; // inherited from MSRequest

	nameConflict(nameConflict: MSNameConflict): MSGraphMessageSendRequest; // inherited from MSRequest

	orderBy(orderBy: string): MSGraphMessageSendRequest; // inherited from MSRequest

	select(select: string): MSGraphMessageSendRequest; // inherited from MSRequest

	top(top: number): MSGraphMessageSendRequest; // inherited from MSRequest
}

declare class MSGraphMessageSendRequestBuilder extends MSRequestBuilder {

	constructor(o: { URL: NSURL; client: ODataBaseClient; }); // inherited from MSRequestBuilder

	request(): MSGraphMessageSendRequest;

	requestWithOptions(options: NSArray<any>): MSGraphMessageSendRequest;
}

declare class MSGraphOrganization extends MSGraphDirectoryObject {

	assignedPlans: NSArray<any>;

	businessPhones: NSArray<any>;

	city: string;

	country: string;

	countryLetterCode: string;

	displayName: string;

	marketingNotificationEmails: NSArray<any>;

	onPremisesLastSyncDateTime: Date;

	onPremisesSyncEnabled: boolean;

	postalCode: string;

	preferredLanguage: string;

	provisionedPlans: NSArray<any>;

	securityComplianceNotificationMails: NSArray<any>;

	securityComplianceNotificationPhones: NSArray<any>;

	state: string;

	street: string;

	technicalNotificationMails: NSArray<any>;

	verifiedDomains: NSArray<any>;
}

declare class MSGraphOrganizationCollectionRequest extends MSCollectionRequest {

	addOrganizationWithCompletion(organization: MSGraphOrganization, completionHandler: (p1: MSGraphOrganization, p2: NSError) => void): MSURLSessionDataTask;

	getWithCompletion(completionHandler: (p1: MSCollection, p2: MSGraphOrganizationCollectionRequest, p3: NSError) => void): MSURLSessionDataTask;
}

declare class MSGraphOrganizationCollectionRequestBuilder extends MSCollectionRequestBuilder {

	organization(organization: string): MSGraphOrganizationRequestBuilder;

	request(): MSGraphOrganizationCollectionRequest;

	requestWithOptions(options: NSArray<any>): MSGraphOrganizationCollectionRequest;
}

declare class MSGraphOrganizationRequest extends MSRequest {

	constructor(o: { URL: NSURL; client: ODataBaseClient; }); // inherited from MSRequest

	constructor(o: { URL: NSURL; options: NSArray<any>; client: ODataBaseClient; }); // inherited from MSRequest

	deleteWithCompletion(completionHandler: (p1: NSError) => void): MSURLSessionDataTask;

	expand(expand: string): MSGraphOrganizationRequest; // inherited from MSRequest

	getWithCompletion(completionHandler: (p1: MSGraphOrganization, p2: NSError) => void): MSURLSessionDataTask;

	ifMatch(ifMatch: string): MSGraphOrganizationRequest; // inherited from MSRequest

	ifNoneMatch(ifNoneMatch: string): MSGraphOrganizationRequest; // inherited from MSRequest

	nameConflict(nameConflict: MSNameConflict): MSGraphOrganizationRequest; // inherited from MSRequest

	orderBy(orderBy: string): MSGraphOrganizationRequest; // inherited from MSRequest

	select(select: string): MSGraphOrganizationRequest; // inherited from MSRequest

	top(top: number): MSGraphOrganizationRequest; // inherited from MSRequest

	updateWithCompletion(organization: MSGraphOrganization, completionHandler: (p1: MSGraphOrganization, p2: NSError) => void): MSURLSessionDataTask;
}

declare class MSGraphOrganizationRequestBuilder extends MSGraphDirectoryObjectRequestBuilder {

	request(): MSGraphOrganizationRequest;

	requestWithOptions(options: NSArray<any>): MSGraphOrganizationRequest;
}

declare class MSGraphOutlookItem extends MSGraphEntity {

	categories: NSArray<any>;

	changeKey: string;

	createdDateTime: Date;

	lastModifiedDateTime: Date;
}

declare class MSGraphOutlookItemRequest extends MSRequest {

	constructor(o: { URL: NSURL; client: ODataBaseClient; }); // inherited from MSRequest

	constructor(o: { URL: NSURL; options: NSArray<any>; client: ODataBaseClient; }); // inherited from MSRequest

	deleteWithCompletion(completionHandler: (p1: NSError) => void): MSURLSessionDataTask;

	expand(expand: string): MSGraphOutlookItemRequest; // inherited from MSRequest

	getWithCompletion(completionHandler: (p1: MSGraphOutlookItem, p2: NSError) => void): MSURLSessionDataTask;

	ifMatch(ifMatch: string): MSGraphOutlookItemRequest; // inherited from MSRequest

	ifNoneMatch(ifNoneMatch: string): MSGraphOutlookItemRequest; // inherited from MSRequest

	nameConflict(nameConflict: MSNameConflict): MSGraphOutlookItemRequest; // inherited from MSRequest

	orderBy(orderBy: string): MSGraphOutlookItemRequest; // inherited from MSRequest

	select(select: string): MSGraphOutlookItemRequest; // inherited from MSRequest

	top(top: number): MSGraphOutlookItemRequest; // inherited from MSRequest

	updateWithCompletion(outlookItem: MSGraphOutlookItem, completionHandler: (p1: MSGraphOutlookItem, p2: NSError) => void): MSURLSessionDataTask;
}

declare class MSGraphOutlookItemRequestBuilder extends MSGraphEntityRequestBuilder {

	request(): MSGraphOutlookItemRequest;

	requestWithOptions(options: NSArray<any>): MSGraphOutlookItemRequest;
}

declare class MSGraphPackage extends MSObject {

	type: string;

	constructor(o: { dictionary: NSDictionary<any, any>; }); // inherited from MSObject
}

declare class MSGraphPasswordProfile extends MSObject {

	forceChangePasswordNextSignIn: boolean;

	password: string;

	constructor(o: { dictionary: NSDictionary<any, any>; }); // inherited from MSObject
}

declare class MSGraphPatternedRecurrence extends MSObject {

	pattern: MSGraphRecurrencePattern;

	range: MSGraphRecurrenceRange;

	constructor(o: { dictionary: NSDictionary<any, any>; }); // inherited from MSObject
}

declare class MSGraphPermission extends MSGraphEntity {

	grantedTo: MSGraphIdentitySet;

	inheritedFrom: MSGraphItemReference;

	invitation: MSGraphSharingInvitation;

	link: MSGraphSharingLink;

	roles: NSArray<any>;

	shareId: string;
}

declare class MSGraphPermissionRequest extends MSRequest {

	constructor(o: { URL: NSURL; client: ODataBaseClient; }); // inherited from MSRequest

	constructor(o: { URL: NSURL; options: NSArray<any>; client: ODataBaseClient; }); // inherited from MSRequest

	deleteWithCompletion(completionHandler: (p1: NSError) => void): MSURLSessionDataTask;

	expand(expand: string): MSGraphPermissionRequest; // inherited from MSRequest

	getWithCompletion(completionHandler: (p1: MSGraphPermission, p2: NSError) => void): MSURLSessionDataTask;

	ifMatch(ifMatch: string): MSGraphPermissionRequest; // inherited from MSRequest

	ifNoneMatch(ifNoneMatch: string): MSGraphPermissionRequest; // inherited from MSRequest

	nameConflict(nameConflict: MSNameConflict): MSGraphPermissionRequest; // inherited from MSRequest

	orderBy(orderBy: string): MSGraphPermissionRequest; // inherited from MSRequest

	select(select: string): MSGraphPermissionRequest; // inherited from MSRequest

	top(top: number): MSGraphPermissionRequest; // inherited from MSRequest

	updateWithCompletion(permission: MSGraphPermission, completionHandler: (p1: MSGraphPermission, p2: NSError) => void): MSURLSessionDataTask;
}

declare class MSGraphPermissionRequestBuilder extends MSGraphEntityRequestBuilder {

	request(): MSGraphPermissionRequest;

	requestWithOptions(options: NSArray<any>): MSGraphPermissionRequest;
}

declare class MSGraphPhoto extends MSObject {

	cameraMake: string;

	cameraModel: string;

	exposureDenominator: number;

	exposureNumerator: number;

	fNumber: number;

	focalLength: number;

	iso: number;

	takenDateTime: Date;

	constructor(o: { dictionary: NSDictionary<any, any>; }); // inherited from MSObject
}

declare class MSGraphPhysicalAddress extends MSObject {

	city: string;

	countryOrRegion: string;

	postalCode: string;

	state: string;

	street: string;

	constructor(o: { dictionary: NSDictionary<any, any>; }); // inherited from MSObject
}

declare class MSGraphPost extends MSGraphOutlookItem {

	attachments: NSArray<any>;

	body: MSGraphItemBody;

	conversationId: string;

	conversationThreadId: string;

	from: MSGraphRecipient;

	hasAttachments: boolean;

	inReplyTo: MSGraphPost;

	newParticipants: NSArray<any>;

	receivedDateTime: Date;

	sender: MSGraphRecipient;
}

declare class MSGraphPostAttachmentsCollectionRequest extends MSCollectionRequest {

	addAttachmentWithCompletion(attachment: MSGraphAttachment, completionHandler: (p1: MSGraphAttachment, p2: NSError) => void): MSURLSessionDataTask;

	getWithCompletion(completionHandler: (p1: MSCollection, p2: MSGraphPostAttachmentsCollectionRequest, p3: NSError) => void): MSURLSessionDataTask;
}

declare class MSGraphPostAttachmentsCollectionRequestBuilder extends MSCollectionRequestBuilder {

	attachment(attachment: string): MSGraphAttachmentRequestBuilder;

	request(): MSGraphPostAttachmentsCollectionRequest;

	requestWithOptions(options: NSArray<any>): MSGraphPostAttachmentsCollectionRequest;
}

declare class MSGraphPostForwardRequest extends MSRequest {

	/* readonly */ mutableRequest: NSMutableURLRequest;

	constructor(o: { comment: string; toRecipients: NSArray<any>; URL: NSURL; options: NSArray<any>; client: ODataBaseClient; });

	constructor(o: { URL: NSURL; client: ODataBaseClient; }); // inherited from MSRequest

	constructor(o: { URL: NSURL; options: NSArray<any>; client: ODataBaseClient; }); // inherited from MSRequest

	executeWithCompletion(completionHandler: (p1: NSDictionary<any, any>, p2: NSError) => void): MSURLSessionDataTask;

	expand(expand: string): MSGraphPostForwardRequest; // inherited from MSRequest

	ifMatch(ifMatch: string): MSGraphPostForwardRequest; // inherited from MSRequest

	ifNoneMatch(ifNoneMatch: string): MSGraphPostForwardRequest; // inherited from MSRequest

	nameConflict(nameConflict: MSNameConflict): MSGraphPostForwardRequest; // inherited from MSRequest

	orderBy(orderBy: string): MSGraphPostForwardRequest; // inherited from MSRequest

	select(select: string): MSGraphPostForwardRequest; // inherited from MSRequest

	top(top: number): MSGraphPostForwardRequest; // inherited from MSRequest
}

declare class MSGraphPostForwardRequestBuilder extends MSRequestBuilder {

	constructor(o: { comment: string; toRecipients: NSArray<any>; URL: NSURL; client: ODataBaseClient; });

	constructor(o: { URL: NSURL; client: ODataBaseClient; }); // inherited from MSRequestBuilder

	request(): MSGraphPostForwardRequest;

	requestWithOptions(options: NSArray<any>): MSGraphPostForwardRequest;
}

declare class MSGraphPostReplyRequest extends MSRequest {

	/* readonly */ mutableRequest: NSMutableURLRequest;

	constructor(o: { post: MSGraphPost; URL: NSURL; options: NSArray<any>; client: ODataBaseClient; });

	constructor(o: { URL: NSURL; client: ODataBaseClient; }); // inherited from MSRequest

	constructor(o: { URL: NSURL; options: NSArray<any>; client: ODataBaseClient; }); // inherited from MSRequest

	executeWithCompletion(completionHandler: (p1: NSDictionary<any, any>, p2: NSError) => void): MSURLSessionDataTask;

	expand(expand: string): MSGraphPostReplyRequest; // inherited from MSRequest

	ifMatch(ifMatch: string): MSGraphPostReplyRequest; // inherited from MSRequest

	ifNoneMatch(ifNoneMatch: string): MSGraphPostReplyRequest; // inherited from MSRequest

	nameConflict(nameConflict: MSNameConflict): MSGraphPostReplyRequest; // inherited from MSRequest

	orderBy(orderBy: string): MSGraphPostReplyRequest; // inherited from MSRequest

	select(select: string): MSGraphPostReplyRequest; // inherited from MSRequest

	top(top: number): MSGraphPostReplyRequest; // inherited from MSRequest
}

declare class MSGraphPostReplyRequestBuilder extends MSRequestBuilder {

	constructor(o: { post: MSGraphPost; URL: NSURL; client: ODataBaseClient; });

	constructor(o: { URL: NSURL; client: ODataBaseClient; }); // inherited from MSRequestBuilder

	request(): MSGraphPostReplyRequest;

	requestWithOptions(options: NSArray<any>): MSGraphPostReplyRequest;
}

declare class MSGraphPostRequest extends MSRequest {

	constructor(o: { URL: NSURL; client: ODataBaseClient; }); // inherited from MSRequest

	constructor(o: { URL: NSURL; options: NSArray<any>; client: ODataBaseClient; }); // inherited from MSRequest

	deleteWithCompletion(completionHandler: (p1: NSError) => void): MSURLSessionDataTask;

	expand(expand: string): MSGraphPostRequest; // inherited from MSRequest

	getWithCompletion(completionHandler: (p1: MSGraphPost, p2: NSError) => void): MSURLSessionDataTask;

	ifMatch(ifMatch: string): MSGraphPostRequest; // inherited from MSRequest

	ifNoneMatch(ifNoneMatch: string): MSGraphPostRequest; // inherited from MSRequest

	nameConflict(nameConflict: MSNameConflict): MSGraphPostRequest; // inherited from MSRequest

	orderBy(orderBy: string): MSGraphPostRequest; // inherited from MSRequest

	select(select: string): MSGraphPostRequest; // inherited from MSRequest

	top(top: number): MSGraphPostRequest; // inherited from MSRequest

	updateWithCompletion(post: MSGraphPost, completionHandler: (p1: MSGraphPost, p2: NSError) => void): MSURLSessionDataTask;
}

declare class MSGraphPostRequestBuilder extends MSGraphOutlookItemRequestBuilder {

	attachments(): MSGraphPostAttachmentsCollectionRequestBuilder;

	forwardWithCommentToRecipients(comment: string, toRecipients: NSArray<any>): MSGraphPostForwardRequestBuilder;

	inReplyTo(): MSGraphPostRequestBuilder;

	replyWithPost(post: MSGraphPost): MSGraphPostReplyRequestBuilder;

	request(): MSGraphPostRequest;

	requestWithOptions(options: NSArray<any>): MSGraphPostRequest;
}

declare class MSGraphProfilePhoto extends MSGraphEntity {

	height: number;

	width: number;
}

declare class MSGraphProfilePhotoRequest extends MSRequest {

	constructor(o: { URL: NSURL; client: ODataBaseClient; }); // inherited from MSRequest

	constructor(o: { URL: NSURL; options: NSArray<any>; client: ODataBaseClient; }); // inherited from MSRequest

	deleteWithCompletion(completionHandler: (p1: NSError) => void): MSURLSessionDataTask;

	expand(expand: string): MSGraphProfilePhotoRequest; // inherited from MSRequest

	getWithCompletion(completionHandler: (p1: MSGraphProfilePhoto, p2: NSError) => void): MSURLSessionDataTask;

	ifMatch(ifMatch: string): MSGraphProfilePhotoRequest; // inherited from MSRequest

	ifNoneMatch(ifNoneMatch: string): MSGraphProfilePhotoRequest; // inherited from MSRequest

	nameConflict(nameConflict: MSNameConflict): MSGraphProfilePhotoRequest; // inherited from MSRequest

	orderBy(orderBy: string): MSGraphProfilePhotoRequest; // inherited from MSRequest

	select(select: string): MSGraphProfilePhotoRequest; // inherited from MSRequest

	top(top: number): MSGraphProfilePhotoRequest; // inherited from MSRequest

	updateWithCompletion(profilePhoto: MSGraphProfilePhoto, completionHandler: (p1: MSGraphProfilePhoto, p2: NSError) => void): MSURLSessionDataTask;
}

declare class MSGraphProfilePhotoRequestBuilder extends MSGraphEntityRequestBuilder {

	request(): MSGraphProfilePhotoRequest;

	requestWithOptions(options: NSArray<any>): MSGraphProfilePhotoRequest;
}

declare class MSGraphProfilePhotoStreamRequest extends MSRequest {

	constructor(o: { URL: NSURL; client: ODataBaseClient; }); // inherited from MSRequest

	constructor(o: { URL: NSURL; options: NSArray<any>; client: ODataBaseClient; }); // inherited from MSRequest

	downloadWithCompletion(completionHandler: (p1: NSURL, p2: NSURLResponse, p3: NSError) => void): MSURLSessionDownloadTask;

	expand(expand: string): MSGraphProfilePhotoStreamRequest; // inherited from MSRequest

	ifMatch(ifMatch: string): MSGraphProfilePhotoStreamRequest; // inherited from MSRequest

	ifNoneMatch(ifNoneMatch: string): MSGraphProfilePhotoStreamRequest; // inherited from MSRequest

	nameConflict(nameConflict: MSNameConflict): MSGraphProfilePhotoStreamRequest; // inherited from MSRequest

	orderBy(orderBy: string): MSGraphProfilePhotoStreamRequest; // inherited from MSRequest

	select(select: string): MSGraphProfilePhotoStreamRequest; // inherited from MSRequest

	top(top: number): MSGraphProfilePhotoStreamRequest; // inherited from MSRequest

	uploadFromDataCompletion(data: NSData, completionHandler: (p1: MSGraphProfilePhoto, p2: NSError) => void): MSURLSessionUploadTask;

	uploadFromFileCompletion(fileUrl: NSURL, completionHandler: (p1: MSGraphProfilePhoto, p2: NSError) => void): MSURLSessionUploadTask;
}

declare class MSGraphProvisionedPlan extends MSObject {

	capabilityStatus: string;

	provisioningStatus: string;

	service: string;

	constructor(o: { dictionary: NSDictionary<any, any>; }); // inherited from MSObject
}

declare class MSGraphQuota extends MSObject {

	deleted: number;

	remaining: number;

	state: string;

	total: number;

	used: number;

	constructor(o: { dictionary: NSDictionary<any, any>; }); // inherited from MSObject
}

declare class MSGraphRecipient extends MSObject {

	emailAddress: MSGraphEmailAddress;

	constructor(o: { dictionary: NSDictionary<any, any>; }); // inherited from MSObject
}

declare class MSGraphRecurrencePattern extends MSObject {

	dayOfMonth: number;

	daysOfWeek: NSArray<any>;

	firstDayOfWeek: MSGraphDayOfWeek;

	index: MSGraphWeekIndex;

	interval: number;

	month: number;

	type: MSGraphRecurrencePatternType;

	constructor(o: { dictionary: NSDictionary<any, any>; }); // inherited from MSObject
}

declare class MSGraphRecurrencePatternType extends NSObject {

	static UnknownEnumValue(): MSGraphRecurrencePatternType;

	static absoluteMonthly(): MSGraphRecurrencePatternType;

	static absoluteYearly(): MSGraphRecurrencePatternType;

	static alloc(): MSGraphRecurrencePatternType; // inherited from NSObject

	static daily(): MSGraphRecurrencePatternType;

	static new(): MSGraphRecurrencePatternType; // inherited from NSObject

	static recurrencePatternTypeWithEnumValue(val: MSGraphRecurrencePatternTypeValue): MSGraphRecurrencePatternType;

	static relativeMonthly(): MSGraphRecurrencePatternType;

	static relativeYearly(): MSGraphRecurrencePatternType;

	static weekly(): MSGraphRecurrencePatternType;

	/* readonly */ enumValue: MSGraphRecurrencePatternTypeValue;

	constructor(); // inherited from NSObject

	ms_toString(): string;

	self(): MSGraphRecurrencePatternType; // inherited from NSObjectProtocol
}

declare const enum MSGraphRecurrencePatternTypeValue {

	Daily = 0,

	Weekly = 1,

	AbsoluteMonthly = 2,

	RelativeMonthly = 3,

	AbsoluteYearly = 4,

	RelativeYearly = 5,

	EndOfEnum = 6
}

declare class MSGraphRecurrenceRange extends MSObject {

	endDate: MSDate;

	numberOfOccurrences: number;

	recurrenceTimeZone: string;

	startDate: MSDate;

	type: MSGraphRecurrenceRangeType;

	constructor(o: { dictionary: NSDictionary<any, any>; }); // inherited from MSObject
}

declare class MSGraphRecurrenceRangeType extends NSObject {

	static UnknownEnumValue(): MSGraphRecurrenceRangeType;

	static alloc(): MSGraphRecurrenceRangeType; // inherited from NSObject

	static endDate(): MSGraphRecurrenceRangeType;

	static new(): MSGraphRecurrenceRangeType; // inherited from NSObject

	static noEnd(): MSGraphRecurrenceRangeType;

	static numbered(): MSGraphRecurrenceRangeType;

	static recurrenceRangeTypeWithEnumValue(val: MSGraphRecurrenceRangeTypeValue): MSGraphRecurrenceRangeType;

	/* readonly */ enumValue: MSGraphRecurrenceRangeTypeValue;

	constructor(); // inherited from NSObject

	ms_toString(): string;

	self(): MSGraphRecurrenceRangeType; // inherited from NSObjectProtocol
}

declare const enum MSGraphRecurrenceRangeTypeValue {

	EndDate = 0,

	NoEnd = 1,

	Numbered = 2,

	EndOfEnum = 3
}

declare class MSGraphReferenceAttachment extends MSGraphAttachment {
}

declare class MSGraphReferenceAttachmentRequest extends MSRequest {

	constructor(o: { URL: NSURL; client: ODataBaseClient; }); // inherited from MSRequest

	constructor(o: { URL: NSURL; options: NSArray<any>; client: ODataBaseClient; }); // inherited from MSRequest

	deleteWithCompletion(completionHandler: (p1: NSError) => void): MSURLSessionDataTask;

	expand(expand: string): MSGraphReferenceAttachmentRequest; // inherited from MSRequest

	getWithCompletion(completionHandler: (p1: MSGraphReferenceAttachment, p2: NSError) => void): MSURLSessionDataTask;

	ifMatch(ifMatch: string): MSGraphReferenceAttachmentRequest; // inherited from MSRequest

	ifNoneMatch(ifNoneMatch: string): MSGraphReferenceAttachmentRequest; // inherited from MSRequest

	nameConflict(nameConflict: MSNameConflict): MSGraphReferenceAttachmentRequest; // inherited from MSRequest

	orderBy(orderBy: string): MSGraphReferenceAttachmentRequest; // inherited from MSRequest

	select(select: string): MSGraphReferenceAttachmentRequest; // inherited from MSRequest

	top(top: number): MSGraphReferenceAttachmentRequest; // inherited from MSRequest

	updateWithCompletion(referenceAttachment: MSGraphReferenceAttachment, completionHandler: (p1: MSGraphReferenceAttachment, p2: NSError) => void): MSURLSessionDataTask;
}

declare class MSGraphReferenceAttachmentRequestBuilder extends MSGraphAttachmentRequestBuilder {

	request(): MSGraphReferenceAttachmentRequest;

	requestWithOptions(options: NSArray<any>): MSGraphReferenceAttachmentRequest;
}

declare class MSGraphReminder extends MSObject {

	changeKey: string;

	eventEndTime: MSGraphDateTimeTimeZone;

	eventId: string;

	eventLocation: MSGraphLocation;

	eventStartTime: MSGraphDateTimeTimeZone;

	eventSubject: string;

	eventWebLink: string;

	reminderFireTime: MSGraphDateTimeTimeZone;

	constructor(o: { dictionary: NSDictionary<any, any>; }); // inherited from MSObject
}

declare class MSGraphRemoteItem extends MSObject {

	file: MSGraphFile;

	fileSystemInfo: MSGraphFileSystemInfo;

	folder: MSGraphFolder;

	name: string;

	parentReference: MSGraphItemReference;

	remoteItemId: string;

	size: number;

	constructor(o: { dictionary: NSDictionary<any, any>; }); // inherited from MSObject
}

declare class MSGraphResponseStatus extends MSObject {

	response: MSGraphResponseType;

	time: Date;

	constructor(o: { dictionary: NSDictionary<any, any>; }); // inherited from MSObject
}

declare class MSGraphResponseType extends NSObject {

	static UnknownEnumValue(): MSGraphResponseType;

	static accepted(): MSGraphResponseType;

	static alloc(): MSGraphResponseType; // inherited from NSObject

	static declined(): MSGraphResponseType;

	static new(): MSGraphResponseType; // inherited from NSObject

	static none(): MSGraphResponseType;

	static notResponded(): MSGraphResponseType;

	static organizer(): MSGraphResponseType;

	static responseTypeWithEnumValue(val: MSGraphResponseTypeValue): MSGraphResponseType;

	static tentativelyAccepted(): MSGraphResponseType;

	/* readonly */ enumValue: MSGraphResponseTypeValue;

	constructor(); // inherited from NSObject

	ms_toString(): string;

	self(): MSGraphResponseType; // inherited from NSObjectProtocol
}

declare const enum MSGraphResponseTypeValue {

	None = 0,

	Organizer = 1,

	TentativelyAccepted = 2,

	Accepted = 3,

	Declined = 4,

	NotResponded = 5,

	EndOfEnum = 6
}

declare var MSGraphSDKVersionNumber: number;

declare var MSGraphSDKVersionString: interop.Reference<number>;

declare var MSGraphSdkVersion: string;

declare var MSGraphSdkVersionHeaderPrefix: string;

declare class MSGraphSearchResult extends MSObject {

	onClickTelemetryUrl: string;

	constructor(o: { dictionary: NSDictionary<any, any>; }); // inherited from MSObject
}

declare class MSGraphSensitivity extends NSObject {

	static UnknownEnumValue(): MSGraphSensitivity;

	static alloc(): MSGraphSensitivity; // inherited from NSObject

	static confidential(): MSGraphSensitivity;

	static new(): MSGraphSensitivity; // inherited from NSObject

	static normal(): MSGraphSensitivity;

	static personal(): MSGraphSensitivity;

	static private(): MSGraphSensitivity;

	static sensitivityWithEnumValue(val: MSGraphSensitivityValue): MSGraphSensitivity;

	/* readonly */ enumValue: MSGraphSensitivityValue;

	constructor(); // inherited from NSObject

	ms_toString(): string;

	self(): MSGraphSensitivity; // inherited from NSObjectProtocol
}

declare const enum MSGraphSensitivityValue {

	Normal = 0,

	Personal = 1,

	Private = 2,

	Confidential = 3,

	EndOfEnum = 4
}

declare class MSGraphServicePlanInfo extends MSObject {

	appliesTo: string;

	provisioningStatus: string;

	servicePlanId: string;

	servicePlanName: string;

	constructor(o: { dictionary: NSDictionary<any, any>; }); // inherited from MSObject
}

declare class MSGraphShared extends MSObject {

	owner: MSGraphIdentitySet;

	scope: string;

	constructor(o: { dictionary: NSDictionary<any, any>; }); // inherited from MSObject
}

declare class MSGraphSharingInvitation extends MSObject {

	email: string;

	invitedBy: MSGraphIdentitySet;

	redeemedBy: string;

	signInRequired: boolean;

	constructor(o: { dictionary: NSDictionary<any, any>; }); // inherited from MSObject
}

declare class MSGraphSharingLink extends MSObject {

	application: MSGraphIdentity;

	type: string;

	webUrl: string;

	constructor(o: { dictionary: NSDictionary<any, any>; }); // inherited from MSObject
}

declare class MSGraphSpecialFolder extends MSObject {

	name: string;

	constructor(o: { dictionary: NSDictionary<any, any>; }); // inherited from MSObject
}

declare class MSGraphSubscribedSku extends MSGraphEntity {

	appliesTo: string;

	capabilityStatus: string;

	consumedUnits: number;

	prepaidUnits: MSGraphLicenseUnitsDetail;

	servicePlans: NSArray<any>;

	skuId: string;

	skuPartNumber: string;
}

declare class MSGraphSubscribedSkuRequest extends MSRequest {

	constructor(o: { URL: NSURL; client: ODataBaseClient; }); // inherited from MSRequest

	constructor(o: { URL: NSURL; options: NSArray<any>; client: ODataBaseClient; }); // inherited from MSRequest

	deleteWithCompletion(completionHandler: (p1: NSError) => void): MSURLSessionDataTask;

	expand(expand: string): MSGraphSubscribedSkuRequest; // inherited from MSRequest

	getWithCompletion(completionHandler: (p1: MSGraphSubscribedSku, p2: NSError) => void): MSURLSessionDataTask;

	ifMatch(ifMatch: string): MSGraphSubscribedSkuRequest; // inherited from MSRequest

	ifNoneMatch(ifNoneMatch: string): MSGraphSubscribedSkuRequest; // inherited from MSRequest

	nameConflict(nameConflict: MSNameConflict): MSGraphSubscribedSkuRequest; // inherited from MSRequest

	orderBy(orderBy: string): MSGraphSubscribedSkuRequest; // inherited from MSRequest

	select(select: string): MSGraphSubscribedSkuRequest; // inherited from MSRequest

	top(top: number): MSGraphSubscribedSkuRequest; // inherited from MSRequest

	updateWithCompletion(subscribedSku: MSGraphSubscribedSku, completionHandler: (p1: MSGraphSubscribedSku, p2: NSError) => void): MSURLSessionDataTask;
}

declare class MSGraphSubscribedSkuRequestBuilder extends MSGraphEntityRequestBuilder {

	request(): MSGraphSubscribedSkuRequest;

	requestWithOptions(options: NSArray<any>): MSGraphSubscribedSkuRequest;
}

declare class MSGraphSubscribedSkusCollectionRequest extends MSCollectionRequest {

	addSubscribedSkuWithCompletion(subscribedSku: MSGraphSubscribedSku, completionHandler: (p1: MSGraphSubscribedSku, p2: NSError) => void): MSURLSessionDataTask;

	getWithCompletion(completionHandler: (p1: MSCollection, p2: MSGraphSubscribedSkusCollectionRequest, p3: NSError) => void): MSURLSessionDataTask;
}

declare class MSGraphSubscribedSkusCollectionRequestBuilder extends MSCollectionRequestBuilder {

	request(): MSGraphSubscribedSkusCollectionRequest;

	requestWithOptions(options: NSArray<any>): MSGraphSubscribedSkusCollectionRequest;

	subscribedSku(subscribedSku: string): MSGraphSubscribedSkuRequestBuilder;
}

declare class MSGraphThumbnail extends MSObject {

	height: number;

	url: string;

	width: number;

	constructor(o: { dictionary: NSDictionary<any, any>; }); // inherited from MSObject
}

declare class MSGraphThumbnailContentRequest extends MSRequest {

	constructor(o: { URL: NSURL; client: ODataBaseClient; }); // inherited from MSRequest

	constructor(o: { URL: NSURL; options: NSArray<any>; client: ODataBaseClient; }); // inherited from MSRequest

	downloadWithCompletion(completionHandler: (p1: NSURL, p2: NSURLResponse, p3: NSError) => void): MSURLSessionDownloadTask;

	expand(expand: string): MSGraphThumbnailContentRequest; // inherited from MSRequest

	ifMatch(ifMatch: string): MSGraphThumbnailContentRequest; // inherited from MSRequest

	ifNoneMatch(ifNoneMatch: string): MSGraphThumbnailContentRequest; // inherited from MSRequest

	nameConflict(nameConflict: MSNameConflict): MSGraphThumbnailContentRequest; // inherited from MSRequest

	orderBy(orderBy: string): MSGraphThumbnailContentRequest; // inherited from MSRequest

	select(select: string): MSGraphThumbnailContentRequest; // inherited from MSRequest

	top(top: number): MSGraphThumbnailContentRequest; // inherited from MSRequest

	uploadFromDataCompletion(data: NSData, completionHandler: (p1: MSGraphThumbnail, p2: NSError) => void): MSURLSessionUploadTask;

	uploadFromFileCompletion(fileUrl: NSURL, completionHandler: (p1: MSGraphThumbnail, p2: NSError) => void): MSURLSessionUploadTask;
}

declare class MSGraphThumbnailRequest extends MSRequest {

	constructor(o: { URL: NSURL; client: ODataBaseClient; }); // inherited from MSRequest

	constructor(o: { URL: NSURL; options: NSArray<any>; client: ODataBaseClient; }); // inherited from MSRequest

	deleteWithCompletion(completionHandler: (p1: NSError) => void): MSURLSessionDataTask;

	expand(expand: string): MSGraphThumbnailRequest; // inherited from MSRequest

	getWithCompletion(completionHandler: (p1: MSGraphThumbnail, p2: NSError) => void): MSURLSessionDataTask;

	ifMatch(ifMatch: string): MSGraphThumbnailRequest; // inherited from MSRequest

	ifNoneMatch(ifNoneMatch: string): MSGraphThumbnailRequest; // inherited from MSRequest

	nameConflict(nameConflict: MSNameConflict): MSGraphThumbnailRequest; // inherited from MSRequest

	orderBy(orderBy: string): MSGraphThumbnailRequest; // inherited from MSRequest

	select(select: string): MSGraphThumbnailRequest; // inherited from MSRequest

	top(top: number): MSGraphThumbnailRequest; // inherited from MSRequest

	updateWithCompletion(thumbnail: MSGraphThumbnail, completionHandler: (p1: MSGraphThumbnail, p2: NSError) => void): MSURLSessionDataTask;
}

declare class MSGraphThumbnailRequestBuilder extends MSRequestBuilder {

	constructor(o: { URL: NSURL; client: ODataBaseClient; }); // inherited from MSRequestBuilder

	contentRequest(): MSGraphThumbnailContentRequest;

	contentRequestWithOptions(options: NSArray<any>): MSGraphThumbnailContentRequest;

	request(): MSGraphThumbnailRequest;

	requestWithOptions(options: NSArray<any>): MSGraphThumbnailRequest;
}

declare class MSGraphThumbnailSet extends MSGraphEntity {

	large: MSGraphThumbnail;

	medium: MSGraphThumbnail;

	small: MSGraphThumbnail;

	source: MSGraphThumbnail;

	customThumbnailWithSize(size: string): MSGraphThumbnail;
}

declare class MSGraphThumbnailSetRequest extends MSRequest {

	constructor(o: { URL: NSURL; client: ODataBaseClient; }); // inherited from MSRequest

	constructor(o: { URL: NSURL; options: NSArray<any>; client: ODataBaseClient; }); // inherited from MSRequest

	deleteWithCompletion(completionHandler: (p1: NSError) => void): MSURLSessionDataTask;

	expand(expand: string): MSGraphThumbnailSetRequest; // inherited from MSRequest

	getWithCompletion(completionHandler: (p1: MSGraphThumbnailSet, p2: NSError) => void): MSURLSessionDataTask;

	ifMatch(ifMatch: string): MSGraphThumbnailSetRequest; // inherited from MSRequest

	ifNoneMatch(ifNoneMatch: string): MSGraphThumbnailSetRequest; // inherited from MSRequest

	nameConflict(nameConflict: MSNameConflict): MSGraphThumbnailSetRequest; // inherited from MSRequest

	orderBy(orderBy: string): MSGraphThumbnailSetRequest; // inherited from MSRequest

	select(select: string): MSGraphThumbnailSetRequest; // inherited from MSRequest

	top(top: number): MSGraphThumbnailSetRequest; // inherited from MSRequest

	updateWithCompletion(thumbnailSet: MSGraphThumbnailSet, completionHandler: (p1: MSGraphThumbnailSet, p2: NSError) => void): MSURLSessionDataTask;
}

declare class MSGraphThumbnailSetRequestBuilder extends MSGraphEntityRequestBuilder {

	customThumbnailWithSize(size: string): MSGraphThumbnailRequestBuilder;

	large(): MSGraphThumbnailRequestBuilder;

	medium(): MSGraphThumbnailRequestBuilder;

	request(): MSGraphThumbnailSetRequest;

	requestWithOptions(options: NSArray<any>): MSGraphThumbnailSetRequest;

	small(): MSGraphThumbnailRequestBuilder;

	source(): MSGraphThumbnailRequestBuilder;
}

declare class MSGraphUploadSession extends MSObject {

	expirationDateTime: Date;

	nextExpectedRanges: NSArray<any>;

	uploadUrl: string;

	constructor(o: { dictionary: NSDictionary<any, any>; }); // inherited from MSObject
}

declare class MSGraphUser extends MSGraphDirectoryObject {

	aboutMe: string;

	accountEnabled: boolean;

	assignedLicenses: NSArray<any>;

	assignedPlans: NSArray<any>;

	birthday: Date;

	businessPhones: NSArray<any>;

	calendar: MSGraphCalendar;

	calendarGroups: NSArray<any>;

	calendarView: NSArray<any>;

	calendars: NSArray<any>;

	city: string;

	companyName: string;

	contactFolders: NSArray<any>;

	contacts: NSArray<any>;

	country: string;

	createdObjects: NSArray<any>;

	department: string;

	directReports: NSArray<any>;

	displayName: string;

	drive: MSGraphDrive;

	events: NSArray<any>;

	givenName: string;

	hireDate: Date;

	interests: NSArray<any>;

	jobTitle: string;

	mail: string;

	mailFolders: NSArray<any>;

	mailNickname: string;

	manager: MSGraphDirectoryObject;

	memberOf: NSArray<any>;

	messages: NSArray<any>;

	mobilePhone: string;

	mySite: string;

	officeLocation: string;

	onPremisesImmutableId: string;

	onPremisesLastSyncDateTime: Date;

	onPremisesSecurityIdentifier: string;

	onPremisesSyncEnabled: boolean;

	ownedDevices: NSArray<any>;

	ownedObjects: NSArray<any>;

	passwordPolicies: string;

	passwordProfile: MSGraphPasswordProfile;

	pastProjects: NSArray<any>;

	photo: MSGraphProfilePhoto;

	postalCode: string;

	preferredLanguage: string;

	preferredName: string;

	provisionedPlans: NSArray<any>;

	proxyAddresses: NSArray<any>;

	registeredDevices: NSArray<any>;

	responsibilities: NSArray<any>;

	schools: NSArray<any>;

	skills: NSArray<any>;

	state: string;

	streetAddress: string;

	surname: string;

	usageLocation: string;

	userPrincipalName: string;

	userType: string;
}

declare class MSGraphUserAssignLicenseRequest extends MSRequest {

	/* readonly */ mutableRequest: NSMutableURLRequest;

	constructor(o: { addLicenses: NSArray<any>; removeLicenses: NSArray<any>; URL: NSURL; options: NSArray<any>; client: ODataBaseClient; });

	constructor(o: { URL: NSURL; client: ODataBaseClient; }); // inherited from MSRequest

	constructor(o: { URL: NSURL; options: NSArray<any>; client: ODataBaseClient; }); // inherited from MSRequest

	executeWithCompletion(completionHandler: (p1: MSGraphUser, p2: NSError) => void): MSURLSessionDataTask;

	expand(expand: string): MSGraphUserAssignLicenseRequest; // inherited from MSRequest

	ifMatch(ifMatch: string): MSGraphUserAssignLicenseRequest; // inherited from MSRequest

	ifNoneMatch(ifNoneMatch: string): MSGraphUserAssignLicenseRequest; // inherited from MSRequest

	nameConflict(nameConflict: MSNameConflict): MSGraphUserAssignLicenseRequest; // inherited from MSRequest

	orderBy(orderBy: string): MSGraphUserAssignLicenseRequest; // inherited from MSRequest

	select(select: string): MSGraphUserAssignLicenseRequest; // inherited from MSRequest

	top(top: number): MSGraphUserAssignLicenseRequest; // inherited from MSRequest
}

declare class MSGraphUserAssignLicenseRequestBuilder extends MSRequestBuilder {

	constructor(o: { addLicenses: NSArray<any>; removeLicenses: NSArray<any>; URL: NSURL; client: ODataBaseClient; });

	constructor(o: { URL: NSURL; client: ODataBaseClient; }); // inherited from MSRequestBuilder

	request(): MSGraphUserAssignLicenseRequest;

	requestWithOptions(options: NSArray<any>): MSGraphUserAssignLicenseRequest;
}

declare class MSGraphUserCalendarGroupsCollectionRequest extends MSCollectionRequest {

	addCalendarGroupWithCompletion(calendarGroup: MSGraphCalendarGroup, completionHandler: (p1: MSGraphCalendarGroup, p2: NSError) => void): MSURLSessionDataTask;

	getWithCompletion(completionHandler: (p1: MSCollection, p2: MSGraphUserCalendarGroupsCollectionRequest, p3: NSError) => void): MSURLSessionDataTask;
}

declare class MSGraphUserCalendarGroupsCollectionRequestBuilder extends MSCollectionRequestBuilder {

	calendarGroup(calendarGroup: string): MSGraphCalendarGroupRequestBuilder;

	request(): MSGraphUserCalendarGroupsCollectionRequest;

	requestWithOptions(options: NSArray<any>): MSGraphUserCalendarGroupsCollectionRequest;
}

declare class MSGraphUserCalendarViewCollectionRequest extends MSCollectionRequest {

	addEventWithCompletion(event: MSGraphEvent, completionHandler: (p1: MSGraphEvent, p2: NSError) => void): MSURLSessionDataTask;

	getWithCompletion(completionHandler: (p1: MSCollection, p2: MSGraphUserCalendarViewCollectionRequest, p3: NSError) => void): MSURLSessionDataTask;
}

declare class MSGraphUserCalendarViewCollectionRequestBuilder extends MSCollectionRequestBuilder {

	event(event: string): MSGraphEventRequestBuilder;

	request(): MSGraphUserCalendarViewCollectionRequest;

	requestWithOptions(options: NSArray<any>): MSGraphUserCalendarViewCollectionRequest;
}

declare class MSGraphUserCalendarsCollectionRequest extends MSCollectionRequest {

	addCalendarWithCompletion(calendar: MSGraphCalendar, completionHandler: (p1: MSGraphCalendar, p2: NSError) => void): MSURLSessionDataTask;

	getWithCompletion(completionHandler: (p1: MSCollection, p2: MSGraphUserCalendarsCollectionRequest, p3: NSError) => void): MSURLSessionDataTask;
}

declare class MSGraphUserCalendarsCollectionRequestBuilder extends MSCollectionRequestBuilder {

	calendar(calendar: string): MSGraphCalendarRequestBuilder;

	request(): MSGraphUserCalendarsCollectionRequest;

	requestWithOptions(options: NSArray<any>): MSGraphUserCalendarsCollectionRequest;
}

declare class MSGraphUserChangePasswordRequest extends MSRequest {

	/* readonly */ mutableRequest: NSMutableURLRequest;

	constructor(o: { currentPassword: string; newPassword: string; URL: NSURL; options: NSArray<any>; client: ODataBaseClient; });

	constructor(o: { URL: NSURL; client: ODataBaseClient; }); // inherited from MSRequest

	constructor(o: { URL: NSURL; options: NSArray<any>; client: ODataBaseClient; }); // inherited from MSRequest

	executeWithCompletion(completionHandler: (p1: NSDictionary<any, any>, p2: NSError) => void): MSURLSessionDataTask;

	expand(expand: string): MSGraphUserChangePasswordRequest; // inherited from MSRequest

	ifMatch(ifMatch: string): MSGraphUserChangePasswordRequest; // inherited from MSRequest

	ifNoneMatch(ifNoneMatch: string): MSGraphUserChangePasswordRequest; // inherited from MSRequest

	nameConflict(nameConflict: MSNameConflict): MSGraphUserChangePasswordRequest; // inherited from MSRequest

	orderBy(orderBy: string): MSGraphUserChangePasswordRequest; // inherited from MSRequest

	select(select: string): MSGraphUserChangePasswordRequest; // inherited from MSRequest

	top(top: number): MSGraphUserChangePasswordRequest; // inherited from MSRequest
}

declare class MSGraphUserChangePasswordRequestBuilder extends MSRequestBuilder {

	constructor(o: { currentPassword: string; newPassword: string; URL: NSURL; client: ODataBaseClient; });

	constructor(o: { URL: NSURL; client: ODataBaseClient; }); // inherited from MSRequestBuilder

	request(): MSGraphUserChangePasswordRequest;

	requestWithOptions(options: NSArray<any>): MSGraphUserChangePasswordRequest;
}

declare class MSGraphUserContactFoldersCollectionRequest extends MSCollectionRequest {

	addContactFolderWithCompletion(contactFolder: MSGraphContactFolder, completionHandler: (p1: MSGraphContactFolder, p2: NSError) => void): MSURLSessionDataTask;

	getWithCompletion(completionHandler: (p1: MSCollection, p2: MSGraphUserContactFoldersCollectionRequest, p3: NSError) => void): MSURLSessionDataTask;
}

declare class MSGraphUserContactFoldersCollectionRequestBuilder extends MSCollectionRequestBuilder {

	contactFolder(contactFolder: string): MSGraphContactFolderRequestBuilder;

	request(): MSGraphUserContactFoldersCollectionRequest;

	requestWithOptions(options: NSArray<any>): MSGraphUserContactFoldersCollectionRequest;
}

declare class MSGraphUserContactsCollectionRequest extends MSCollectionRequest {

	addContactWithCompletion(contact: MSGraphContact, completionHandler: (p1: MSGraphContact, p2: NSError) => void): MSURLSessionDataTask;

	getWithCompletion(completionHandler: (p1: MSCollection, p2: MSGraphUserContactsCollectionRequest, p3: NSError) => void): MSURLSessionDataTask;
}

declare class MSGraphUserContactsCollectionRequestBuilder extends MSCollectionRequestBuilder {

	contact(contact: string): MSGraphContactRequestBuilder;

	request(): MSGraphUserContactsCollectionRequest;

	requestWithOptions(options: NSArray<any>): MSGraphUserContactsCollectionRequest;
}

declare class MSGraphUserCreatedObjectsCollectionReferencesRequest extends MSCollectionRequest {

	addDirectoryObjectWithCompletion(directoryObject: MSGraphDirectoryObject, completionHandler: (p1: MSGraphDirectoryObject, p2: NSError) => void): MSURLSessionDataTask;
}

declare class MSGraphUserCreatedObjectsCollectionReferencesRequestBuilder extends MSCollectionRequestBuilder {

	request(): MSGraphUserCreatedObjectsCollectionReferencesRequest;

	requestWithOptions(options: NSArray<any>): MSGraphUserCreatedObjectsCollectionReferencesRequest;
}

declare class MSGraphUserCreatedObjectsCollectionWithReferencesRequest extends MSCollectionRequest {

	getWithCompletion(completionHandler: (p1: MSCollection, p2: MSGraphUserCreatedObjectsCollectionWithReferencesRequest, p3: NSError) => void): MSURLSessionDataTask;
}

declare class MSGraphUserCreatedObjectsCollectionWithReferencesRequestBuilder extends MSCollectionRequestBuilder {

	directoryObject(directoryObject: string): MSGraphDirectoryObjectRequestBuilder;

	references(): MSGraphUserCreatedObjectsCollectionReferencesRequestBuilder;

	request(): MSGraphUserCreatedObjectsCollectionWithReferencesRequest;

	requestWithOptions(options: NSArray<any>): MSGraphUserCreatedObjectsCollectionWithReferencesRequest;
}

declare class MSGraphUserDirectReportsCollectionReferencesRequest extends MSCollectionRequest {

	addDirectoryObjectWithCompletion(directoryObject: MSGraphDirectoryObject, completionHandler: (p1: MSGraphDirectoryObject, p2: NSError) => void): MSURLSessionDataTask;
}

declare class MSGraphUserDirectReportsCollectionReferencesRequestBuilder extends MSCollectionRequestBuilder {

	request(): MSGraphUserDirectReportsCollectionReferencesRequest;

	requestWithOptions(options: NSArray<any>): MSGraphUserDirectReportsCollectionReferencesRequest;
}

declare class MSGraphUserDirectReportsCollectionWithReferencesRequest extends MSCollectionRequest {

	getWithCompletion(completionHandler: (p1: MSCollection, p2: MSGraphUserDirectReportsCollectionWithReferencesRequest, p3: NSError) => void): MSURLSessionDataTask;
}

declare class MSGraphUserDirectReportsCollectionWithReferencesRequestBuilder extends MSCollectionRequestBuilder {

	directoryObject(directoryObject: string): MSGraphDirectoryObjectRequestBuilder;

	references(): MSGraphUserDirectReportsCollectionReferencesRequestBuilder;

	request(): MSGraphUserDirectReportsCollectionWithReferencesRequest;

	requestWithOptions(options: NSArray<any>): MSGraphUserDirectReportsCollectionWithReferencesRequest;
}

declare class MSGraphUserEventsCollectionRequest extends MSCollectionRequest {

	addEventWithCompletion(event: MSGraphEvent, completionHandler: (p1: MSGraphEvent, p2: NSError) => void): MSURLSessionDataTask;

	getWithCompletion(completionHandler: (p1: MSCollection, p2: MSGraphUserEventsCollectionRequest, p3: NSError) => void): MSURLSessionDataTask;
}

declare class MSGraphUserEventsCollectionRequestBuilder extends MSCollectionRequestBuilder {

	event(event: string): MSGraphEventRequestBuilder;

	request(): MSGraphUserEventsCollectionRequest;

	requestWithOptions(options: NSArray<any>): MSGraphUserEventsCollectionRequest;
}

declare class MSGraphUserMailFoldersCollectionRequest extends MSCollectionRequest {

	addMailFolderWithCompletion(mailFolder: MSGraphMailFolder, completionHandler: (p1: MSGraphMailFolder, p2: NSError) => void): MSURLSessionDataTask;

	getWithCompletion(completionHandler: (p1: MSCollection, p2: MSGraphUserMailFoldersCollectionRequest, p3: NSError) => void): MSURLSessionDataTask;
}

declare class MSGraphUserMailFoldersCollectionRequestBuilder extends MSCollectionRequestBuilder {

	deletedItems(): MSGraphMailFolderRequestBuilder;

	drafts(): MSGraphMailFolderRequestBuilder;

	inbox(): MSGraphMailFolderRequestBuilder;

	mailFolder(mailFolder: string): MSGraphMailFolderRequestBuilder;

	request(): MSGraphUserMailFoldersCollectionRequest;

	requestWithOptions(options: NSArray<any>): MSGraphUserMailFoldersCollectionRequest;

	sentItems(): MSGraphMailFolderRequestBuilder;
}

declare class MSGraphUserMemberOfCollectionReferencesRequest extends MSCollectionRequest {

	addDirectoryObjectWithCompletion(directoryObject: MSGraphDirectoryObject, completionHandler: (p1: MSGraphDirectoryObject, p2: NSError) => void): MSURLSessionDataTask;
}

declare class MSGraphUserMemberOfCollectionReferencesRequestBuilder extends MSCollectionRequestBuilder {

	request(): MSGraphUserMemberOfCollectionReferencesRequest;

	requestWithOptions(options: NSArray<any>): MSGraphUserMemberOfCollectionReferencesRequest;
}

declare class MSGraphUserMemberOfCollectionWithReferencesRequest extends MSCollectionRequest {

	getWithCompletion(completionHandler: (p1: MSCollection, p2: MSGraphUserMemberOfCollectionWithReferencesRequest, p3: NSError) => void): MSURLSessionDataTask;
}

declare class MSGraphUserMemberOfCollectionWithReferencesRequestBuilder extends MSCollectionRequestBuilder {

	directoryObject(directoryObject: string): MSGraphDirectoryObjectRequestBuilder;

	references(): MSGraphUserMemberOfCollectionReferencesRequestBuilder;

	request(): MSGraphUserMemberOfCollectionWithReferencesRequest;

	requestWithOptions(options: NSArray<any>): MSGraphUserMemberOfCollectionWithReferencesRequest;
}

declare class MSGraphUserMessagesCollectionRequest extends MSCollectionRequest {

	addMessageWithCompletion(message: MSGraphMessage, completionHandler: (p1: MSGraphMessage, p2: NSError) => void): MSURLSessionDataTask;

	getWithCompletion(completionHandler: (p1: MSCollection, p2: MSGraphUserMessagesCollectionRequest, p3: NSError) => void): MSURLSessionDataTask;
}

declare class MSGraphUserMessagesCollectionRequestBuilder extends MSCollectionRequestBuilder {

	message(message: string): MSGraphMessageRequestBuilder;

	request(): MSGraphUserMessagesCollectionRequest;

	requestWithOptions(options: NSArray<any>): MSGraphUserMessagesCollectionRequest;
}

declare class MSGraphUserOwnedDevicesCollectionReferencesRequest extends MSCollectionRequest {

	addDirectoryObjectWithCompletion(directoryObject: MSGraphDirectoryObject, completionHandler: (p1: MSGraphDirectoryObject, p2: NSError) => void): MSURLSessionDataTask;
}

declare class MSGraphUserOwnedDevicesCollectionReferencesRequestBuilder extends MSCollectionRequestBuilder {

	request(): MSGraphUserOwnedDevicesCollectionReferencesRequest;

	requestWithOptions(options: NSArray<any>): MSGraphUserOwnedDevicesCollectionReferencesRequest;
}

declare class MSGraphUserOwnedDevicesCollectionWithReferencesRequest extends MSCollectionRequest {

	getWithCompletion(completionHandler: (p1: MSCollection, p2: MSGraphUserOwnedDevicesCollectionWithReferencesRequest, p3: NSError) => void): MSURLSessionDataTask;
}

declare class MSGraphUserOwnedDevicesCollectionWithReferencesRequestBuilder extends MSCollectionRequestBuilder {

	directoryObject(directoryObject: string): MSGraphDirectoryObjectRequestBuilder;

	references(): MSGraphUserOwnedDevicesCollectionReferencesRequestBuilder;

	request(): MSGraphUserOwnedDevicesCollectionWithReferencesRequest;

	requestWithOptions(options: NSArray<any>): MSGraphUserOwnedDevicesCollectionWithReferencesRequest;
}

declare class MSGraphUserOwnedObjectsCollectionReferencesRequest extends MSCollectionRequest {

	addDirectoryObjectWithCompletion(directoryObject: MSGraphDirectoryObject, completionHandler: (p1: MSGraphDirectoryObject, p2: NSError) => void): MSURLSessionDataTask;
}

declare class MSGraphUserOwnedObjectsCollectionReferencesRequestBuilder extends MSCollectionRequestBuilder {

	request(): MSGraphUserOwnedObjectsCollectionReferencesRequest;

	requestWithOptions(options: NSArray<any>): MSGraphUserOwnedObjectsCollectionReferencesRequest;
}

declare class MSGraphUserOwnedObjectsCollectionWithReferencesRequest extends MSCollectionRequest {

	getWithCompletion(completionHandler: (p1: MSCollection, p2: MSGraphUserOwnedObjectsCollectionWithReferencesRequest, p3: NSError) => void): MSURLSessionDataTask;
}

declare class MSGraphUserOwnedObjectsCollectionWithReferencesRequestBuilder extends MSCollectionRequestBuilder {

	directoryObject(directoryObject: string): MSGraphDirectoryObjectRequestBuilder;

	references(): MSGraphUserOwnedObjectsCollectionReferencesRequestBuilder;

	request(): MSGraphUserOwnedObjectsCollectionWithReferencesRequest;

	requestWithOptions(options: NSArray<any>): MSGraphUserOwnedObjectsCollectionWithReferencesRequest;
}

declare class MSGraphUserReferenceRequest extends MSRequest {

	constructor(o: { URL: NSURL; client: ODataBaseClient; }); // inherited from MSRequest

	constructor(o: { URL: NSURL; options: NSArray<any>; client: ODataBaseClient; }); // inherited from MSRequest

	deleteWithCompletion(completionHandler: (p1: NSError) => void): MSURLSessionDataTask;

	expand(expand: string): MSGraphUserReferenceRequest; // inherited from MSRequest

	ifMatch(ifMatch: string): MSGraphUserReferenceRequest; // inherited from MSRequest

	ifNoneMatch(ifNoneMatch: string): MSGraphUserReferenceRequest; // inherited from MSRequest

	nameConflict(nameConflict: MSNameConflict): MSGraphUserReferenceRequest; // inherited from MSRequest

	orderBy(orderBy: string): MSGraphUserReferenceRequest; // inherited from MSRequest

	select(select: string): MSGraphUserReferenceRequest; // inherited from MSRequest

	top(top: number): MSGraphUserReferenceRequest; // inherited from MSRequest
}

declare class MSGraphUserReferenceRequestBuilder extends MSRequestBuilder {

	constructor(o: { URL: NSURL; client: ODataBaseClient; }); // inherited from MSRequestBuilder

	request(): MSGraphUserReferenceRequest;

	requestWithOptions(options: NSArray<any>): MSGraphUserReferenceRequest;
}

declare class MSGraphUserRegisteredDevicesCollectionReferencesRequest extends MSCollectionRequest {

	addDirectoryObjectWithCompletion(directoryObject: MSGraphDirectoryObject, completionHandler: (p1: MSGraphDirectoryObject, p2: NSError) => void): MSURLSessionDataTask;
}

declare class MSGraphUserRegisteredDevicesCollectionReferencesRequestBuilder extends MSCollectionRequestBuilder {

	request(): MSGraphUserRegisteredDevicesCollectionReferencesRequest;

	requestWithOptions(options: NSArray<any>): MSGraphUserRegisteredDevicesCollectionReferencesRequest;
}

declare class MSGraphUserRegisteredDevicesCollectionWithReferencesRequest extends MSCollectionRequest {

	getWithCompletion(completionHandler: (p1: MSCollection, p2: MSGraphUserRegisteredDevicesCollectionWithReferencesRequest, p3: NSError) => void): MSURLSessionDataTask;
}

declare class MSGraphUserRegisteredDevicesCollectionWithReferencesRequestBuilder extends MSCollectionRequestBuilder {

	directoryObject(directoryObject: string): MSGraphDirectoryObjectRequestBuilder;

	references(): MSGraphUserRegisteredDevicesCollectionReferencesRequestBuilder;

	request(): MSGraphUserRegisteredDevicesCollectionWithReferencesRequest;

	requestWithOptions(options: NSArray<any>): MSGraphUserRegisteredDevicesCollectionWithReferencesRequest;
}

declare class MSGraphUserReminderViewRequest extends MSCollectionRequest {

	/* readonly */ mutableRequest: NSMutableURLRequest;

	constructor(o: { startDateTime: string; endDateTime: string; URL: NSURL; options: NSArray<any>; client: ODataBaseClient; });

	executeWithCompletion(completionHandler: (p1: MSCollection, p2: MSGraphUserReminderViewRequest, p3: NSError) => void): MSURLSessionDataTask;
}

declare class MSGraphUserReminderViewRequestBuilder extends MSRequestBuilder {

	constructor(o: { startDateTime: string; endDateTime: string; URL: NSURL; client: ODataBaseClient; });

	constructor(o: { URL: NSURL; client: ODataBaseClient; }); // inherited from MSRequestBuilder

	request(): MSGraphUserReminderViewRequest;

	requestWithOptions(options: NSArray<any>): MSGraphUserReminderViewRequest;
}

declare class MSGraphUserRequest extends MSRequest {

	constructor(o: { URL: NSURL; client: ODataBaseClient; }); // inherited from MSRequest

	constructor(o: { URL: NSURL; options: NSArray<any>; client: ODataBaseClient; }); // inherited from MSRequest

	deleteWithCompletion(completionHandler: (p1: NSError) => void): MSURLSessionDataTask;

	expand(expand: string): MSGraphUserRequest; // inherited from MSRequest

	getWithCompletion(completionHandler: (p1: MSGraphUser, p2: NSError) => void): MSURLSessionDataTask;

	ifMatch(ifMatch: string): MSGraphUserRequest; // inherited from MSRequest

	ifNoneMatch(ifNoneMatch: string): MSGraphUserRequest; // inherited from MSRequest

	nameConflict(nameConflict: MSNameConflict): MSGraphUserRequest; // inherited from MSRequest

	orderBy(orderBy: string): MSGraphUserRequest; // inherited from MSRequest

	select(select: string): MSGraphUserRequest; // inherited from MSRequest

	top(top: number): MSGraphUserRequest; // inherited from MSRequest

	updateWithCompletion(user: MSGraphUser, completionHandler: (p1: MSGraphUser, p2: NSError) => void): MSURLSessionDataTask;
}

declare class MSGraphUserRequestBuilder extends MSGraphDirectoryObjectRequestBuilder {

	assignLicenseWithAddLicensesRemoveLicenses(addLicenses: NSArray<any>, removeLicenses: NSArray<any>): MSGraphUserAssignLicenseRequestBuilder;

	calendar(): MSGraphCalendarRequestBuilder;

	calendarGroups(): MSGraphUserCalendarGroupsCollectionRequestBuilder;

	calendarView(): MSGraphUserCalendarViewCollectionRequestBuilder;

	calendars(): MSGraphUserCalendarsCollectionRequestBuilder;

	changePasswordWithCurrentPasswordNewPassword(currentPassword: string, newPassword: string): MSGraphUserChangePasswordRequestBuilder;

	contactFolders(contactFolder: string): MSGraphContactFolderRequestBuilder;

	contacts(contact: string): MSGraphContactRequestBuilder;

	createdObjects(): MSGraphUserCreatedObjectsCollectionWithReferencesRequestBuilder;

	directReports(): MSGraphUserDirectReportsCollectionWithReferencesRequestBuilder;

	drive(): MSGraphDriveRequestBuilder;

	events(): MSGraphUserEventsCollectionRequestBuilder;

	mailFolders(): MSGraphUserMailFoldersCollectionRequestBuilder;

	manager(): MSGraphDirectoryObjectRequestBuilder;

	memberOf(): MSGraphUserMemberOfCollectionWithReferencesRequestBuilder;

	messages(): MSGraphUserMessagesCollectionRequestBuilder;

	ownedDevices(): MSGraphUserOwnedDevicesCollectionWithReferencesRequestBuilder;

	ownedObjects(directoryObject: string): MSGraphDirectoryObjectRequestBuilder;

	photo(): MSGraphProfilePhotoRequestBuilder;

	photoValue(): MSGraphProfilePhotoStreamRequest;

	photoValueWithOptions(options: NSArray<any>): MSGraphProfilePhotoStreamRequest;

	registeredDevices(directoryObject: string): MSGraphDirectoryObjectRequestBuilder;

	reminderViewWithStartDateTimeEndDateTime(startDateTime: string, endDateTime: string): MSGraphUserReminderViewRequestBuilder;

	request(): MSGraphUserRequest;

	requestWithOptions(options: NSArray<any>): MSGraphUserRequest;

	sendMailWithMessageSaveToSentItems(message: MSGraphMessage, saveToSentItems: boolean): MSGraphUserSendMailRequestBuilder;
}

declare class MSGraphUserSendMailRequest extends MSRequest {

	/* readonly */ mutableRequest: NSMutableURLRequest;

	constructor(o: { message: MSGraphMessage; saveToSentItems: boolean; URL: NSURL; options: NSArray<any>; client: ODataBaseClient; });

	constructor(o: { URL: NSURL; client: ODataBaseClient; }); // inherited from MSRequest

	constructor(o: { URL: NSURL; options: NSArray<any>; client: ODataBaseClient; }); // inherited from MSRequest

	executeWithCompletion(completionHandler: (p1: NSDictionary<any, any>, p2: NSError) => void): MSURLSessionDataTask;

	expand(expand: string): MSGraphUserSendMailRequest; // inherited from MSRequest

	ifMatch(ifMatch: string): MSGraphUserSendMailRequest; // inherited from MSRequest

	ifNoneMatch(ifNoneMatch: string): MSGraphUserSendMailRequest; // inherited from MSRequest

	nameConflict(nameConflict: MSNameConflict): MSGraphUserSendMailRequest; // inherited from MSRequest

	orderBy(orderBy: string): MSGraphUserSendMailRequest; // inherited from MSRequest

	select(select: string): MSGraphUserSendMailRequest; // inherited from MSRequest

	top(top: number): MSGraphUserSendMailRequest; // inherited from MSRequest
}

declare class MSGraphUserSendMailRequestBuilder extends MSRequestBuilder {

	constructor(o: { message: MSGraphMessage; saveToSentItems: boolean; URL: NSURL; client: ODataBaseClient; });

	constructor(o: { URL: NSURL; client: ODataBaseClient; }); // inherited from MSRequestBuilder

	request(): MSGraphUserSendMailRequest;

	requestWithOptions(options: NSArray<any>): MSGraphUserSendMailRequest;
}

declare class MSGraphUserWithReferenceRequest extends MSRequest {

	constructor(o: { URL: NSURL; client: ODataBaseClient; }); // inherited from MSRequest

	constructor(o: { URL: NSURL; options: NSArray<any>; client: ODataBaseClient; }); // inherited from MSRequest

	expand(expand: string): MSGraphUserWithReferenceRequest; // inherited from MSRequest

	getWithCompletion(completionHandler: (p1: MSGraphUser, p2: NSError) => void): MSURLSessionDataTask;

	ifMatch(ifMatch: string): MSGraphUserWithReferenceRequest; // inherited from MSRequest

	ifNoneMatch(ifNoneMatch: string): MSGraphUserWithReferenceRequest; // inherited from MSRequest

	nameConflict(nameConflict: MSNameConflict): MSGraphUserWithReferenceRequest; // inherited from MSRequest

	orderBy(orderBy: string): MSGraphUserWithReferenceRequest; // inherited from MSRequest

	select(select: string): MSGraphUserWithReferenceRequest; // inherited from MSRequest

	top(top: number): MSGraphUserWithReferenceRequest; // inherited from MSRequest
}

declare class MSGraphUserWithReferenceRequestBuilder extends MSRequestBuilder {

	constructor(o: { URL: NSURL; client: ODataBaseClient; }); // inherited from MSRequestBuilder

	reference(): MSGraphUserReferenceRequestBuilder;

	request(): MSGraphUserWithReferenceRequest;

	requestWithOptions(options: NSArray<any>): MSGraphUserWithReferenceRequest;
}

declare class MSGraphUsersCollectionRequest extends MSCollectionRequest {

	addUserWithCompletion(user: MSGraphUser, completionHandler: (p1: MSGraphUser, p2: NSError) => void): MSURLSessionDataTask;

	getWithCompletion(completionHandler: (p1: MSCollection, p2: MSGraphUsersCollectionRequest, p3: NSError) => void): MSURLSessionDataTask;
}

declare class MSGraphUsersCollectionRequestBuilder extends MSCollectionRequestBuilder {

	request(): MSGraphUsersCollectionRequest;

	requestWithOptions(options: NSArray<any>): MSGraphUsersCollectionRequest;

	user(user: string): MSGraphUserRequestBuilder;
}

declare class MSGraphVerifiedDomain extends MSObject {

	capabilities: string;

	isDefault: boolean;

	isInitial: boolean;

	name: string;

	type: string;

	constructor(o: { dictionary: NSDictionary<any, any>; }); // inherited from MSObject
}

declare class MSGraphVideo extends MSObject {

	bitrate: number;

	duration: number;

	height: number;

	width: number;

	constructor(o: { dictionary: NSDictionary<any, any>; }); // inherited from MSObject
}

declare class MSGraphWeekIndex extends NSObject {

	static UnknownEnumValue(): MSGraphWeekIndex;

	static alloc(): MSGraphWeekIndex; // inherited from NSObject

	static first(): MSGraphWeekIndex;

	static fourth(): MSGraphWeekIndex;

	static last(): MSGraphWeekIndex;

	static new(): MSGraphWeekIndex; // inherited from NSObject

	static second(): MSGraphWeekIndex;

	static third(): MSGraphWeekIndex;

	static weekIndexWithEnumValue(val: MSGraphWeekIndexValue): MSGraphWeekIndex;

	/* readonly */ enumValue: MSGraphWeekIndexValue;

	constructor(); // inherited from NSObject

	ms_toString(): string;

	self(): MSGraphWeekIndex; // inherited from NSObjectProtocol
}

declare const enum MSGraphWeekIndexValue {

	First = 0,

	Second = 1,

	Third = 2,

	Fourth = 3,

	Last = 4,

	EndOfEnum = 5
}

declare var MSHeaderApplicationJson: string;

declare var MSHeaderContentType: string;

declare var MSHeaderLocation: string;

declare class MSHeaderOptions extends MSRequestOptions {

	constructor(o: { key: string; value: string; }); // inherited from MSRequestOptions
}

declare var MSHeaderPrefer: string;

declare var MSHeaderRespondAsync: string;

declare var MSHeaderSdkVersion: string;

declare var MSHttpFailingResponseKey: string;

interface MSHttpProvider extends NSObjectProtocol {

	dataTaskWithRequestCompletionHandler(request: NSURLRequest, completionHandler: (p1: NSData, p2: NSURLResponse, p3: NSError) => void): NSURLSessionDataTask;

	downloadTaskWithRequestProgressCompletionHandler(request: NSURLRequest, progress: interop.Reference<NSProgress>, completionHandler: (p1: NSURL, p2: NSURLResponse, p3: NSError) => void): NSURLSessionDownloadTask;

	uploadTaskWithRequestFromDataProgressCompletionHandler(request: NSURLRequest, data: NSData, progress: interop.Reference<NSProgress>, completionHandler: (p1: NSData, p2: NSURLResponse, p3: NSError) => void): NSURLSessionUploadTask;

	uploadTaskWithRequestFromFileProgressCompletionHandler(request: NSURLRequest, fileURL: NSURL, progress: interop.Reference<NSProgress>, completionHandler: (p1: NSData, p2: NSURLResponse, p3: NSError) => void): NSURLSessionUploadTask;
}
declare var MSHttpProvider: {

	prototype: MSHttpProvider;
};

declare class MSIfMatch extends MSHeaderOptions {

	static entityTags(eTags: string): MSIfMatch;
}

declare class MSIfNoneMatch extends MSHeaderOptions {

	static entityTags(eTags: string): MSIfNoneMatch;
}

declare var MSInvalidRangeError: string;

declare var MSInvalidRequestError: string;

declare var MSItemNotFoundError: string;

declare const enum MSLogLevel {

	LogError = 0,

	LogWarn = 1,

	LogInfo = 2,

	LogDebug = 3,

	LogVerbose = 4
}

declare class MSLogger extends NSObject implements MSLoggerProtocol {

	static alloc(): MSLogger; // inherited from NSObject

	static new(): MSLogger; // inherited from NSObject

	/* readonly */ logLevel: MSLogLevel;

	constructor(); // inherited from NSObject

	constructor(o: { logLevel: MSLogLevel; });

	self(): MSLogger; // inherited from NSObjectProtocol

	setLogLevel(logLevel: MSLogLevel): void; // inherited from MSLoggerProtocol

	writeMessage(message: string): void;
}

interface MSLoggerProtocol extends NSObjectProtocol {

	setLogLevel(logLevel: MSLogLevel): void;
}
declare var MSLoggerProtocol: {

	prototype: MSLoggerProtocol;
};

declare var MSMalformedErrorResponseError: string;

declare var MSMalwareDetectedError: string;

declare var MSNameAlreadyExistsError: string;

declare class MSNameConflict extends MSQueryParameters {

	static fail(): MSNameConflict;

	static rename(): MSNameConflict;

	static replace(): MSNameConflict;
}

declare var MSNotAllowedError: string;

declare var MSNotSupportedError: string;

declare var MSODataNextContext: string;

declare class MSObject extends NSObject {

	static alloc(): MSObject; // inherited from NSObject

	static getNSJsonSerializationCompatibleValue(val: any): any;

	static new(): MSObject; // inherited from NSObject

	constructor(); // inherited from NSObject

	constructor(o: { dictionary: NSDictionary<any, any>; });

	dateFromString(dateString: string): Date;

	dictionaryFromItem(): NSDictionary<any, any>;

	self(): MSObject; // inherited from NSObjectProtocol
}

declare class MSOrderByOptions extends MSQueryParameters {

	static orderBy(orderBy: string): MSOrderByOptions;
}

declare class MSQueryParameters extends MSRequestOptions {

	constructor(o: { key: string; value: string; }); // inherited from MSRequestOptions
}

declare var MSQuotaLimitReacherError: string;

declare class MSRequest extends NSObject {

	static alloc(): MSRequest; // inherited from NSObject

	static new(): MSRequest; // inherited from NSObject

	/* readonly */ client: ODataBaseClient;

	/* readonly */ requestURL: NSURL;

	constructor(); // inherited from NSObject

	constructor(o: { URL: NSURL; client: ODataBaseClient; });

	constructor(o: { URL: NSURL; options: NSArray<any>; client: ODataBaseClient; });

	expand(expand: string): MSRequest;

	ifMatch(ifMatch: string): MSRequest;

	ifNoneMatch(ifNoneMatch: string): MSRequest;

	nameConflict(nameConflict: MSNameConflict): MSRequest;

	orderBy(orderBy: string): MSRequest;

	select(select: string): MSRequest;

	self(): MSRequest; // inherited from NSObjectProtocol

	taskWithRequestOdObjectWithDictionaryCompletion(request: NSMutableURLRequest, castBlock: (p1: NSDictionary<any, any>) => any, completionHandler: (p1: any, p2: NSError) => void): MSURLSessionDataTask;

	top(top: number): MSRequest;

	uploadTaskWithRequestFromDataOdobjectWithDictionaryCompletionHandler(request: NSMutableURLRequest, data: NSData, castBlock: (p1: NSDictionary<any, any>) => any, completionHandler: (p1: any, p2: NSError) => void): MSURLSessionUploadTask;

	uploadTaskWithRequestFromFileOdobjectWithDictionaryCompletionHandler(request: NSMutableURLRequest, fileURL: NSURL, castBlock: (p1: NSDictionary<any, any>) => any, completionHandler: (p1: any, p2: NSError) => void): MSURLSessionUploadTask;
}

declare class MSRequestBuilder extends NSObject {

	static alloc(): MSRequestBuilder; // inherited from NSObject

	static new(): MSRequestBuilder; // inherited from NSObject

	/* readonly */ client: ODataBaseClient;

	/* readonly */ requestURL: NSURL;

	constructor(); // inherited from NSObject

	constructor(o: { URL: NSURL; client: ODataBaseClient; });

	self(): MSRequestBuilder; // inherited from NSObjectProtocol
}

declare class MSRequestOptions extends NSObject {

	static alloc(): MSRequestOptions; // inherited from NSObject

	static new(): MSRequestOptions; // inherited from NSObject

	key: string;

	value: string;

	constructor(); // inherited from NSObject

	constructor(o: { key: string; value: string; });

	appendOptionToFunctionParams(functionParams: NSMutableString): void;

	appendOptionToHeaders(headers: NSMutableDictionary<any, any>): void;

	appendOptionToQueryString(queryString: NSMutableString): void;

	self(): MSRequestOptions; // inherited from NSObjectProtocol
}

declare class MSRequestOptionsBuilder extends NSObject {

	static alloc(): MSRequestOptionsBuilder; // inherited from NSObject

	static new(): MSRequestOptionsBuilder; // inherited from NSObject

	static optionsWithArray(options: NSArray<any>): MSRequestOptionsBuilder;

	/* readonly */ functionParams: string;

	/* readonly */ headers: NSDictionary<any, any>;

	/* readonly */ queryOptions: string;

	constructor(); // inherited from NSObject

	self(): MSRequestOptionsBuilder; // inherited from NSObjectProtocol
}

declare var MSResourceModifiedError: string;

declare var MSResyncRequiredError: string;

declare class MSSelectOptions extends MSQueryParameters {

	static select(string: string): MSSelectOptions;
}

declare var MSServiceNotAvailableError: string;

declare class MSTopOptions extends MSQueryParameters {

	static top(top: number): MSTopOptions;
}

declare class MSURLSessionDataTask extends MSURLSessionTask {

	constructor(o: { request: NSMutableURLRequest; client: ODataBaseClient; }); // inherited from MSURLSessionTask

	constructor(o: { request: NSMutableURLRequest; client: ODataBaseClient; completion: (p1: NSDictionary<any, any>, p2: NSError) => void; });
}

declare class MSURLSessionDownloadTask extends MSURLSessionProgressTask {

	constructor(o: { request: NSMutableURLRequest; client: ODataBaseClient; completionHandler: (p1: NSURL, p2: NSURLResponse, p3: NSError) => void; });
}

declare class MSURLSessionManager extends NSObject implements MSHttpProvider, NSURLSessionDataDelegate, NSURLSessionDelegate, NSURLSessionDownloadDelegate, NSURLSessionTaskDelegate {

	static alloc(): MSURLSessionManager; // inherited from NSObject

	static new(): MSURLSessionManager; // inherited from NSObject

	constructor(); // inherited from NSObject

	constructor(o: { sessionConfiguration: NSURLSessionConfiguration; });

	URLSessionDataTaskDidBecomeDownloadTask(session: NSURLSession, dataTask: NSURLSessionDataTask, downloadTask: NSURLSessionDownloadTask): void; // inherited from NSURLSessionDataDelegate

	URLSessionDataTaskDidBecomeStreamTask(session: NSURLSession, dataTask: NSURLSessionDataTask, streamTask: NSURLSessionStreamTask): void; // inherited from NSURLSessionDataDelegate

	URLSessionDataTaskDidReceiveData(session: NSURLSession, dataTask: NSURLSessionDataTask, data: NSData): void; // inherited from NSURLSessionDataDelegate

	URLSessionDataTaskDidReceiveResponseCompletionHandler(session: NSURLSession, dataTask: NSURLSessionDataTask, response: NSURLResponse, completionHandler: (p1: NSURLSessionResponseDisposition) => void): void; // inherited from NSURLSessionDataDelegate

	URLSessionDataTaskWillCacheResponseCompletionHandler(session: NSURLSession, dataTask: NSURLSessionDataTask, proposedResponse: NSCachedURLResponse, completionHandler: (p1: NSCachedURLResponse) => void): void; // inherited from NSURLSessionDataDelegate

	URLSessionDidBecomeInvalidWithError(session: NSURLSession, error: NSError): void; // inherited from NSURLSessionDelegate

	URLSessionDidFinishEventsForBackgroundURLSession(session: NSURLSession): void; // inherited from NSURLSessionDelegate

	URLSessionDidReceiveChallengeCompletionHandler(session: NSURLSession, challenge: NSURLAuthenticationChallenge, completionHandler: (p1: NSURLSessionAuthChallengeDisposition, p2: NSURLCredential) => void): void; // inherited from NSURLSessionDelegate

	URLSessionDownloadTaskDidFinishDownloadingToURL(session: NSURLSession, downloadTask: NSURLSessionDownloadTask, location: NSURL): void; // inherited from NSURLSessionDownloadDelegate

	URLSessionDownloadTaskDidResumeAtOffsetExpectedTotalBytes(session: NSURLSession, downloadTask: NSURLSessionDownloadTask, fileOffset: number, expectedTotalBytes: number): void; // inherited from NSURLSessionDownloadDelegate

	URLSessionDownloadTaskDidWriteDataTotalBytesWrittenTotalBytesExpectedToWrite(session: NSURLSession, downloadTask: NSURLSessionDownloadTask, bytesWritten: number, totalBytesWritten: number, totalBytesExpectedToWrite: number): void; // inherited from NSURLSessionDownloadDelegate

	URLSessionTaskDidCompleteWithError(session: NSURLSession, task: NSURLSessionTask, error: NSError): void; // inherited from NSURLSessionTaskDelegate

	URLSessionTaskDidReceiveChallengeCompletionHandler(session: NSURLSession, task: NSURLSessionTask, challenge: NSURLAuthenticationChallenge, completionHandler: (p1: NSURLSessionAuthChallengeDisposition, p2: NSURLCredential) => void): void; // inherited from NSURLSessionTaskDelegate

	URLSessionTaskDidSendBodyDataTotalBytesSentTotalBytesExpectedToSend(session: NSURLSession, task: NSURLSessionTask, bytesSent: number, totalBytesSent: number, totalBytesExpectedToSend: number): void; // inherited from NSURLSessionTaskDelegate

	URLSessionTaskNeedNewBodyStream(session: NSURLSession, task: NSURLSessionTask, completionHandler: (p1: NSInputStream) => void): void; // inherited from NSURLSessionTaskDelegate

	URLSessionTaskWillPerformHTTPRedirectionNewRequestCompletionHandler(session: NSURLSession, task: NSURLSessionTask, response: NSHTTPURLResponse, request: NSURLRequest, completionHandler: (p1: NSURLRequest) => void): void; // inherited from NSURLSessionTaskDelegate

	dataTaskWithRequestCompletionHandler(request: NSURLRequest, completionHandler: (p1: NSData, p2: NSURLResponse, p3: NSError) => void): NSURLSessionDataTask; // inherited from MSHttpProvider

	downloadTaskWithRequestProgressCompletionHandler(request: NSURLRequest, progress: interop.Reference<NSProgress>, completionHandler: (p1: NSURL, p2: NSURLResponse, p3: NSError) => void): NSURLSessionDownloadTask; // inherited from MSHttpProvider

	self(): MSURLSessionManager; // inherited from NSObjectProtocol

	uploadTaskWithRequestFromDataProgressCompletionHandler(request: NSURLRequest, data: NSData, progress: interop.Reference<NSProgress>, completionHandler: (p1: NSData, p2: NSURLResponse, p3: NSError) => void): NSURLSessionUploadTask; // inherited from MSHttpProvider

	uploadTaskWithRequestFromFileProgressCompletionHandler(request: NSURLRequest, fileURL: NSURL, progress: interop.Reference<NSProgress>, completionHandler: (p1: NSData, p2: NSURLResponse, p3: NSError) => void): NSURLSessionUploadTask; // inherited from MSHttpProvider
}

declare class MSURLSessionProgressTask extends MSURLSessionTask {

	/* readonly */ progress: NSProgress;

	constructor(o: { request: NSMutableURLRequest; client: ODataBaseClient; }); // inherited from MSURLSessionTask

	createProgress(): NSProgress;
}

declare class MSURLSessionTask extends NSObject {

	static alloc(): MSURLSessionTask; // inherited from NSObject

	static new(): MSURLSessionTask; // inherited from NSObject

	client: ODataBaseClient;

	/* readonly */ innerTask: NSURLSessionTask;

	/* readonly */ state: MSURLSessionTaskState;

	constructor(); // inherited from NSObject

	constructor(o: { request: NSMutableURLRequest; client: ODataBaseClient; });

	cancel(): void;

	execute(): void;

	self(): MSURLSessionTask; // inherited from NSObjectProtocol
}

declare class MSURLSessionTaskDelegate extends NSObject {

	static alloc(): MSURLSessionTaskDelegate; // inherited from NSObject

	static new(): MSURLSessionTaskDelegate; // inherited from NSObject

	constructor(); // inherited from NSObject

	constructor(o: { progressRef: interop.Reference<NSProgress>; completion: (p1: any, p2: NSURLResponse, p3: NSError) => void; });

	didReceiveData(data: NSData): void;

	self(): MSURLSessionTaskDelegate; // inherited from NSObjectProtocol

	taskDidCompleteDownload(task: NSURLSessionTask, downloadLocation: NSURL): void;

	taskDidCompleteWithError(task: NSURLSessionTask, error: NSError): void;

	updateProgressWithBytesSentExpectedBytes(sentBytes: number, expectedBytes: number): void;
}

declare const enum MSURLSessionTaskState {

	TaskCreated = 0,

	TaskCanceled = 1,

	TaskAuthenticating = 2,

	TaskAuthFailed = 3,

	TaskExecuting = 4,

	TaskCompleted = 5
}

declare class MSURLSessionUploadTask extends MSURLSessionProgressTask {

	constructor(o: { request: NSMutableURLRequest; data: NSData; client: ODataBaseClient; completionHandler: (p1: NSDictionary<any, any>, p2: NSError) => void; });

	constructor(o: { request: NSMutableURLRequest; fromFile: NSURL; client: ODataBaseClient; completionHandler: (p1: NSDictionary<any, any>, p2: NSError) => void; });
}

declare var MSUnAuthenticatedError: string;

declare class ODataBaseClient extends NSObject {

	static alloc(): ODataBaseClient; // inherited from NSObject

	static new(): ODataBaseClient; // inherited from NSObject

	authenticationProvider: MSAuthenticationProvider;

	baseURL: NSURL;

	httpProvider: MSHttpProvider;

	logger: MSLoggerProtocol;

	constructor(); // inherited from NSObject

	constructor(o: { URL: string; httpProvider: MSHttpProvider; authenticationProvider: MSAuthenticationProvider; });

	self(): ODataBaseClient; // inherited from NSObjectProtocol
}
