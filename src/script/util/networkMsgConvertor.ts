import { NetworkMsg } from "script/network/message";

export class NetworkMsgConvertor{
    static ConvertToMessageStr(msg:NetworkMsg){
        return JSON.stringify(msg)
    }
    static ConverFromMessageStr(input:string):NetworkMsg {
        let object = JSON.parse(input)
        //should switch case....
        return
    }
}