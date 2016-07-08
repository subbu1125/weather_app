import { Component } from '@angular/core';
import { WeatherItem} from'./weather-item';
@Component({
selector:'weather-item',
template:`
<article class="weather-element">
<div class="col-1">
<h3>{{weatherItem.cityName}}</h3>
<p class="info">{{weatherItem.description}}</p>
</div>
<div class="col-2">
<span class="temparature">{{weatherItem.temprature}}&#8451;</span>
</div>
</article>
`,
styleUrls:['app/assets/weather-item.css'],
inputs:['weatherItem:item']
})
export class weatherItemComponent{
weatherItem:WeatherItem;
// @input(item); with import input
}
