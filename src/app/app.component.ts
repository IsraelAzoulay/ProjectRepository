import { Component, OnInit, ViewChild } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';
import { ApiService } from './services/api.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'CRM Program';

  displayedColumns: string[] = ['clientName', 'clientID', 'productType', 'description','price','paymentMethod','purchaseDate','comment','action'];
  dataSource!: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  //Class Functions
  constructor(private dialog: MatDialog, private api:ApiService){}

  ngOnInit(): void {
    this.getAllClients();
  }

  openDialog() {
    this.dialog.open(DialogComponent, {
      width: '30%'
     
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  getAllClients(){
    this.api.getClient().subscribe({
      next:(res)=>{
        this.dataSource=new MatTableDataSource(res);
        this.dataSource.paginator=this.paginator;
        this.dataSource.sort=this.sort;
      },
      error: ()=>{
        alert("Error while fetching the clients");
      }
    })
  }

  updateClient(){

  }

  deleteClient(){

  }

  
  menuOptions: string[] = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];

  //logInDialog(){ }


}
