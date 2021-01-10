import { Component, OnInit } from '@angular/core';
import { UserServiceService, User } from 'src/app/services/user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(
    private userService:UserServiceService,
    private router:Router
  ) { }

  ngOnInit(): void {
    let user:User = JSON.parse(localStorage.getItem("user")) 
    if(!user || user?.role !== "user"){
      this.router.navigate(['/'])
    }
  }

  logout(){
    if(this.userService.logout()){
      this.router.navigate(['/'])
    }
  }
}
