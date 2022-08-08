import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  isLoggedIn:boolean = false;
  userInfo:any = {}

  constructor(private _AuthService:AuthService) { }

  logOut()
  {
    this._AuthService.logOut()
  }

  ngOnInit(): void {
    this._AuthService.userData.subscribe(() => {
      if(this._AuthService.userData.getValue() != null)
      {
        this.isLoggedIn = true;
        this.userInfo = this._AuthService.userData;
      }
      else
      {
        this.isLoggedIn=false;
      }
    })
  }

}
