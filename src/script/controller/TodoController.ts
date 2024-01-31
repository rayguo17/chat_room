import { autoinject } from 'aurelia-framework';
import { TodoState } from './../data/TodoState';
import axios from 'axios';
import {EventAggregator} from 'aurelia-event-aggregator'
import * as UI from 'ui-messages'
import { Todo } from 'type/type';

@autoinject()
export class TodoController{
    constructor(public todoState:TodoState,public eventChannel:EventAggregator){
        //console.log("Controller initialized!!!")
        axios.get("http://localhost:5000/todos/").then((res)=>{
            //console.log(res.data)
            todoState.initTodo(res.data)
            //console.log("after init:",res.data)
            //this.eventChannel.publish(new UI.TodoInfo())
            
        })
        //should subscribe to user action.
        
    }
    async addTodo(des:string){
        let item:Todo = {
            id:-1,
            description:des,
            done:false
        }
        let res = await axios.post("http://localhost:5000/todos/",item)
        console.log(res.data)
        this.todoState.addTodo(res.data)
    }
    async removeTodo(id:number){
        
    }
    userAction(){

    }

    
}