import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WakeUpHerokuService {

  // After half an hour without being used, heroku servers goes down
  // This service has the responsability to wake up the server
  constructor(private http: HttpClient) { }

  wakeUp() {
    return this.http.get("https://cors-anywhere.herokuapp.com/https://ai-nad-api.herokuapp.com");
  }
}
