import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'any'
// })
@Injectable()
export class CounterService {
  public counter: number=0;

  constructor() { }
  public increaseCounter(){
    this.counter++;
  }
  public decreaseCounter(){
    this.counter--;
  }
}
