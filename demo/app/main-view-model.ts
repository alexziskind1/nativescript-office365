import {Observable} from 'data/observable';
import * as frameModule from "ui/frame";
import * as o365 from 'nativescript-office365';

export class HelloWorldModel extends Observable {
  public message: string;

  constructor() {
    super();
  }

  public onTap() {
    o365.login()
      .then(()=>{
        console.log('logged in');
        frameModule.topmost().navigate('explorer');
      })
      .catch((er)=>{
        console.log(er);
      });
  }
}