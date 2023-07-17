import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterAgentComponent } from './pages/register-agent/register-agent.component';
import { AuthRoutingModule } from './auth-routing.module';
import { ReactiveFormsModule} from '@angular/forms';
import { LoginComponent } from './pages/login/login.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    RegisterAgentComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class AuthModule { }
