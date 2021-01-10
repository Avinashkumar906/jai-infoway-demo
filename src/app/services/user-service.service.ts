import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  userDatabase:Array<User> ;

  constructor() { 
    // Using local storage as database for user collection
    // it should come from API.
    if(!localStorage.getItem("userDB")){
      localStorage.setItem("userDB",JSON.stringify([
        {username:"user",password:"12345678",role:"user"},
        {username:"admin",password:"12345678",role:"admin"}
      ]))
    }
    // reading value from local storge.
    this.userDatabase = JSON.parse(localStorage.getItem("userDB"));
  }

  userLogin(user:User):User|null{
    let result;
    this.userDatabase.forEach((item:User)=>{
      if(item.username.toLowerCase() === user.username.toLowerCase() && item.password === user.password && item.role === user.role){
        localStorage.setItem("user",JSON.stringify(item))
        result = {...item};
      }
    })
    return result;
  }

  userSignup(user:User):User|null{
    let found = this.userDatabase.findIndex((item:User)=>item.username.toLowerCase()===user.username.toLowerCase())
    if(found >= 0){
      return null
    } else {
      this.userDatabase.push(user);
      // saving user db to localstorage for persistancy
      localStorage.setItem("userDB",JSON.stringify(this.userDatabase))
      return user;
    }
  }

  logout():boolean{
    localStorage.removeItem("user");
    return true;
  }

  // getLoggedInUser():User|null{
    
  //   return user ? user : null;
  // }

}

export interface User{
  username:string,
  password:string,
  role:string
}

export class User implements User{
  constructor(username:string,password:string){
    this.username = username;
    this.password = password;
    this.role = "user"
  }
  username:string;
  password:string;
  role:string;
}
