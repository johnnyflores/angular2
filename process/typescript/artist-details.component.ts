import {Component} from 'angular2/core';
import {Artist} from './artist';

@Component({
    selector : 'artist-details',
    templateUrl: 'partials/artistdetails.html',
    styleUrls: ['css/app-details.css'],
    inputs: ['artist']


})

export class ArtistDetailsComponent {}
