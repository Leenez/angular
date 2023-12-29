import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  styles: [`.hidden {display: none}`],
  
})
export class AppComponent {
  title = 'ex3';
  hideParagraph: boolean = false;
  numberOfClicks: any = [];

  constructor() {}

  togleHide() {(this.hideParagraph === false) ? this.hideParagraph = true : this.hideParagraph = false;
                this.numberOfClicks.push(this.numberOfClicks.length + 1)}
}
