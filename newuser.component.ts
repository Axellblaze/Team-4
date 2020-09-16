import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationService } from '../registration.service';
import { User } from '../user';
import {FormGroup,FormControl} from '@angular/forms';

@Component({
  selector: 'app-newuser',
  templateUrl: './newuser.component.html',
  styleUrls: ['./newuser.component.css']
})
export class NewuserComponent implements OnInit {
  user=new User();
  msg=" ";
  code;
  num;
  newuser;
  otpdata:Array<String>=[];
  constructor(private _service:RegistrationService,private _router:Router) {
    this.num=Math.floor(100000 + Math.random() * 900000);
  } 

  ngOnInit():void
  {
    this.newuser= new FormGroup(
      {
        code:new FormControl()
      } 
    );   
  }

    
  
  registerUser()
  {
    this._service.registerformUser(this.user).subscribe(
      data=>{
        console.log("Success");
        this._router.navigate(['/Login']);
      },
      error=>{
       console.log("Unsuccess");
       this.msg="Registeration error occured,Please fill valid details";
      }
    )
  }
  sendotp()
{
  this.otpdata.push(this.num);
  this.otpdata.push(this.user.emailId);
  this.otpdata.push(this.user.firstName);
  this._service.verifyotp(this.otpdata).subscribe();
 
}
Verifyotp(otp)
{
  if(otp==this.num)
  {
    console.log("success");
  }
  else{
    console.log("failed");
  }
}
}
