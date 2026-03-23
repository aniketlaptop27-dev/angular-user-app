import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html'
})
export class ProfileComponent {

  user:any;

  constructor(private userService:UserService){
    this.user = this.userService.getUser();
  }

}