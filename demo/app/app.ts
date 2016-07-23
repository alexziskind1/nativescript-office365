import * as application from 'application';
import * as o365 from 'nativescript-office365';

var o365InitOptions : o365.InitOptions = {
    clientId: '<enter GUID here>', //client id for application (GUID)
    scopes: ['Files.ReadWrite']
};
o365.init(o365InitOptions);

application.start({ moduleName: 'main-page' });
