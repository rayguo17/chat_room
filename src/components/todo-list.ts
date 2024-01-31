import { EventAggregator } from 'aurelia-event-aggregator';
import { TodoController } from './../script/controller/TodoController';
import { bindable, bindingMode, autoinject } from 'aurelia-framework';
import { TodoState } from 'script/data/TodoState';
import { Todo } from 'type/type';
import * as UI from '../ui-messages'

@autoinject()
export class TodoList{
    @bindable() todos:Todo[];
    localTodo: Todo[]
    subscription :Array<{dispose: ()=>void}> = []
    constructor(public controller:TodoController,public state:TodoState,public eventChannel:EventAggregator){
        //console.log("Todo list constructed.",this.todos)
        this.subscription.push(eventChannel.subscribe(UI.TodoInfo,(data:UI.TodoInfo)=>{
            this.todos=this.state.getTodo()
            
        }))
        this.todos = this.state.getTodo()
    }
    removeTodo(id:number){
        console.log(id)
        this.state.removeTodo(id)
    }
    checked(e:Event,id:number){
        // console.log(e.target.innerHTML)
        // console.log("checked:",id)
        // console.log("this todos: ",this.todos)
        // console.log("state todo: ",this.state.todos)
        //if other display is related should manual invoke UI update.
        return true;
    }
    attached() {
        //console.log("Todo list attached",this.todos)
    }
}