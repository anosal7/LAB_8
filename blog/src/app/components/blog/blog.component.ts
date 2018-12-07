import {Component, Input, OnInit} from '@angular/core';
import {DataService} from "../../services/data-service.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})

export class BlogComponent implements OnInit {

  @Input ('filterText')  filterText : string;
  // filterText : string;
  items : any;
  constructor(private dataService:DataService, private router: Router) { }

  ngOnInit() {
    this.dataService.getAll().subscribe(result=>{
    this.items=result;
    });
  }

  setQuery(text){
    this.router.navigate(['/blog'], {
      queryParams: {title: text}
    });
  }

  // newValues(text, image, id){
  //   this.dataService.changeImage(image);
  //   this.dataService.changeText(text);
  //   this.router.navigate(['/blog/detail/', id]);
  // }

  toDetails(id) {
    this.router.navigate(['/blog/detail/', id]);
  }

}
