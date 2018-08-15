import { Component, Input } from '@angular/core';

@Component({
  selector: 'article-thumbnail',
  templateUrl: './article-thumbnail.component.html'
})

export class ArticleThumbnailComponent {
  @Input() article: any;
}
