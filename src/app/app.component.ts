import { Component, inject, OnInit } from '@angular/core';
import { CounterOutputComponent } from './counter-output/counter-output.component';
import { CounterControlsComponent } from './counter-controls/counter-controls.component';
import { Store } from '@ngrx/store';
import { init } from './store/counter.actions';

@Component({
  selector: 'app-root',
  imports: [CounterOutputComponent, CounterControlsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  private store = inject(Store);
  ngOnInit(): void {
    this.store.dispatch(init());
  }
}
