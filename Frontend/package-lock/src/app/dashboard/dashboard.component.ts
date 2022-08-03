import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { CityWeather } from '../model/CityWeather';
import { AuthenticationService } from '../service/authentication.service';
import { WatchlistService } from '../service/watchlist.service';
import { WeatherService } from '../service/weather.service';
import { WeatherUtil } from '../util/weather.util';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  util:WeatherUtil=new WeatherUtil();

  constructor(route: ActivatedRoute, private watchlistservice: WatchlistService, 
    private weatherservice: WeatherService,private service:AuthenticationService) { }

  
  cityName:any =this.service.getCity();
  cityWeather:CityWeather|undefined;
  weekday = new Date().getDay();



  ngOnInit(): void {
    

    
    this.searchValue();

  }
  
  

  
 

  searchValue(){
    this.weatherservice.getWeatherData(this.cityName)
    .subscribe({
      next: (response: any) => {
        this.cityWeather = this.util.toCityWeather(response);
        console.log(this.cityWeather);
      }
    });
    this.cityName ='';
    
  }


  public list: any = [];

  addToWatchList(){
    const observer:Observable<CityWeather>=this.watchlistservice.addCity(this.cityWeather);
    const myObj={
      next:(result:CityWeather)=>{
        console.log(result);
        this.list.push(result);
        console.log(this.list[0]);
      }
    }
    observer.subscribe(myObj);
  }

}
