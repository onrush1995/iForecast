import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the WeatherProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class WeatherProvider {
  apiKey = '79b24bf4288affd5';
  url;


  constructor(public http: HttpClient) {
    console.log('Hello WeatherProvider Provider');
    this.url = 'https://api.wunderground.com/api/' + this.apiKey+ '/conditions/q';
  
  }
  getWeather(city,state) {
    return this.http.get(this.url+'/'+city+','+state+ '.json')
    .map(res => res.json());
  }

}
