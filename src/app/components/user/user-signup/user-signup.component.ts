import { Component, OnInit } from '@angular/core';
import { User, UserServiceService } from 'src/app/services/user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-signup',
  templateUrl: './user-signup.component.html',
  styleUrls: ['./user-signup.component.css']
})
export class UserSignupComponent implements OnInit {

  constructor(
    private userService:UserServiceService,
    private router:Router
  ) { }

  message:string;

  ngOnInit(): void {
  }

  signUpUser(username:string,password:string){
    let user:User = new User(username,password)
    if(this.userService.userSignup(user)){
      this.message = `User ${user.username} is registered successfully!`
    } else {
      this.message = 'User name already exist!';
    }
  }
  
}
