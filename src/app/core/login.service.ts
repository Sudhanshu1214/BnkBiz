import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http : HttpClient) { }

  API='http://localhost:8080/api/login';

  public getLoginAcess(){
    console.log("In login Service...");
    return this.http.get(this.API + '/getAll');
  }
}

