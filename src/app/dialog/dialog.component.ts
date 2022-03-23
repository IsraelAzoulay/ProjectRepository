import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
  clientForm!:FormGroup;

  constructor(private formBuilder: FormBuilder) { 
    
  }

  ngOnInit(): void {
   this.clientForm=this.formBuilder.group({
    clientName:['', Validators.required],
    clientId:['',Validators.required],
    productType:['',Validators.required],
    description:['',Validators.required],
    price:['',Validators.required],
    paymentMethod:['',Validators.required],
    purchaseDate:['',Validators.required],
    comment:['',Validators.required]
   })


  }


  
}
