import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {NgxsModule} from '@ngxs/store';
import {CounterState} from './stores/counter/counter.state';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxsModule.forRoot([CounterState])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
