import {Component} from 'angular2/core';

@Component({
    selector : 'my-app',
    templateUrl: 'partials/app.html'

})

export class AppComponent {
    name= 'John';
    artists = [ 'Johnny Flores', 'Adriana Sandoval'];
    onClick(myName) {
        this.name=myName;
    }
    addArtist(myArtist) {
        this.artists.push(myArtist);
    }
}
