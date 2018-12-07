import { Component, OnInit } from '@angular/core';
import {DataService} from "../../services/data-service.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-blog-item-detail',
  templateUrl: './blog-item-detail.component.html',
  styleUrls: ['./blog-item-detail.component.css']
})
export class BlogItemDetailComponent implements OnInit {

  text: string;
  image: string;

  constructor(private dataService: DataService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.dataService.currentText.subscribe(text => this.text = text);
    this.dataService.currentImage.subscribe(image => this.image = image);
  }

}
