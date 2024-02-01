import { autoinject } from 'aurelia-framework';
import { EventAggregator } from "aurelia-event-aggregator";
import { Controller } from "script/controller/Controller";
import { ChatState } from "script/data/ChatState";


@autoinject()
export class ChatForm{
    username:string = ""
    channelName:string = ""
    constructor(public eventChannel:EventAggregator, public controller:Controller, public chatState:ChatState){
        
    }
    handleJoin(){
        console.log("username:",this.username)
        console.log("channelName: ",this.channelName)
        if(this.username.length!==0 && this.channelName.length!==0){
            
        }
    }

}