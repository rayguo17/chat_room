import { EventAggregator } from "aurelia-event-aggregator";
import { Controller } from "script/controller/Controller";
import { ChatState } from "script/data/ChatState";

export class ChatFeed{
    constructor(public eventChannel:EventAggregator, public controller:Controller,public state:ChatState){
        
    }
}