import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from "app/admin/authentication.service";
import { Router } from "@angular/router";
import { AdminPostService } from "app/admin/admin-post.service";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
   public searchString: string;

  constructor(private authenticationService: AuthenticationService,
    private router: Router, private adminPostService: AdminPostService) { }

  searchStringChanged(value: string): void {
    this.adminPostService.notifyPostSearchChanged(value);
  }

  clearSearch(): void {
    this.searchString = null;
    this.adminPostService.notifyPostSearchChanged(null);
  }

  isSearchActive(): boolean {
    return !!this.adminPostService.postSearchString;
  }

  isLogged(): boolean {
    return this.authenticationService.isLogged();
  }

  logout(): void {
    this.authenticationService.logout();
    this.router.navigate(['/']);
  }

   ngOnInit(): void {
    this.searchString = null;
  }
}
