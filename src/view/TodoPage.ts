
import * as UI from '../ui-messages';
import { EventAggregator } from 'aurelia-event-aggregator';
import { autoinject } from 'aurelia-framework';
import { TodoState } from 'script/data/TodoState';
import { TodoController } from './../script/controller/TodoController';
import { Todo } from 'type/type';
import { bindable, } from 'aurelia-framework';

@autoinject()
export class TodoPage{
    //when to update the backend data? manually save?
    todoDescription:string
    subscription :Array<{dispose: ()=>void}> = []
    constructor(public controller :TodoController,public state:TodoState,eventChannel:EventAggregator){
        this.todoDescription = ''
    }
    todosChange(){
        console.log("changed observe")
    }
    activate(state:TodoState) {
        //console.log("activate state:",state)
        // this.todos = state.todos
        
    }
    //get data from state
}