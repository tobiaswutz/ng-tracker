import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { ComponentsModule } from '../components/components.module'
import { HomeComponent } from './home/home.component'
import { DashboardComponent } from './dashboard/dashboard.component'
import { StakingCalculatorComponent } from './staking-calculator/staking-calculator.component'
import { LandingComponent } from './landing/landing.component'
import { LoginComponent } from './login/login.component'

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, ComponentsModule],
  declarations: [
    HomeComponent,
    DashboardComponent,
    StakingCalculatorComponent,
    LandingComponent,
    LoginComponent,
  ],
})
export class PagesModule {}
