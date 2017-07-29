import { Injectable, EventEmitter } from '@angular/core';
import { Post } from "app/models/post.model";
import { Http, Headers, Response } from '@angular/http';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/observable/of';
import { AuthenticationService } from "./authentication.service";


@Injectable()
export class AdminPostService {
  postSearchChanged: EventEmitter<void> = new EventEmitter();
  postSearchString: string;

  constructor(private http: Http, private authenticationService: AuthenticationService) {

   }

  notifyPostSearchChanged(searchString: string): void {
    this.postSearchString = searchString;
    this.postSearchChanged.emit();
  }

  addPost(post: Post): Observable<boolean> {
    return this.http.post('/posts/addpost', { title: post.title, text: post.text, date: new Date().getTime() })
      .map((response: Response) => {

        if (response.json()) {
          return true;
        }

        return false;
      });
  }

  getAll(): Observable<Array<Post>> {
    return this.http.get('/posts/getall')
      .map((response: Response) => {
        let jsonData = response.json();
        if (jsonData) {
          let result = Post.fromJsonArray(jsonData.sort((x: any, y: any) => y.date - x.date));

          return result;
        }

        return null;
      });
  }
}
