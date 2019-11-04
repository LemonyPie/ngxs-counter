import {Component} from '@angular/core';
import {Select, Store} from '@ngxs/store';
import {CounterState} from './stores/counter/counter.state';
import {Observable} from 'rxjs';
import {Counter} from './stores/counter/counter.actions';
import Increase = Counter.Increase;
import Decrease = Counter.Decrease;
import ResetToDefault = Counter.ResetToDefault;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @Select(CounterState.counter) counter$: Observable<number>;

  constructor(private store: Store) {}

  reset() {
    this.store.dispatch( new ResetToDefault() );
  }

  increase() {
    this.store.dispatch( new Increase() );
  }

  decrease() {
    this.store.dispatch( new Decrease() );
  }
}
