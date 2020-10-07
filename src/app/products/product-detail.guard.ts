import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailGuard implements CanActivate {

  constructor(private router: Router) {

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let id = +next.url[1].path;
    if (isNaN(id) || id < 1) { // guarded if 0 or NotANumber>what if not a product id eg:20?
      alert("Invalid product Id");//here route to error page
      this.router.navigate(['/products']);
      return false;
    }

    return true;
  }

}
