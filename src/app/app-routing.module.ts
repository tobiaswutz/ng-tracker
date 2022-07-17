import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { HomeComponent } from './pages/home/home.component'
import { DashboardComponent } from './pages/dashboard/dashboard.component'
import { AuthGuard } from './helpers/auth/auth.guard'
import { AuthService } from './services'
import { LoginComponent } from './pages/login/login.component'
import { SignupComponent } from './pages/signup/signup.component'
import { NotFoundComponent } from './pages/not-found/not-found.component'
import { WelcomeComponent } from './pages/welcome/welcome.component'
import { LandingComponent } from './pages/landing/landing.component'

const routes: Routes = [
  
  { path: '', component: LandingComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'welcome', component: WelcomeComponent, canActivate: [AuthGuard] },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: '404', component: NotFoundComponent },
  { path: 'landing', component: LandingComponent },
  { path: '**', redirectTo: '/404' }

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthService, AuthGuard]
})
export class AppRoutingModule {}
