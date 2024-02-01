import { ChatState } from './../data/ChatState';
import { autoinject } from 'aurelia-framework';
import { EventAggregator } from 'aurelia-event-aggregator';
import { NetworkController } from './NetworkController';
import { JoinRoomConfig, WebClientConfig } from './config';
import { WebClientConnectionType } from 'script/network/webClientConnectionType';
import * as MsgEvent from '../event/MessageEvent'
import { NetworkMsg } from 'script/network/message';
import { ChatMsgEnum } from 'script/network/MsgEnum';
import { ChatRoomJoinMsg } from 'script/network/ChatClientMsg';
//glue to UI layer.

@autoinject()
export class ChatappController{
    serverIp:string = "127.0.0.1"  //should read from config in constructor
    port:number = 10808 
    subscription: Array<{dispose: ()=>void}>
    constructor(public eventChannel:EventAggregator, public network:NetworkController,public chatState:ChatState){
        //here it is chat client. should have a way to manipulate it? through network controller? 
        this.eventChannel.subscribe(MsgEvent.ChatRoom,(evt:MsgEvent.ChatRoom) =>{
            switch (evt.message.msgType) {
                case ChatMsgEnum.MSG_CHAT_CONNECT:
                    console.log("msg chat connect received")
                    setInterval(()=>{
                        console.log("controller view: ",this.chatState)
                    },3000)
                    this.chatState.isInited = true //use different handler to solve this. 
                    break
                default:
                    console.log("chat msg type not supported yet: ",evt.message.msgType)
            }
        })
    }
    Init(){
        console.log("chat app initialization")
        //connect return some option that can be done.
    }
    Connect(){
        //give out the config
        let config:WebClientConfig = {
            connectionType:WebClientConnectionType.Chat,
            ip:this.serverIp,
            port:this.port,
        }
        this.network.InitConnection(config)
    }
    //use useraction to aggregate all the user action into big controller. but here we handle it separately.
    JoinRoom(username:string,channelName:string){
        //turn room config into message.
        let reqMsg: ChatRoomJoinMsg = new ChatRoomJoinMsg()
        reqMsg.channelName=channelName
        reqMsg.username = username
        this.network.SendMessage(reqMsg)
    }


}