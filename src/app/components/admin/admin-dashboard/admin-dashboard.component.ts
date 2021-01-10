import { Component, OnInit } from '@angular/core';
import { User, UserServiceService } from 'src/app/services/user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  constructor(
    private userService:UserServiceService,
    private router:Router
  ) { }

  ngOnInit(): void {
    let user:User = JSON.parse(localStorage.getItem("user")) 
    if(!user || user?.role !== "admin"){
      this.router.navigate(['/','admin'])
    }
  }

  logout(){
    if(this.userService.logout()){
      this.router.navigate(['/','admin'])
    }
  }

}
