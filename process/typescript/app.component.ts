import {Component} from 'angular2/core';

@Component({
    selector : 'my-app',
    templateUrl: 'partials/app.html'

})

export class AppComponent {
    name= 'John';
    artists = [ 'Johnny Flores', 'Adriana Sandoval'];
    onClick(e) {
        this.name=e.target.innerHTML;
       console.log(e.target.innerHTML);
    }
}
