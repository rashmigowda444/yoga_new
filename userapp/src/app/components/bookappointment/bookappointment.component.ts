import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bookappointment',
  templateUrl: './bookappointment.component.html',
  styleUrls: ['./bookappointment.component.css']
})
export class BookappointmentComponent implements OnInit {

  constructor() { }
  user = {   
    fname: "",   
    phone: "",  
    email: "",   
    subject: "", 
    comment: "" 
    }
  ngOnInit() {
  }

  onSubmit(){

  }

}
