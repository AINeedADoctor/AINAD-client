import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DialogflowService {

  private url: string = "https://api.dialogflow.com/v1/";
  private token: string = "140c66c45da64053b110827f81434377";

  constructor(private http: HttpClient) { }

  sendToClank(message:string): Observable<string> {
    const headers = this.authHeaders();
    return this.http.get(this.url + "query?v=20150910&query=" + message + "&lang=en&sessionId=84414206-6807-4f73-a4de-6f4d8fa129c7", headers).pipe(
      map((r: any) => r.result.fulfillment.speech),
    );
  }

  private authHeaders() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': "Bearer " + this.token
    });

    return { headers };
  }
}
