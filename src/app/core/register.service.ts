import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http : HttpClient) { }

  API='http://localhost:8080/api/login';

  public saveRegisterData(registerFormData : NgForm){
    console.log("In register Service...");
    return this.http.post(this.API + '/save', registerFormData);   
  }

}
