import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users:any[] = [];
  loggedInUser:any = null;

  register(user:any){
    this.users.push(user);
  }

  login(email:string,password:string){
    const user = this.users.find(
      u => u.email === email && u.password === password
    );

    if(user){
      this.loggedInUser = user;
      return true;
    }

    return false;
  }

  getUser(){
    return this.loggedInUser;
  }

}