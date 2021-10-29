import { Injectable } from '@angular/core';
import { CanActivate,Router } from '@angular/router';
import { AuthenticateService } from './shared/services/authenticate.service';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService:AuthenticateService,private router:Router){}
 canActivate():boolean{
    if(this.authService.loggedIn()){
      return true;
    }
    else{
      this.router.navigate(['/login']);
      return false;
    }
 }
  
}
