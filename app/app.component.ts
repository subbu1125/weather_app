import { Component } from '@angular/core';
import { WeatherListComponent}from './weather/weather-list.component';
@Component({
  selector: 'my-app',
  template: `
  <header>
  <h2>Weather Application</h2>
  </header>
  <weather-list></weather-list>
  `,
  directives:[WeatherListComponent]
})
export class AppComponent { }
