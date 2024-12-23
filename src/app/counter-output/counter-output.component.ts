import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectCount, selectCountDouble } from '../store/counter.selectors';

@Component({
  selector: 'app-counter-output',
  imports: [AsyncPipe],
  templateUrl: './counter-output.component.html',
  styleUrl: './counter-output.component.css',
})
export class CounterOutputComponent {
  private store = inject(Store<{ counter: number }>);
  count$: Observable<number> = this.store.select(selectCount);
  doubleCount$: Observable<number> = this.store.select(selectCountDouble);
}
