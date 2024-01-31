import { autoinject } from 'aurelia-framework';
import { EventAggregator } from 'aurelia-event-aggregator';
import { WebClient } from './WebClient';


//manage web interaction.
@autoinject()
export class NetworkController{
    webClientPool:Map<string,WebClient>
    
    constructor(public eventChannel:EventAggregator){
        this.eventChannel //subscribe
        //config loading seperate 
    }
    InitChatConnection(){
        let chatClient = new WebClient(this.eventChannel)
        chatClient.Init()
        chatClient.Connect() // should have config loading part.
    }
}