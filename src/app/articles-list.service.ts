import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Subject } from 'rxjs'

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()

export class ArticlesListService {
  constructor(private http: HttpClient) {

  }
  
  getArticles() {
    // TODO: having issues with CORS, otherwise it would be nice to get this working
    //   return this.http.get<NewsArticle>('https://www.theguardian.com/us-news/rss/');
    // }
    
    let articles =  [
      {
        name: 'First article',
        date: '01/01/2000',
        tagline: 'this is the very first article',
        journal: 1
      },
      {
        name: 'Second article',
        date: '01/01/2000',
        tagline: 'this is the second article',
        journal: 2
      }
      ];

    let subject = new Subject();
    setTimeout(() => {
      subject.next(articles);
      subject.complete();
    }, 1000);

    return subject;
  }
  
}
