import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  
  
  constructor(private authService:AuthenticationService, private router:Router) { }

  ngOnInit(): void {
    // const profile_name = this.authService.getUsername();
    
  }

  isLoggedIn():boolean{
    return this.authService.isLoggedIn();

  }
  // profile_name :string = this.authService.getUsername();
  
  
  

  logout(){
    this.authService.logout();
    
    this.router.navigate(["/login"]);
  }
}
