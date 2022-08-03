import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseServerUrl } from '../common/constants';
import { CityWeather } from '../model/CityWeather';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class WatchlistService {

  constructor(private http:HttpClient,private service : AuthenticationService) { }

  cityWeatherDetailsList():Observable<CityWeather[]>{
    
    const username : string = localStorage.getItem('username');
    return this.http.get<CityWeather[]>(baseServerUrl+"/favoriteWeather/findByUserName/"+username);
   
  }

  addCity(data:any):Observable<CityWeather>{
    const temp ={userName:localStorage.getItem('username'),...data};
    // const myObj:any={
    //   "token":this.service.getToken()
    // }
    return this.http.post<any>(baseServerUrl+"/favoriteWeather/add",temp);

    
  }

  removeCity(name:string,userName:string,country:string):Observable<CityWeather>{
    const myObj:any={
      "name":name,
      "userName":userName,
      "country":country
    }
    return this.http.delete<CityWeather>(baseServerUrl+"/favoriteWeather/delete",{body:myObj});
    
  }

  // getWeatherData(cityName : string) : Observable<CityWeather>{
  //   return this.http.get<CityWeather>(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=69b9d6824b74d777140e366d6eee82da`);
  // }


}
