import { autoinject } from 'aurelia-framework';
import { EventAggregator } from 'aurelia-event-aggregator';
import { WebClient } from './WebClient';
import * as WebClientEvent from '../event/WebClientEvent'
import { WebClientConfig } from './config';
import { WebClientConnectionType } from 'script/network/webClientConnectionType';
import * as MsgEvent from '../event/MessageEvent'
import { NetworkMsg } from 'script/network/message';
import { ChatMsgEnum, MSGServiceTypeEnum } from 'script/network/MsgEnum';
//manage web interaction.
@autoinject()
export class NetworkController{
    webClientPool:Map<string,WebClient> = new Map<string,WebClient>()
    //chat client
    constructor(public eventChannel:EventAggregator){
         
        this.eventChannel.subscribe(WebClientEvent.Open,(evt: WebClientEvent.Open)=>{
            console.log("connection open:",evt.WebClient.connectionType)
            //after open, put it into the pool.
            switch (evt.WebClient.connectionType){
                case WebClientConnectionType.Chat:
                    this.webClientPool.set(evt.WebClient.connectionId,evt.WebClient)
                    let msg = new NetworkMsg()
                    msg.serviceType = MSGServiceTypeEnum.Chat
                    msg.msgType = ChatMsgEnum.MSG_CHAT_CONNECT
                    this.eventChannel.publish(new MsgEvent.ChatRoom(msg))
                default:
                    console.debug("connect type not supported:",evt.WebClient.connectionType)
            }
        }) //subscribe
        //config loading seperate 
    }
    InitConnection(config:WebClientConfig){
        let webClient = new WebClient(this.eventChannel)
        webClient.Init()
        webClient.Connect(config) // should have config loading part.
        //should wait until open then we put it into the pool.
    }
    SendMessage(msg:NetworkMsg){
        //turn network msg into json string. 
        switch (msg.serviceType){
            case MSGServiceTypeEnum.Chat:
                let webClient = this.webClientPool.get("chat")
                if(webClient!==null){
                    webClient.Send(msg)
                }
                
        }
    }
}