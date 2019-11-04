import {Action, Selector, State, StateContext} from '@ngxs/store';
import {Counter} from './counter.actions';
import Increase = Counter.Increase;
import ResetToDefault = Counter.ResetToDefault;
import Decrease = Counter.Decrease;

const defaultState = 0;

@State({
  name: 'counter',
  defaults: defaultState
})
export class CounterState {
  @Selector()
  static counter(state: StateContext<number>) {
    return state;
  }

  @Action(ResetToDefault)
  reset({ setState }: StateContext<number>) {
    setState(defaultState);
  }

  @Action(Increase)
  increase({ getState, setState }: StateContext<number>) {
    const state = getState();
    setState(state + 1);
  }

  @Action(Decrease)
  decrease({ getState, setState }: StateContext<number>) {
    const state = getState();
    setState(state - 1);
  }
}
