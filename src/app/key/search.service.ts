import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


const httpOptions = {
  headers: new HttpHeaders({
  'Content-Type': 'application/json',
  'Authorization': 'Bearer Z3b2l8dLHKBd80gP_GXp_v4crBjbVMuC9imquLCkNJwm_sszTA6D4nEQnLxL6ODb8b--LnyX2krXk1YgamhzC7xCUVd0k5GaIwIXfFvw0Vz9nKvodo8vHvXY0YzrW3Yx' })
}

@Injectable({
  providedIn: 'root'
})

export class SearchService {

  constructor(private http: HttpClient) { }

  getFood(city, state, price): Observable<any> {
    return this.http.get(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city},${state}&open_now=true&price=${price}`, httpOptions)
  }

}