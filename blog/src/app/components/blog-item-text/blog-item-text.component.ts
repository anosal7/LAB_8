import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-blog-item-text',
  templateUrl: './blog-item-text.component.html',
  styleUrls: ['./blog-item-text.component.css']
})
export class BlogItemTextComponent implements OnInit {

  @Input('text') text : string;
  @Output() titleChanged = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

}
