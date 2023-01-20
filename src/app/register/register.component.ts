import { Component, OnInit } from '@angular/core';
import { FormGroup , FormControl , Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private _AuthService:AuthService , private _Router:Router , private toastr:ToastrService) { }

  isLoading:boolean = false;

  registerForm:FormGroup = new FormGroup({
    'first_name' :new FormControl(null,[Validators.required , Validators.minLength(3) , Validators.maxLength(10)]),
    'last_name' :new FormControl(null , [Validators.required , Validators.minLength(3) , Validators.maxLength(10)]),
    'age' :new FormControl(null , [Validators.required , Validators.min(16) , Validators.max(80)]),
    'email' :new FormControl(null , [Validators.required , Validators.email]),
    'password' :new FormControl(null , [Validators.required , Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,10}$/)]),
  })

  submitForm()
  {
    if(this.registerForm.invalid)
    {
      return;
    }
    this.isLoading = true;

    this._AuthService.signUp(this.registerForm.value).subscribe( {
      next : (response) => 
      {
        console.log(response);
        if(response.message == 'success')
        {
          this.toastr.success(response.message , 'Hello');
          this.registerForm.reset();
          this.isLoading = false;
          this._Router.navigateByUrl('/login')
        }
        else 
        {
          this.toastr.error(response.errors.email.message ,'Sorry');
          this.isLoading = false;
        }
      }
    })
  }

  

  ngOnInit(): void {
  }

}
