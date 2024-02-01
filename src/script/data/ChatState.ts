import { EventAggregator } from 'aurelia-event-aggregator';
import { ChatRoom } from 'type/type';


export class ChatState{
    isInited:boolean
    rooms: Array<ChatRoom>;
    activeRoom: ChatRoom;
    activeRoomId: number
    isJoined:boolean
    constructor(){
        this.rooms = []
        this.activeRoomId=-1
        this.isInited = false
        this.isJoined = false
    }
}