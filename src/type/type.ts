type Todo = {
    id:number
    description: string;
    done:boolean
}

type ChatRoom= {
    room_id:string,
    historyMessage:Array<ChatMessage>
}

type ChatMessage = {
    timestamp:number
    content:ChatContent|string, //dynamic type picture or text
    type:ChatMessageTypeEnum,
    user_id:string, // name of user,
    room_id:string
}



//if have multiple content how to render? 
class ChatContent{

}

export enum ChatMessageTypeEnum {
    Text=0
}

export {Todo,ChatRoom,ChatMessage}