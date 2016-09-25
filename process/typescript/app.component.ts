import {Component} from 'angular2/core';

@Component({
    selector : 'my-app',
    templateUrl: 'partials/app.html'

})

export class AppComponent {
    name= 'John';
    artists = [ 'Johnny Flores', 'Adriana Sandoval'];
    onClick(myName, myElement) {
        this.name=myName;
        (myElement).style.backgroundColor="#FECE4E";
    }
    addArtist(myArtist) {
        this.artists.push(myArtist);
    }
}
