import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admission-list',
  templateUrl: './admission-list.component.html',
  styleUrls: ['./admission-list.component.scss']
})
export class AdmissionListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onPaste(ev) {
    // console.log(ev);
    var items = ev.split("\n"); 
    // console.log(items);
    items.forEach(itm => {
      var fields = itm.split("\t");
      console.log(fields);
    });
  }

}
