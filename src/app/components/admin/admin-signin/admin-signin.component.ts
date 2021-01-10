import { Component, OnInit } from '@angular/core';
import { User, UserServiceService } from 'src/app/services/user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-signin',
  templateUrl: './admin-signin.component.html',
  styleUrls: ['./admin-signin.component.css']
})
export class AdminSigninComponent implements OnInit {

  constructor(
    private userService:UserServiceService,
    private router:Router
  ) { }

  ngOnInit(): void {
  }

  loginUser(username:string,password:string){
    let user:User = new User(username,password)
    user.role = "admin";
    if(this.userService.userLogin(user)){
      this.router.navigate(['admin','dashboard'])
    } else {
      alert('username andd password doesnot match!')
    }
  }
}
