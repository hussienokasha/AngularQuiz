import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, Signal, signal } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import {
  BehaviorSubject,
  catchError,
  map,
  Observable,
  shareReplay,
  throwError,
} from 'rxjs';
import { ResponseData, User } from '../Models/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private _baseUrl: string = environment.apiUrl;
  searchTerm = signal<string>('');
  constructor(private _http: HttpClient) {}
  getAllUsers(page:number): Observable<ResponseData> {
    let parms = new HttpParams().set('page',page);
    return this._http.get<ResponseData>(`${this._baseUrl}`,{params:parms}).pipe(
      shareReplay(1),
      catchError((e) =>
        throwError(() => {
          console.log('Error fetching users', e);
        })
      )
    );
  }
  getUser(uid: number): Observable<User> {

    return this._http.get<User>(`${this._baseUrl}/${uid}`).pipe(
      shareReplay(1),
      catchError((e) =>
        throwError(() => {
          console.log('Error fetching users', e);
        })
      )
    );
  }
  setSearchTerm(term: string) {
    this.searchTerm.set(term);
  }
}
