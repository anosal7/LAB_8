import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {DataService} from "../../services/data-service.service";

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css']
})
export class BlogDetailComponent implements OnInit {

  id: string;
  post: any;

  constructor(private route: ActivatedRoute, private dataService:DataService) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getPost();
  }

  getPost(){
    this.dataService.get(this.id).subscribe(post => this.post = post);
  }

}
