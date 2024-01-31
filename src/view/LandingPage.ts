import { autoinject } from 'aurelia-framework';
import { EventAggregator } from 'aurelia-event-aggregator';
import { Controller } from 'script/controller/Controller';

@autoinject()
export class LandingPage {
    constructor(public eventChannel:EventAggregator, public controller:Controller){
        console.log("landing page initialization")
    }
}