import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  username: string = "";
  disableButton: boolean = true;

  constructor() {
    setInterval(() => {
      if (this.username.length > 0) {
        this.disableButton = false;
      } else {
        this.disableButton = true;
      }
    }, 200)
  }

  onResetUser() {
    this.username = "";
  }
}
