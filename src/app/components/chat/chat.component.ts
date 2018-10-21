import { Component, OnInit, HostListener, ViewChild, ElementRef } from '@angular/core';
import { DialogflowService } from 'src/app/services/dialogflow.service';
import { GooglePlacesService } from 'src/app/services/google-places.service';
import { trigger, transition, style, state, animate } from '@angular/animations';
import { query } from '@angular/core/src/render3';


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
  animations: [
    trigger('Fading', [
      state('void', style({ opacity: 0 })),
      state('*', style({ opacity: 1 })),
      transition(':enter', animate('1000ms ease-out')),
    ])
  ]
})
export class ChatComponent implements OnInit {

  public message: string;
  public messages: Array<{
    content: string,
    bot: boolean
  }> = [];

  @ViewChild('scrollMe') private messagesContainer: ElementRef;

  constructor(private dialogFlow: DialogflowService,
    private googlePlaces: GooglePlacesService) { }

  @HostListener('document:keypress', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.code === "Enter") {
      this.sendMessageToClank();
    }
  }

  ngOnInit() { 
    this.scrollToBottom();
  }

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  scrollToBottom(): void {
    this.messagesContainer.nativeElement.scrollTop = this.messagesContainer.nativeElement.scrollHeight;
  }

  public sendMessageToClank() {
    if (this.message === "")
      return;

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
        setTimeout(() => this.messages.push({ bot: true, content: res }), 1000);
        this.message = "";
      },
      err => { alert(err); }
    );
  }

  private mockClank(body: string) {
    this.googlePlaces.getPlace(body).subscribe(
      res => {
        this.messages.push({ bot: true, content: "<b>" + res.name + '</b><br><a href="' + res.google_link + '"><i class="fas fa-map-marker-alt"></i> Google maps</a>' });
        this.message = "";
      },
      err => {
        console.log(err);
      }
    )
  }
}

