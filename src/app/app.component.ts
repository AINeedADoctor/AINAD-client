import { Component } from '@angular/core';
import { GooglePlacesService } from './services/google-places.service';
import { WakeUpHerokuService } from './services/wake-up-heroku.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AINeedADoctor';

  constructor(googlePlaces: GooglePlacesService, wakeUp: WakeUpHerokuService) {
    // Load current coordinates
    navigator.geolocation.getCurrentPosition((pos) => {
      googlePlaces.location = pos.coords;
    });

    // Wake up the backend
    wakeUp.wakeUp().subscribe();
  }
}
