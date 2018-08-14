import { Component, Input } from '@angular/core';

@Component({
  selector: 'articles-list',
  templateUrl: './articles-list.component.html'
})
export class ArticlesListComponent {
  @Input() articles:any[];
}
