import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'article-picker',
  templateUrl: './article-picker.component.html'
})

export class ArticlePickerComponent {
  @Output() eventClick = new EventEmitter();

  // send to parent component the journal we want to use
  update(journal) {
    this.eventClick.emit(journal);
  }
}
