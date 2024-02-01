import { WebClientConnectionType } from "script/network/webClientConnectionType"

export type WebClientConfig = {
    connectionType: WebClientConnectionType.Chat
    ip:string
    port:number
}

export type JoinRoomConfig ={
    username:string
    channelName:string
}