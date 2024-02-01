import { NetworkMsg } from "script/network/message";
import { ChatMessageTypeEnum } from "type/type";
import { ChatMsgEnum, MSGServiceTypeEnum } from "./MsgEnum";


export class ChatRoomJoinMsg extends NetworkMsg{
    channelName:string=""
    username:string=""
    constructor(){
        super();
        this.msgType = ChatMsgEnum.MSG_ROOM_JOIN
        this.serviceType = MSGServiceTypeEnum.Chat
    
    }
    
}

export class ChatRoomJoinSuccessMsg extends NetworkMsg{

}

export class ChatRoomJoinErrorMsg extends NetworkMsg{

}

export class ChatRoomLeaveMsg extends NetworkMsg{

}
export class ChatRoomLeaveResMsg extends NetworkMsg{

}

export class ChatRoomNewMsg extends NetworkMsg{

}

export class ChatRoomSendMsg extends NetworkMsg{

}

export class ChatRoomSendMsgRes{

}