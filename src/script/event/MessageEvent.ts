import { NetworkMsg } from "script/network/message";


export class ChatRoom{
    static eventName = "Chat"
    constructor(public message:NetworkMsg){
        //message should be client message.
    }
}