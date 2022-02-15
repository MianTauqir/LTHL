import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-erection',
  templateUrl: './erection.component.html',
  styleUrls: ['./erection.component.css']
})
export class ErectionComponent implements OnInit {
  isShown: boolean = false ; // hidden by default
  listvisibility : boolean = true;
  detailvisibility : boolean = false;
  constructor() { }

  ngOnInit(): void {

  }


  showlist() {
    this.listvisibility = true;
    this.detailvisibility = false;
  }
  showdetail() {
    this.listvisibility = false;
    this.detailvisibility = true;
  }
  toggleShow() {

    this.isShown = ! this.isShown;
    
    }

}
