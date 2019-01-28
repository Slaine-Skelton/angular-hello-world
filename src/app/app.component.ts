import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'App now using Github';
  thingsToDo = [
    "Learn Javascript",
    "Learn Angular",
    "Learn Redux"
  ];
  thingsCompleted = [];

  summary(): string {
    return `${this.thingsToDo.length} done / ${this.thingsCompleted.length} to do.`;
  }

  constructor() {
    setInterval(() => {
      this.thingsToDo.push('make coffee.');
    }, 1000);
  }
}
