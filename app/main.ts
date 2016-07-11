import { bootstrap }    from '@angular/platform-browser-dynamic';
import { AppComponent } from './app.component';
import {HTTP_PROVIDERS} from '@angular/http';
import {WeatherService } from './weather/weather.service';
bootstrap(AppComponent,[HTTP_PROVIDERS,WeatherService]);
