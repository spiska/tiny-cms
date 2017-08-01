import { Component, OnInit } from '@angular/core';
import { AdminPostService } from "../admin/admin-post.service";
import { Post } from "app/models/post.model";

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  posts: Array<Post>;
  filteredPosts: Array<Post>;

  postSearchString: string;

  constructor(private postService: AdminPostService) {
    this.postService.postSearchChanged.subscribe(() => this.filterPosts());
  }

  filterPosts(): void {
    this.filteredPosts = this.posts.filter(x => !this.postService.postSearchString || (x.text && x.text.indexOf(this.postService.postSearchString) != -1));
    this.postSearchString = this.postService.postSearchString;
  }

  ngOnInit() {
    this.postService.getAll().subscribe(posts => {
      this.posts = posts;
      this.filterPosts();
    })
  }
}
