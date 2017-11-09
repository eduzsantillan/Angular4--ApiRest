import { Component } from '@angular/core';
import {PostService} from './posts.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [PostService]
})
export class AppComponent {
  title : string;
  hobbies : string [];
  flagHobbies : boolean;
  _posts : IPost[];
  
  constructor(private postService:PostService) {
    this.title='Eduardo';
    this.hobbies=['run','read','go to the movies'];
    this.flagHobbies = false;
    this.postService.getPosts().subscribe(posts=> {
      this._posts=posts;
    });
  }

showHobbies(){
  this.flagHobbies=!this.flagHobbies;
}

newHobby(hobby){
  this.hobbies.push(hobby.value);
  hobby.value='';
  return false;
}

}

interface IPost{
  id: string;
  title: string;
  body: string;
  
}