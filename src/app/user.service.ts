import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SignUp } from './data-type';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  userSignUp(data:SignUp){
    return this.http.post('http://localhost:3000/user',data) 
  }
}
