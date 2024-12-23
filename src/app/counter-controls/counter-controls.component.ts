import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrement, increment } from '../store/counter.actions';

// import { IncrementAction } from '../store/counter.actions';

@Component({
  selector: 'app-counter-controls',
  imports: [],
  templateUrl: './counter-controls.component.html',
  styleUrl: './counter-controls.component.css',
})
export class CounterControlsComponent {
  private store = inject(Store);

  increment() {
    this.store.dispatch(increment({ value: 1 }));
  }
  decrement() {
    this.store.dispatch(decrement({ value: 1 }));
  }
}
