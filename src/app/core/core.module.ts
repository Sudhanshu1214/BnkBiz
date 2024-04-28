import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreRoutingModule } from './core-routing.module';
import { CoreComponent } from './core.component';
import { LoginPageComponent } from './login-page/login-page.component';
// import { FooterComponent } from './footer/footer.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MatIconModule} from '@angular/material/icon';
import { MatInputModule} from '@angular/material/input';
import { MatFormFieldModule} from '@angular/material/form-field';
import { FooterComponent } from './footer/footer.component';
import { MatMenuModule} from '@angular/material/menu'; 
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatButtonModule} from '@angular/material/button';
import { FormsModule }   from '@angular/forms';                                   // used for the forms
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule} from '@angular/common/http';
import { RegisterPageComponent } from './register-page/register-page.component';

@NgModule({
  declarations: [
    CoreComponent,
    LoginPageComponent,
    FooterComponent,
    HomepageComponent,
    ToolbarComponent,
    RegisterPageComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatMenuModule,
    MatToolbarModule,
    MatButtonModule ,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class CoreModule { }
