import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private articles:any;
  constructor(private http:HttpClient) {
    
   }
  getNews():any{
    return this.http.get(`https://newsapi.org/v2/everything?q=tesla&from=2023-07-27&sortBy=publishedAt&apiKey=1344b95cbd9c427dbfd0abb7f50fe450`);
  }
}
