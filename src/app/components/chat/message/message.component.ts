import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  @Input() content : string;
  @Input() bot: boolean = false;
  hour: string;

  constructor() {
    var date = new Date();
    this.hour = date.getHours() + ":" + date.getMinutes();
  }

  ngOnInit() {
  }

}
