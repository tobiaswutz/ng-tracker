import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent implements OnInit {
  constructor() {}

  public sliderValue: number = 0

  @Input() public label: string | undefined
  @Output() public sliderValueChange: EventEmitter<number> = new EventEmitter<
    number
  >()

  ngOnInit() {}

  public sliderValueChangeHandler(event: any): void {
    console.log('sliderValueChangeHandler', event)

    if (event.target.value < 10) {
      this.sliderValue = parseInt(`0${event.target.value}`)
    } else {
      this.sliderValue = event.target.value
    }
    this.sliderValueChange.emit(this.sliderValue)
  }
}
