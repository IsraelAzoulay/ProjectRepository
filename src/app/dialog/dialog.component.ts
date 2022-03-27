import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
  clientForm!:FormGroup;

  constructor(private formBuilder: FormBuilder, private api:ApiService, private dialogRef:MatDialogRef<DialogComponent>) { }

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

  addClient(){
    if(this.clientForm.valid){
      this.api.postClient(this.clientForm.value).subscribe({
        next:(res)=>{
          alert("Client added successfuly");
          this.clientForm.reset();
          this.dialogRef.close();
        },
        error:()=>{
          alert("Error while adding the client");
        }
      })
    }
    else{
      alert("Please fill all the fields before saving");
    }
  }

  
  

  
}

