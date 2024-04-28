import { Component } from '@angular/core';
import { RegisterService } from '../register.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent {

  constructor(private registerService : RegisterService){}


  onSubmit(registerForm : NgForm) {
    this.registerService.saveRegisterData(registerForm.form.value).subscribe(
        (resp: any) => {
            console.log("resp data is ----------> ", resp);
        },
        (err) => {
            console.log(err);
        }
    )
}

}
