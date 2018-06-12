import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';
import 'rxjs/add/operator/map';

@Injectable()
export class PhpService {

  
  //checkMe:any;

  constructor(private _http:Http) { }

  // getServices(){
  //   return this._http.get('http://54.202.103.240/php1/services.php')
  //     .map(res=>{
  //       // console.log(res);
  //       return res.json();
  //     });
  // }
  // getCourses(){
  //   return this._http.get('http://localhost/yoga/userapp/src/php/courses.php')
  //     .map(res=>{
  //       // console.log(res);
  //       return res.json();
  //     });
  // }
  onSubmit(info){    
    return this._http.post("http://54.202.103.240/php1/insert.php", info)
    .map(()=>"");  
  }

  onRegister(info){    
    return this._http.post("http://54.202.103.240/php1/register.php", info)
    .map(()=>"");  
  }
  onEnroll(info){    
    return this._http.post("http://localhost/php1/enroll.php", info)
    .map(()=>"");  
  }
}
