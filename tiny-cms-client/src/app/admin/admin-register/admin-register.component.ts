import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user.service';
import { Router } from '@angular/router';
import { appConfig } from '../../app.config'
import { User } from "app/models/user.model";

@Component({
  selector: 'app-admin-register',
  templateUrl: './admin-register.component.html',
  styleUrls: ['./admin-register.component.css']
})
export class AdminRegisterComponent implements OnInit {
  model: User;
  loading: boolean = false;

  loginUrl: string = appConfig.loginUrl;

  constructor(private router: Router,
    private userService: UserService) { }

  register() {
    this.loading = true;
    this.userService.create(this.model)
      .subscribe(data => {
        this.goToLogin();
      },
      error => {
        this.loading = false;
      });
  }

  goToLogin(): void {
    this.router.navigate([appConfig.loginUrl]);
  }

  ngOnInit(): void {
    this.model = new User();
  }
}
