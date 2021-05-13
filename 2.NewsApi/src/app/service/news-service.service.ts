import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsServiceService {

  constructor(private http:HttpClient) { }
  newsApi = 'https://newsapi.org/v2/top-headlines?country=in&apiKey=8f9369b528884b2181e1f273bbde5f7c';
  techNewsApi = 'https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=8f9369b528884b2181e1f273bbde5f7c';
  businessNewsApi = 'https://newsapi.org/v2/sources?category=business&apiKey=8f9369b528884b2181e1f273bbde5f7c';
  entertainemnetNewsApi = 'https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=8f9369b528884b2181e1f273bbde5f7c';
  
  topHeading():Observable<any>
  {
    return this.http.get(this.newsApi);
  }

  techNews():Observable<any>
  {
    return this.http.get(this.techNewsApi);
  }

  businessNews():Observable<any>
  {
    return this.http.get(this.businessNewsApi);
  }

  entertainmentNews():Observable<any>
  {
    return this.http.get(this.entertainemnetNewsApi);
  }

}
