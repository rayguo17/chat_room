import { Todo } from "type/type"

//modify state, how to rerender??? manually construct.
export class TodoState{
    todos:Todo[]
    constructor(){
        //console.log("state initialized")
        this.todos = []
    }
    initTodo(todos:Todo[]){
        //get from out space, get in here.
        
        //console.log(this.todos)
        //this.todos = todos
        //push could be observe...
        for( let todo of todos){
            //console.log("loop through: ",todo)
            this.todos.push(todo)
        }
        //console.log("in init orig data: ",todos)
        //console.log("in init member data: ",this.todos)
    }
    addTodo(todo:Todo){
        //other check or persistence?
        this.todos.push(todo)

    }
    removeTodo(todo_id:number){
        let index = 0
        for(let todo of this.todos){
            if (todo.id==todo_id){
                break
            }   
            index++;
        }
        if (index!==this.todos.length){
            this.todos.splice(index,1);
        }
    }
    getTodo():Todo[]{
        //(Todo) should we deep copy???? noo for observe availability.
        return this.todos
    }
}