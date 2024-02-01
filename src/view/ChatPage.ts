import { autoinject, bindable } from 'aurelia-framework';
import { EventAggregator } from 'aurelia-event-aggregator';
import { Controller } from "script/controller/Controller";

import '../resources/css/common.css'
import { ChatState } from 'script/data/ChatState';

@autoinject()
export class ChatPage{
    subscription: Array<{dispose: ()=>void}>
    @bindable() isInited:boolean = false
    constructor(public controller:Controller,public eventChannel:EventAggregator,public chatState:ChatState){
        //signal to get all the chat room list.
        console.log("i am constructed")
        this.controller.chat.Connect()
        
    }
    attached() {
        console.log("i am attached")
    }   
    detached() {
        console.log("i am detached")
    }
    activate() {
        console.log("I am activated")
    }
    deactivate() {
        console.log("i am deactivate")
    }
    
}