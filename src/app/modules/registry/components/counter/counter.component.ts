import { Component } from '@angular/core';
import {Observable} from "rxjs";

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent {
  count$:Observable<number>
  constructor() {
  }


}
