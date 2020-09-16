import { Component, OnInit } from '@angular/core';
import{NgForm} from '@angular/forms'
import { Router } from '@angular/router';
import{ RegistrationService } from  "../registration.service"
import{ User } from '../user'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user =new User();
  msg="";
  constructor(private _service:RegistrationService,private _router:Router) { }

  ngOnInit(): void {
  }
  loginUser()
  {
   this._service.loginformUser(this.user).subscribe(
     data =>{
       console.log("Response  rececived");
       this._router.navigate(['/userprofile'])

      },
     error =>{
       console.log("Exception occured");
       this.msg="LoginDenied,Please try again with valid email and password";
     }

   )

  }
  gotoregistration()
  {
    this._router.navigate(['/newuser'])
  }
}
