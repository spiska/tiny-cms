import { AdminComponent } from './admin/admin.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { BoardComponent } from './board/board.component';
import { AdminRegisterComponent } from './admin/admin-register/admin-register.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppRoutes } from './app.routes';
import { AuthenticationGuard } from './admin/authentication.guard';
import { AdminPanelComponent } from './admin/admin-panel/admin-panel.component';
import { CustomHttpProvider } from './custom-http';
import { AuthenticationService } from "./admin/authentication.service";
import { AdminPostComponent } from './admin/admin-post/admin-post.component';

import { MdButtonModule, MdCardModule, MdToolbarModule, MdMenuModule, MdIconModule, MdInputModule } from '@angular/material';
import { NavBarComponent } from "./nav-bar/nav-bar.component";
import { AdminPostService } from "./admin/admin-post.service";
import { UserService } from "./user.service";
import { MarkSearchPhrasePipe } from "app/board/mark-search-phrase.pipe";

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,

    BoardComponent,
    AdminComponent,

    AdminPanelComponent,
    AdminLoginComponent,
    AdminRegisterComponent,
    PageNotFoundComponent,
    AdminPanelComponent,
    AdminPostComponent,

    MarkSearchPhrasePipe
  ],
  imports: [
    RouterModule.forRoot(
      AppRoutes,
      { enableTracing: true }
    ),
    BrowserAnimationsModule,

    BrowserModule,
    FormsModule,
    HttpModule,

    MdIconModule,
    MdButtonModule,
    MdCardModule,
    MdToolbarModule,
    MdMenuModule,
    MdInputModule
  ],
  providers: [
    CustomHttpProvider,
    AuthenticationGuard,
    AuthenticationService,
    AdminPostService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
