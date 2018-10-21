import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable()
export class GooglePlacesService {
  key = 'AIzaSyC2T_XfnjXXlGtiN5X7wDQBJ7Zh86R_igc';
  public location: Coordinates;

  constructor(private http: HttpClient) { }

  // The results[0] to get the first found location
  // name contains the local name and vicinity contains the address
  // https://www.google.com/maps/@[geometry.location.lat],[geometry.location.lng]
  getPlace(placeType: string) :Observable<any> {
    return this.http.get('https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/' 
                            + 'json?location='+ String(this.location.latitude) + ',' + String(this.location.longitude)
                            + '&radius=20000&type='+ placeType +'&keyword=cruise&'
                            + '&key=' + this.key).pipe(
                              map((res: any) => res.results[0]),
                              map(res => {
                                let lat = res.geometry.lat;
                                let lng = res.geometry.lng;

                                return {
                                  google_link: "https://www.google.com/maps/@" + lat + "," + lng,
                                  name: res.name,
                                  adr: res.vicinity
                                }
                              })
                            );
  }
}