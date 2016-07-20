import observable = require("data/observable");
import { ObservableArray  } from "data/observable-array";
import { office365 } from './office365-service';
import * as httpModule from "http";


export class ExplorerModel extends observable.Observable {

    public children = new ObservableArray([]);

    constructor() {
        super();
        this.loadChildren();
    }

    private loadChildren() {
        console.log('loading children');
        var req: httpModule.HttpRequestOptions = {
            method: "GET",
            url: "https://graph.microsoft.com/v1.0/me/drive/items/root?expand=children",
            headers: {
                Authorization: "Bearer " + office365.accessToken
            }
        };
        httpModule.getJSON(req)
            .then((response: any)=>{
                this.processChildren(response.children);
            })
            .catch((er)=>{
                console.log(er);
            })
    }

    private processChildren(children: any) {
        for (var i = 0; i < children.length; i++) {
            this.children.push(children[i]);
        }
    }


}