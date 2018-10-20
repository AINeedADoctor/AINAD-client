import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class GooglePlacesService {
  key = 'AIzaSyC2T_XfnjXXlGtiN5X7wDQBJ7Zh86R_igc';
  location: Coordinates;
  constructor(private http: HttpClient) { }

  // The results[0] to get the first found location
  // name contains the local name and vicinity contains the address
  // https://www.google.com/maps/@[geometry.location.lat],[geometry.location.lng]
  getPlace(placeType: string) {
    navigator.geolocation.getCurrentPosition((pos)=>this.location=pos.coords);
    return this.http.get('https://maps.googleapis.com/maps/api/place/nearbysearch/' 
    + 'json?location='+ String(this.location.latitude)+','+String(this.location.longitude)
    + '&radius=20000&type='+ placeType +'&keyword=cruise&'
    + '&key=' + this.key);
  }
}