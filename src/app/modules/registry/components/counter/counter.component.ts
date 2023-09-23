import { Component } from '@angular/core';
import {Observable} from "rxjs";
import {Store} from '@ngrx/store';
import {decrement, increment, reset} from "../../actions/counter.actions";

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent {
  count$:Observable<number>
  constructor(private store:Store<{counter:number}>) {
    this.count$=store.select('counter');
  }

  increment(){
    this.store.dispatch(increment())
  }

  decrement(){
    this.store.dispatch(decrement())
  }

  reset(){
    this.store.dispatch(reset())
  }
}
