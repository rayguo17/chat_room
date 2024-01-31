import { EventAggregator } from 'aurelia-event-aggregator';
import { ChatRoom } from 'type/type';
export class ChatState{
    
    rooms: Array<ChatRoom>;
    activeRoom: ChatRoom;
    activeRoomId: number
    constructor(){
        this.rooms = []
        this.activeRoomId=-1
    }
}