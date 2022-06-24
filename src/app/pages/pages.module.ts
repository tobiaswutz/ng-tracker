import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { ComponentsModule } from '../components/components.module'
import { HomeComponent } from './home/home.component'
import { DashboardComponent } from './dashboard/dashboard.component'

@NgModule({
  imports: [CommonModule, FormsModule, ComponentsModule],
  declarations: [HomeComponent, DashboardComponent],
})
export class PagesModule {}
