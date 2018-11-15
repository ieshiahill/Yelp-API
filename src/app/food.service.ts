import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({'Authorization': 'Bearer Z3b2l8dLHKBd80gP_GXp_v4crBjbVMuC9imquLCkNJwm_sszTA6D4nEQnLxL6ODb8b—LnyX2krXk1YgamhzC7xCUVd0k5GaIwIXfFvw0Vz9nKvodo8vHvXY0YzrW3Yx', 'Content-Type': 'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(public http: HttpClient) { }

  getResults(city, state, price): Observable<any> {
    return this.http.get(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city},${state}&open_now=true&price=${price}`, httpOptions)
  }

}



// import { Injectable } from '@angular/core';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Observable } from 'rxjs';


// const httpOptions = {
//   headers: new HttpHeaders({ "Content-Type": "application/json",
//     "Authorization": "Bearer Z3b2l8dLHKBd80gP_GXp_v4crBjbVMuC9imquLCkNJwm_sszTA6D4nEQnLxL6ODb8b—LnyX2krXk1YgamhzC7xCUVd0k5GaIwIXfFvw0Vz9nKvodo8vHvXY0YzrW3Yx"})
// }


// @Injectable({
//   providedIn: "root"
// })

// export class FoodService {

//     constructor(private http: HttpClient) {}

//     getRestaurants(city, state, price): Observable<any> {
//       return this.http.get(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city},${state}&open_now=true&price=${price}`, httpOptions)
//     }
  
//   }

