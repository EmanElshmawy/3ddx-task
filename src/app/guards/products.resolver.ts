import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { catchError, EMPTY, Observable, of } from 'rxjs';
import { ProductsService } from '../services/products.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsResolver implements Resolve<any> {

  constructor(private productServices: ProductsService, private router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.productServices.getProducts().pipe(
      catchError(() => {
        this.router.navigate(['']);
        return EMPTY;
      })
    )
  }
}
