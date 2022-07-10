import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { Routes, RouterModule } from '@angular/router'
import { NavbarComponent } from './navbar/navbar.component'
import { PricelistComponent } from './pricelist/pricelist.component'
import { InputComponent } from './input/input.component'
import { SliderComponent } from './slider/slider.component'

@NgModule({
  imports: [CommonModule],
  declarations: [PricelistComponent, InputComponent, SliderComponent],
  exports: [PricelistComponent, InputComponent, SliderComponent],
})
export class ComponentsModule {}
