import { autoinject } from 'aurelia-framework';
import { EventAggregator } from 'aurelia-event-aggregator';
import { TodoController } from './TodoController';
import { ChatappController } from './ChatappController';

@autoinject()
export class Controller{
    constructor(public todo:TodoController,public eventChannel:EventAggregator, public chat:ChatappController){
        chat.Init()    
    }

}