import { WebClient } from './../controller/WebClient';


export class Open{
    constructor(public WebClient:WebClient){}
}

export class Close{
    constructor(public WebClient:WebClient){

    }
}

export class Error{
    constructor(public WebClient:WebClient){

    }
}