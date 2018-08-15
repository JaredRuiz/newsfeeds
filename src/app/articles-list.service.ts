import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Subject } from 'rxjs'

@Injectable()

export class ArticlesListService {
  constructor(private http: HttpClient) {

  }
  
  getArticles() {
    // return this.http.get('https://www.theatlantic.com/feed/best-of/');
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
    }, 100);

    return subject;
  }

  }
