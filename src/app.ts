import { autoinject } from 'aurelia-framework';
import { PLATFORM } from 'aurelia-pal';
type Todo = {
  description:string;
  done:boolean
}
import {RouterConfiguration, Router} from 'aurelia-router';
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import 'bootstrap-icons/font/bootstrap-icons.min.css'
// require('bootstrap/dist/css/bootstrap.min.css')
// require('bootstrap')

@autoinject()
export class App {
  public message:string = "this is a message"
  
  router:Router
  configureRouter(config: RouterConfiguration, router: Router): void {
    this.router = router;
    //config.title = 'AppBox';
    config.map([
      { route: ['','home'], name: 'home', moduleId:PLATFORM.moduleName("view/LandingPage","LandingPage"),  title:'Home',nav:true },
      {
        route:'todo',name:"todo",moduleId:PLATFORM.moduleName("view/TodoPage","TodoPage"),title:"Todo",nav:true
      },{
        route:'chat',name:"chat",moduleId:PLATFORM.moduleName("view/ChatPage","ChatPage"),title:"Chat",nav:true
      }
    ]);

  }
}

