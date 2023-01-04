import { Component } from '@angular/core';
import { CounterService } from '../counter.service';
import { Counter2Service } from '../counter2.service';

@Component({
  selector: 'app-lazy-loaded',
  templateUrl: './lazy-loaded.component.html',
  styleUrls: ['./lazy-loaded.component.css']
})
export class LazyLoadedComponent {
  decrease() {
    this.counterService.decreaseCounter();
    }
    increase() {
    this.counterService.increaseCounter();
    }
      // constructor(public counterService: CounterService){}
      constructor(public counterService: Counter2Service){}

}
