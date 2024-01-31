import { EventAggregator } from 'aurelia-event-aggregator';
import { bindable, autoinject, bindingMode } from 'aurelia-framework';
import { TodoController } from 'script/controller/TodoController';
import { TodoState } from 'script/data/TodoState';

@autoinject()
export class TodoForm{
    @bindable({defaultBindingMode:bindingMode.twoWay, name:'todoDescription',attribute:'todo-description'})todoDescription:string
    constructor(public controller:TodoController,public state:TodoState,public eventChannel:EventAggregator){

    }    
    handleFormChange(e:Event){

        console.log("handle form change")
        return true
    }
    handleSubmit(){
        //1. child call parent controller modify 
        this.controller.addTodo(this.todoDescription).then(()=>{
            this.todoDescription=''
        })
        console.log("todoDescription: ",this.todoDescription)
        console.log("add button clicked!")
    }
}