import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable} from 'rxjs';
import { DataMail } from './data-mail';
import jwtDecode from 'jwt-decode';
import { Router } from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userData = new BehaviorSubject(null);

  constructor(private http:HttpClient , private _Router:Router) 
  {
    if(localStorage.getItem('token') != null)
    {
      this.saveUserData()
    }
  }

  saveUserData()
  {
    let encodedToken =JSON.stringify(localStorage.getItem('token'));
    let decodedToken:any = jwtDecode(encodedToken)
    this.userData.next(decodedToken);
    console.log(this.userData);
  }

  signUp(registerData:DataMail):Observable<any>
  {
    return this.http.post(`https://sticky-note-fe.vercel.app/signup`,registerData)
  }

  signIn(loginData:DataMail):Observable<any>
  {
    return this.http.post(`https://sticky-note-fe.vercel.app/signin`,loginData)
  }

  logOut()
  {
    localStorage.removeItem('token');
    this.userData.next(null);
    this._Router.navigateByUrl('/login')
  }
}
