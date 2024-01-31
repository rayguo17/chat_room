import { autoinject } from 'aurelia-framework';
import { EventAggregator } from 'aurelia-event-aggregator';

@autoinject()
export class WebClient{
    websocket:WebSocket
    ip:string = "127.0.0.1"
    port:number = 10808
    isInited:boolean = false
    messageQueue:Map<string,Array<any>> = null
    timeout:number=5000

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
    Connect(){
        if(this.websocket!=null){
            return
        }
        let protocol:string = (window.location.protocol === "https:") ? "wss://" : "ws://";
        if("WebSocket" in window!=null && this.isInited){
            this.websocket = new WebSocket(protocol+this.ip+":"+this.port+"/ws")
            this.websocket.onopen = ()=>{
                console.log("ws connection established")
                
            }
            this.websocket.onmessage = (evt)=>{
                //handle websocket message to simple app data type 
            }
            this.websocket.onclose = ()=>{
                console.log("ws connection closed!")
            }
        }
    }

}