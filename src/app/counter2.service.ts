import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'any'
// })
@Injectable()
export class Counter2Service {
  public counter: number=0;

  constructor() { }
  public increaseCounter(){
    this.counter+=2;
  }
  public decreaseCounter(){
    this.counter-=2;
  }
}
