
import * as UI from '../ui-messages';
import { EventAggregator } from 'aurelia-event-aggregator';
import { autoinject } from 'aurelia-framework';
import { TodoState } from 'script/data/TodoState';
import { TodoController } from './../script/controller/TodoController';
import { Todo } from 'type/type';
import { bindable, } from 'aurelia-framework';
import { Controller } from 'script/controller/Controller';

@autoinject()
export class TodoPage{
    //when to update the backend data? manually save?
    todoDescription:string
    subscription :Array<{dispose: ()=>void}> = []
    constructor(public controller :Controller,public state:TodoState,eventChannel:EventAggregator){
        this.todoDescription = ''
    }
    
    todosChange(){
        console.log("changed observe")
    }
    activate() {
        this.controller.todo.initTodo()
    }
    //get data from state
}