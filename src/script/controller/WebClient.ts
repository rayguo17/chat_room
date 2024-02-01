import { NetworkMsg } from 'script/network/message';
import { autoinject } from 'aurelia-framework';
import { EventAggregator } from 'aurelia-event-aggregator';
import { Todo } from 'type/type';
import { WebClientConfig } from './config';
import * as WebClientEvent from '../event/WebClientEvent'
import { WebClientConnectionType } from 'script/network/webClientConnectionType';
import { NetworkMsgConvertor } from 'script/util/networkMsgConvertor';

@autoinject()
export class WebClient{
    websocket:WebSocket
    ip:string = ""
    port:number =-1
    isInited:boolean = false // should use state transfer instead
    messageQueue:Map<string,Array<any>> = null
    timeout:number=5000
    connectionType:number
    connectionId:string
    isConnected:boolean
    constructor(public eventChannel:EventAggregator){
        
    }
    Init() {
		if ("WebSocket" in window) {
			this.messageQueue = new Map<string, Array<any>>();
			this.isInited = true;
			return true;
		}
		else {
			alert("Not supported for this Browser: " + navigator.userAgent);
			return false;
		}
	}
    Send(msg: NetworkMsg){
        if (this.isConnected){
            this.websocket.send(NetworkMsgConvertor.ConvertToMessageStr(msg))
        }
        
        
    }
    Connect(config:WebClientConfig){
        //different type websocket choose different url working on different service
        if(this.websocket!=null){
            return
        }
        let protocol:string = (window.location.protocol === "https:") ? "wss://" : "ws://";
        this.ip = config.ip
        this.port = config.port
        this.connectionType = config.connectionType
        switch (this.connectionType){
            case WebClientConnectionType.Chat:
                this.connectionId="chat"
                break
            default:
                this.connectionId = "default"        
                console.error("connection type not supported!",this.connectionType)
                //to gracefully handle, should we notify?
        }
        
        if("WebSocket" in window!=null && this.isInited){
            this.websocket = new WebSocket(protocol+this.ip+":"+this.port+"/ws")
            this.websocket.binaryType = "arraybuffer"
            this.websocket.onopen = ()=>{
                console.log("ws connection established")
                this.eventChannel.publish(new WebClientEvent.Open(this))
                this.isConnected = true
            }
            this.websocket.onmessage = (evt)=>{
                //handle websocket message to simple app data type
                let tmp:Todo = {
                    id:-1,
                    description:"test tmp object",
                    done:false
                }
                // const reader = new FileReader()
                // reader.onloadend = ()=>{
                    
                // }
                // reader.readAsText(evt.data)
                this.websocket.send(JSON.stringify(tmp))
                console.log("ws message received",evt) 
                console.log("ws message content",evt.data)
                
            }
            this.websocket.onclose = ()=>{
                console.log("ws connection closed!")
            }
        }
    }

}