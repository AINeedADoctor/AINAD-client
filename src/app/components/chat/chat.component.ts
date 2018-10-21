import { Component, OnInit, HostListener } from '@angular/core';
import { DialogflowService } from 'src/app/services/dialogflow.service';
import { GooglePlacesService } from 'src/app/services/google-places.service';


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  
  public message: string;
  public messages: Array<{
    content: string,
    bot: boolean
  }> = [];
  constructor(private dialogFlow: DialogflowService,
              private googlePlaces: GooglePlacesService) { }

  @HostListener('document:keypress', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.code === "Enter") {
      this.sendMessageToClank();
    }
  }

  ngOnInit() {
  }

  public sendMessageToClank() {
    if (this.message.includes("hospital")) {
      this.messages.push({ bot: false, content: this.message });
      this.mockClank("hospital");
      return;
    }

    if (this.message.includes("pharmacy")) {
      this.messages.push({ bot: false, content: this.message });
      this.mockClank("pharmacy");
      return;
    }

    this.dialogFlow.sendToClank(this.message).subscribe(
      res => {
        this.messages.push({ bot: false, content: this.message });
        this.messages.push({ bot: true, content: res});
        this.message = "";
      },
      err => { alert(err); }
    );
  }

  private mockClank(body: string) {
    this.googlePlaces.getPlace(body).subscribe(
      res => {
        this.messages.push({ bot: true, content: "<b>" + res.name + "</b>" });
      },
      err => {
        console.log(err);
      }
    )
  }
}

