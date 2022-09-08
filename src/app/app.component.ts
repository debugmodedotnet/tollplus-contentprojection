import { Component } from '@angular/core';
import { IUser } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Content Projection Demo ';
  rememberMe : boolean = false; 
  login(user:IUser){
    
    console.log('login',user, this.rememberMe);
  }

  signUp(user:IUser){
    console.log('singn up',user);
  }

  doRemember(value: boolean){
     this.rememberMe = value; 
  }
}
