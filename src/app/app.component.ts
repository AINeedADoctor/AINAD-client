import { Component } from '@angular/core';
import { GooglePlacesService } from './services/google-places.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AINeedADoctor';

  constructor(googlePlaces: GooglePlacesService) {
    navigator.geolocation.getCurrentPosition((pos) => {
      googlePlaces.location = pos.coords;
    });
  }
}
