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

  onPaste(paintText) {
    // แยกแต่ละบรรทัด (\n)
    var items = paintText.split("\n");
    items.forEach(itm => {
      // แยกแต่ละ field ด้วย Tab (\t)
      var fields = itm.split("\t");
      console.log(fields);
    });
  }

}
