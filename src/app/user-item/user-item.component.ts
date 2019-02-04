import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  //template: `<h2>Using Back Tick</h2>
  //<h3>Hello, {{ personName }}</h3>
  //`,
  styleUrls: ['./user-item.component.css']
})
export class UserItemComponent implements OnInit {

  @Input() personName: string;

  constructor() { }

  ngOnInit() {
  }

}
