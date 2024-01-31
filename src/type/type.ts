type Todo = {
    id:number
    description: string;
    done:boolean
}

type ChatRoom= {
    chatid:number,
    historyMessage:Array<ChatMessage>
}

type ChatMessage = {
    timestamp:number
    content:ChatContent|string, //dynamic type picture or text
    type:ChatMessageTypeEnum,
    
}

export class NetworkMsg{

}



//if have multiple content how to render? 
class ChatContent{

}

export enum ChatMessageTypeEnum {
    Text=0
}

export {Todo,ChatRoom,ChatMessage}