

export class NetworkMsg{
    public serviceType:number //first-layer
    public msgType:number //second-layer
}
//handle
export class NetworkMsgHandler{
    //from websocket to network msg? 
    
}

export class BinaryMsgHandler{

}
//can we extract to a library? socket.io golang?  need library for generic 
export class TextMsgHandler{
    
    public static convertTextMsg(input:string) :NetworkMsg{

        return //should return the network msg types.
    } 

    static ConvertOneMember(msg:any, input:any) {
        let new_msg:Object = new Object();
		let memberNameList: Map<string, string> = new Map<string, string>();
		
		for(let member in msg) {
            //console.log("class member = "+member);
            let member_name:string = member.toString();
            if(member_name!="constructor") {
				// Find corresponse member in input and copy it"s value
				let match:boolean = false;
				for(let input_mem in input)	{
					let member_name_tmp:string = member_name[0].toUpperCase()+member_name.substr(1); // change first letter to upper case
					let member_name_short = member_name_tmp.replace(/[a-z_]/g, ""); // remove lower case letter
					//console.log("check member: "+member_name+"->"+member_name_short+" : "+input_mem);
					// Check member name short form duplicate case (i.e. BetLimitMax and BetLimitMin)
					let duplicateCount: number = 0;
					while(true) {
						if(typeof memberNameList.get(member_name_short) == undefined || memberNameList.get(member_name_short) == null)
							break;
						else {
							duplicateCount++;
							member_name_short = member_name_tmp.replace(/[a-z_]/g, "") + duplicateCount;
						}
					}
					if(member_name_short == input_mem) {
						//console.log("member type: "+(typeof msg[member_name]));
						if(typeof msg[member_name] == "object") {
							if(!!msg[member_name] && Array === msg[member_name].constructor) { // check if it is array
								if(typeof msg.createArrayElement === "function") {
									let element: any = msg.createArrayElement(member_name);
									if(element != null) {
										for(let item in input[member_name_short]) {
											//console.log("input array: ");
											//console.log(input[member_name_short]);
											element = msg.createArrayElement(member_name);
											msg[member_name].push(this.ConvertFromMsg(element, input[member_name_short][item]));
										}
									}
									else
										msg[member_name] = input[member_name_short];
								}
								else
									msg[member_name] = input[member_name_short];
							}
							else
								msg[member_name] = this.ConvertFromMsg(msg[member_name], input[member_name_short]);
						}
						else
							msg[member_name] = input[member_name_short];
						match = true;
					}
					// find mapping member, break and do next member
					if(match) {
						memberNameList.set(member_name_short, member_name_tmp);
						//console.log(memberNameList);
						break;
					}
				}
				// No matching convertion, use defaule value
				//if(msg[member_name] == null) new_msg[member_name] = msg[member_name];
            }
        }
		return msg;
	}
    static ConvertFromMsg(msg:any, input:any) {
		//console.log("ConvertFromMsg: msg->"+JSON.stringify(msg)+", input->"+JSON.stringify(input));

		// both is array case
		if(!!msg && Array === msg.constructor && !!input && Array === input.constructor) {
			for(let member of input) {
				if(typeof member != "object") {
					msg.push(member);
				}
				else {
					// Object member, try convert one by one
					//console.warn(msg);
					//console.warn(input);
					if(msg.length != undefined && msg.length != null) {
						let copyArr = [...msg];
						msg = [];
						for(let item in copyArr) {
							if(input[item] != undefined && input[item] != null)
								msg.push(this.ConvertOneMember(copyArr[item], input[item]));
						}
					}
				}
			}
		}
		else
			msg = this.ConvertOneMember(msg, input);
        
		//console.log("ConvertFromMsg: return msg->"+JSON.stringify(msg));
		//console.warn("ConvertFromMsg: return msg->"+JSON.stringify(msg));
		return msg;
	}
}

