import { EventAggregator } from 'aurelia-event-aggregator';
import { Controller } from "script/controller/Controller";

import '../resources/css/common.css'

export class ChatPage{
    constructor(public controller:Controller,public eventChannel:EventAggregator){
        //signal to get all the chat room list.
        
    }
    
}