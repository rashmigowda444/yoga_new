import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';

import { PhpService } from '../../services/php.service';
@Component({
  selector: 'app-ordernow',
  templateUrl: './ordernow.component.html',
  styleUrls: ['./ordernow.component.css']
})
export class OrdernowComponent implements OnInit {

  user={
    fname:'',
    email:'',
    phone:'',
    book:''
   
}
message:any;

constructor(private phpService: PhpService,    private router: Router) { }


  ngOnInit() {
  }
  onRegister(){   
    this.phpService      
    .onRegister(this.user)     
    .subscribe(()=> this.goBack());
  } 
  goBack(){ 
    // this.myForm.reset();
     this.router.navigate(['/ordernow']);
     this.message="Pearl Vedic Book sample pdf has been sent to your email. Thank you..!!";
  }
}
