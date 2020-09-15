import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';
import{ HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private _http:HttpClient) { }
  public loginformUser(user:User):Observable<any>
  {
   return this._http.post<any>("http://localhost:8998/login",user);
  }
  public registerformUser(user:User):Observable<any>
  {
    return this._http.post<any>("http://localhost:8998/registeruser",user);
  }
  public verifyotp(userotp:any):Observable<any>
  {
    console.log(userotp);
    return this._http.post<any>("http://localhost:8998/emailverification",userotp);
  }
}
