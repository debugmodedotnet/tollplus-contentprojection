import { AfterContentInit, AfterViewInit, ChangeDetectorRef, Component, ContentChild, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { AuthMessageComponent } from '../auth-message/auth-message.component';
import { AuthRememberComponent } from '../auth-remember/auth-remember.component';
import { IUser } from '../user';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.css']
})
export class AuthFormComponent implements OnInit , AfterContentInit, AfterViewInit {
  showMessage: boolean = false;
  @Output() submitEvent: EventEmitter<IUser> = new EventEmitter<IUser>();
  @ContentChild(AuthRememberComponent) remember?: AuthRememberComponent;
  @ViewChild(AuthMessageComponent,{static:false}) message? : AuthMessageComponent; 
  constructor(private cd : ChangeDetectorRef) { }

  ngOnInit(): void {

    // console.log(this.message);
    // if(this.message != undefined){
    //   this.message.days = 30; 
    // }
  
  }

  onSubmit(value: IUser) {
    this.submitEvent.emit(value);
  }

  ngAfterContentInit(): void {
   // console.log(this.remember);
    if(this.remember != undefined){
      this.remember.checked.subscribe( (data : any)=>{
      //  console.log(data);
        this.showMessage = data; 
      })
    }
  }

  ngAfterViewInit(): void {
   // console.log(this.message)
    if(this.message != undefined){
      this.message.days = 30; 
      this.cd.detectChanges();
    }
  }


}
