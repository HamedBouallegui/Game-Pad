import { Component } from '@angular/core';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent {
 //Sidebar toggle show hide function
 status = false;
 addToggle()
 {
   this.status = !this.status;       
 }

  
  }