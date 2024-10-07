import { Component } from '@angular/core';
import { NewsService } from './news.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'anghttp';

  public articles:any;
  constructor(private news:NewsService){
    this.news.getNews().subscribe((data:any) => {
      this.articles = data['articles'];
      console.log(this.articles);
    });
  }
}
