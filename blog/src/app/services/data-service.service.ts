import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from "rxjs/operators";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  // private url = 'https://jsonplaceholder.typicode.com';
  private url = 'http://localhost:3000';
  private textSource = new BehaviorSubject('sdssdssd');
  private imageSource = new BehaviorSubject('asaasa');

  currentText = this.textSource.asObservable();
  currentImage = this.imageSource.asObservable();

  constructor(private http : HttpClient){}

  // getAll(){
  //   return this.http.get(this.url + '/photos').pipe(map((x:any[])=>x.slice(0,20)));
  // }
  //
  // get(id){
  //   return this.http.get(this.url + '/photos?id=' + id).pipe();
  // }

  changeText(text: string){
    this.textSource.next(text);
  }

  changeImage(image: string) {
    this.imageSource.next(image);
  }

  getAll(){
      return this.http.get(this.url + '/api/posts').pipe(map((x:any[])=>x.slice(0,20)));
    }

  get(id){
    return this.http.get(this.url + '/api/posts/' + id);
  }

  createNewOrUpdate(post){
    return this.http.post(this.url + '/api/post', post);
  }
}
