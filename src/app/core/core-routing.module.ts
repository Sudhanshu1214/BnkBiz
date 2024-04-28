import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { FooterComponent } from './footer/footer.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { HomepageComponent } from './homepage/homepage.component';
import { RegisterPageComponent } from './register-page/register-page.component';

const routes: Routes = [

  {
    path:'',
    component:LoginPageComponent
  },
  {
    path:'footer',
    component:FooterComponent
  },
  {
    path:'tool',
    component:ToolbarComponent
  },
  {
    path:'home',
    component:HomepageComponent
  },
  {
    path:'register',
    component:RegisterPageComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
