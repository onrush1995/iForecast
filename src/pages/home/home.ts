import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WeatherProvider } from '../../providers/weather/weather';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  weather:any;
  
  location:{
    city:string,
    state:string,
    
  }

 

  constructor(
    public navCtrl: NavController, 
    public weatherProvider:WeatherProvider,
    public storage:Storage) {

  }

  ionViewWillEnter(){
    this.storage.get('location').then((val) => {
      if(val != null){
        this.location = JSON.parse(val);
      } else {
        this.location = {
          city: 'Oulu',
          state: 'Finland'
        }
      }
     

      this.weatherProvider.getWeather(this.location.city, this.location.state)  
          .subscribe(result => {let weather:any = result; this.weather = weather.current_observation; console.log(this.weather); 
        

        
        });
    });
  }
  

}