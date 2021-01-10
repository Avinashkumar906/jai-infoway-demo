import { Component, OnInit } from '@angular/core';
import { UserServiceService, User } from 'src/app/services/user-service.service';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {

  constructor(
    private userService:UserServiceService,
    private router:Router
  ) { }

  ngOnInit(): void {
  }

  loginUser(username:string,password:string){
    let user:User = new User(username,password)
    if(this.userService.userLogin(user)){
      this.router.navigate(['user','dashboard'])
    } else {
      alert('username andd password doesnot match!')
    }
  }
}
