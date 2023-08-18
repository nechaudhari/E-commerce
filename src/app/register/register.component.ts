import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { SignUp } from '../data-type';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor( private register: UserService, private router:Router){}

  signUp(data:SignUp):void{
    this.register.userSignUp(data).subscribe((result) =>{
      if(result){
        this.router.navigate(['login'])
      }
      // console.log(result)
    });
  }

}
