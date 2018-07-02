import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import { PhpService } from '../../services/php.service';
@Component({
  selector: 'app-bookappointment',
  templateUrl: './bookappointment.component.html',
  styleUrls: ['./bookappointment.component.css']
})
export class BookappointmentComponent implements OnInit {

  constructor(private phpService: PhpService,    private router: Router) { }

  user = {   
    fname: "",   
    phone: "",  
    email: "",    
    comment: "" ,
    service:"",
    startdate:"",
    enddate:""
    }
  ngOnInit() {
  }

  onBooking(){   
    this.phpService      
    .onBooking(this.user)     
    .subscribe(()=> this.goBack());
  } 
  goBack(){ 
    // this.myForm.reset();
     this.router.navigate(['/home']);
     
  }

}
