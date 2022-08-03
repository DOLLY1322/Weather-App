import { HttpClient, JsonpClientBackend } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { observable, Observable } from 'rxjs';
import { baseServerUrl } from '../common/constants';
import { Signup } from '../model/Signup';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private client: HttpClient) { }

  isLoggedIn():boolean{
    const token: string = this .getToken();
    return token != undefined && token != null;
  }

  getToken():string{
    const token = localStorage.getItem('token');
    return token;
  }

  getUsername():string | null{
    const username = localStorage.getItem('username');
    return username;
  }

  login(username: string, password: string): Observable<string> {
    const url = baseServerUrl + '/login';
    const requestData = { username, password };
    console.log('request data', JSON.stringify(requestData));
    const observable: Observable<string> = this.client.post(url, requestData, {
      responseType: 'text',
    });
    return observable;
  }

  addUser(username:string,password:string):Observable<Signup>
  {
    const url= baseServerUrl+ "/register";
    const requestData = {username,password};
    
    console.log("requested Data"+ JSON.stringify(requestData));
    const observable:Observable<Signup> =this.client.post<Signup>(url,requestData)
     
    return observable;

  }

  logout() {
    localStorage.removeItem('username');
    localStorage.removeItem('token');
    localStorage.removeItem('City');
  }

  saveToken(username: string, token: string) {
    localStorage.setItem('username', username);
    localStorage.setItem('token', token);
  }

  setCity(city:string){
    localStorage.setItem('City',city);

  }
  getCity():string|null
  {
    let city:string=localStorage.getItem('City');
    return city;

  }
}
