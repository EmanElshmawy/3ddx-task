import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { catchError, EMPTY, Observable, of } from 'rxjs';
import { UsersService } from '../services/users.service';

@Injectable({
  providedIn: 'root'
})
export class UsersResolver implements Resolve<any> {
  constructor(private usersService: UsersService, private router: Router) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.usersService.getUsers().pipe(
      catchError(() => {
        this.router.navigate(['']);
        return EMPTY;
      })
    )
  }
}
