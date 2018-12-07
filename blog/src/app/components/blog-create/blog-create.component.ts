import { Component, OnInit } from '@angular/core';
import {DataService} from "../../services/data-service.service";

@Component({
  selector: 'app-blog-create',
  templateUrl: './blog-create.component.html',
  styleUrls: ['./blog-create.component.css']
})
export class BlogCreateComponent implements OnInit {

  post = {
    title: '',
    url: '',
    content: '',
  }

  constructor(private dataService:DataService) { }

  ngOnInit() {
  }

  createPost(post){
    this.dataService.createNewOrUpdate(post).subscribe( result => {
      console.log('Button works');
    })
  }

  submit(){
    this.createPost(this.post);
  }

}
