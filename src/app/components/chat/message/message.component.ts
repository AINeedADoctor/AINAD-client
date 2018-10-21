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
    var currentHour: any = date.getHours();
    if (currentHour < 10) 
      currentHour = "0" + currentHour; 

    var minutes : any = date.getMinutes() 
    if (minutes < 10) 
      minutes = "0" + minutes; 

    this.hour = currentHour + ":" + minutes;
  }

  ngOnInit() {
  }

}
