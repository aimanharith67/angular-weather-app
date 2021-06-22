import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class Poc2Service {
  url = 'https://api.openweathermap.org/data/2.5/weather';
  apiKey = '532d9de48525be5ea396973c832885a2';
  url2 = "http://localhost:1337/homes"

  constructor(private http: HttpClient) { }
  // Strapi
  getPosts() {
    return this.http.get(this.url2);
  }
  // Weather
  getPlace(city: string) {
    let params = new HttpParams()
      .set('q', city)
      .set('units', 'imperial')
      .set('appid', this.apiKey)
    return this.http.get(this.url, { params });
  }
}

