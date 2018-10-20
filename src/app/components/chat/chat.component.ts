import { Component, OnInit } from '@angular/core';
import { DialogflowService } from 'src/app/services/dialogflow.service';


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
  constructor(private dialogFlow: DialogflowService) { }

  ngOnInit() {
  }

  public sendMessageToClank() {
    this.dialogFlow.sendToClank(this.message).subscribe(
      res => {
        this.messages.push({ bot: false, content: this.message });
        this.messages.push({ bot: true, content: res});
        this.message = "";
      },
      err => { alert(err); }
    );
  }
}
