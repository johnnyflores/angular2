import {Component} from 'angular2/core';

@Component({
    selector : 'my-app',
    templateUrl: 'partials/app.html'

})

export class AppComponent {
    name: String;
    artists: any;

    constructor() {
     this.name= 'Bob';
     this.artists = [
        {
            name: 'Johnny Flores',
            school: 'Harvard'
        },
        {
            name: 'Adriana Sandoval',
            school: 'Bogota School'
        }
     ]
    }
}
