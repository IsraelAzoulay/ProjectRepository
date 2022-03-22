import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  constructor() { }
  
  paymentType:string[]=['תשלום חד-פעמי', 'הוראת קבע'];

  ngOnInit(): void {
   

  }


}
