import { Component, OnInit } from '@angular/core';
import { FormGroup , FormControl , Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private _AuthService:AuthService , private _Router:Router , private toastr:ToastrService) { }

  isLoading:boolean = false;

  loginForm:FormGroup = new FormGroup({
    'email' :new FormControl(null , [Validators.required , Validators.email]),
    'password' :new FormControl(null , [Validators.required , Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,10}$/)]),
  })

  submitForm()
  {
    if(this.loginForm.invalid)
    {
      return;
    }
    this.isLoading = true;

    this._AuthService.signIn(this.loginForm.value).subscribe( {
      next : (response) => 
      {
        if(response.message == 'success')
        {
          this.toastr.success(response.message , 'Hello');
          localStorage.setItem('token' , response.token)
          this.isLoading = false;
          this._AuthService.saveUserData()
          this._Router.navigateByUrl('/home')
        }
        else 
        {
          this.toastr.error(response.message ,'Sorry');
          this.isLoading = false;
        }
      }
    })
  }


  ngOnInit(): void {
  }

}
