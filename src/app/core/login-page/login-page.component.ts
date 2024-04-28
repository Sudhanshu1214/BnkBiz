import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {

  RegisterData: any = [];

  constructor(private loginService: LoginService, private router: Router) { }


  onSubmit(loginForm: any) {
    this.loginService.getLoginAcess().subscribe(
        (resp: any) => {
            console.log("Got login Data by Email----------> ", resp);
            this.RegisterData = resp.data; // Assuming the data array is directly accessible
            console.log("RegisterData is ---------->", this.RegisterData);
            
            let token = false;
            for (let i = 0; i < this.RegisterData.length; i++) {
                if (loginForm.Username === this.RegisterData[i].userName && 
                    loginForm.Password === this.RegisterData[i].password) {
                    alert("Login Success");
                    token = true;
                    break;
                }
            }
            if (!token) {
                alert("Invalid Username and Password");
            } else {
                this.router.navigate(['/home']);
            }
        },
        (err) => {
            console.log(err);
        }
    )
}

}


