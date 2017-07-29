import { Component, OnInit } from '@angular/core';
import { Post } from "app/models/post.model";
import { AdminPostService } from "../admin-post.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-admin-post',
  templateUrl: './admin-post.component.html',
  styleUrls: ['./admin-post.component.css']
})
export class AdminPostComponent implements OnInit {

  currentPost: Post;

  constructor(private adminPostService: AdminPostService, private router: Router) { }

  addPost(): boolean {
    this.adminPostService.addPost(this.currentPost).subscribe((result) => {
      if (!result) {
        // TODO: log error
      }

      this.router.navigate(['/']);
    });

    return true;
  }

  isValid(): boolean {
    if(this.currentPost && this.currentPost.title && this.currentPost.text){
      return true;
    }

    return false;
  }

  ngOnInit() {
    this.currentPost = new Post();
  }
}
