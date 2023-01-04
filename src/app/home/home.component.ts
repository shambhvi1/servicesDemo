import { Component, Inject } from '@angular/core';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  // //useClass and UseExisting
  // constructor(public counterService: CounterService){}

  //useValue
  constructor(public counterService: CounterService,
    // @Inject('appTitle') public data: any
    ){}

  decrease() {
    this.counterService.decreaseCounter();
    }
    increase() {
    this.counterService.increaseCounter();
    }

}
