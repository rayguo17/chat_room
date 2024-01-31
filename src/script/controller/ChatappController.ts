import { ChatState } from './../data/ChatState';
import { autoinject } from 'aurelia-framework';
import { EventAggregator } from 'aurelia-event-aggregator';
import { NetworkController } from './NetworkController';

@autoinject()
export class ChatappController{
    constructor(public eventChannel:EventAggregator, public network:NetworkController,public chatState:ChatState){

    }
    Init(){
        console.log("chat app initialization")
        this.network.InitChatConnection() //connect return some option that can be done.
    }

}