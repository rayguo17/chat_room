export enum MSGServiceTypeEnum{
    Auth = 0,
    Todo=1,
    Chat=2
}

export enum ChatMsgEnum{
    MSG_CHAT_CONNECT = 0,
    MSG_ROOM_JOIN = 1,
    MSG_ROOM_JOIN_SUCCESS = 2,
    MSG_ROOM_JOIN_ERROR = 3,
    MSG_ROOM_LEAVE = 4,
    MSG_ROOM_LEAVE_RES=5,
    MSG_ROOM_NEW_MESSAGE = 6,
    MSG_ROOM_SEND_MESSAGE = 7,
    MSG_ROOM_SEND_MESSAGE_RES = 8, //similar websocket like openai.
}

