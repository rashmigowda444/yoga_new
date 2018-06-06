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
     this.router.navigate(['/home']);
  }
}
