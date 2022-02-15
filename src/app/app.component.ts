import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'LTHL';
ShowSideBar: boolean = false;

  OpenSidebar() {
    this.ShowSideBar = true;
  }
  CloseSidebar() {
    this.ShowSideBar = false;
  }
}
