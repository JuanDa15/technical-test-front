import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterAgentComponent } from './pages/register-agent/register-agent.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  {
    path: 'register-agent',
    component: RegisterAgentComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '**',
    redirectTo: 'login'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
