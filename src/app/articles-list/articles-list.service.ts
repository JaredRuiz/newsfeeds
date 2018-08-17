import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()

export class ArticlesListService {
  constructor(private http: HttpClient) {

  }

  getArticles() {
    // TODO: having issues with CORS, otherwise we could hit an actual endpoint,
    // this mimics it pretty well though for my learning purposes

    const articles =  [
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

    const subject = new Subject();
    setTimeout(() => {
      subject.next(articles);
      subject.complete();
    }, 1000);

    return subject;
  }
}
