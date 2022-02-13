import { Component, OnInit } from '@angular/core';
 import { Select2OptionData } from 'ng-select2';
 import { Options } from 'select2';

@Component({
  selector: 'app-lthl-leader',
  templateUrl: './lthl-leader.component.html',
  styleUrls: ['./lthl-leader.component.css']
})
export class LTHLLEADERComponent implements OnInit {
showcheck : boolean = false;
 public exampleData: Array<Select2OptionData> = [];
 public options: Options = {};


constructor() { }

  ngOnInit(): void {

    this.exampleData = [
      {
        id: 'basic1',
        text: 'Basic 1'
      },
      {
        id: 'basic2',
        disabled: true,
        text: 'Basic 2'
      },
      {
        id: 'basic3',
        text: 'Basic 3'
      },
      {
        id: 'basic4',
        text: 'Basic 4'
      }
    ];
    this.options = {
      multiple: true,
      closeOnSelect: false,
      width: '300'
    };
  }


  ShowMe() {
      this.showcheck = !this.showcheck;
  }
}
