import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { Routes, RouterModule } from '@angular/router'
import { NavbarComponent } from '../navbar/navbar.component'
import { PricelistComponent } from './pricelist/pricelist.component'

@NgModule({
  imports: [CommonModule],
  declarations: [PricelistComponent],
  exports: [PricelistComponent],
})
export class ComponentsModule {}
