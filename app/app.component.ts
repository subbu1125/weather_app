import { Component } from '@angular/core';
import { WeatherListComponent}from './weather/weather-list.component';
import { WeatherSearchComponent} from './weather/weather-search.component';
@Component({
  selector: 'my-app',
  template: `
  <header>
  <h2>Weather Application</h2>
  </header>
  <weather-search></weather-search>
  <weather-list></weather-list>
  `,
  directives:[WeatherListComponent,WeatherSearchComponent]
})
export class AppComponent { }
