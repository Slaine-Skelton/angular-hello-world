import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FriendsComponent } from './friends/friends.component';
import { GenuinelyLikeComponent } from './genuinely-like/genuinely-like.component';
import { CollegeHelpComponent } from './college-help/college-help.component';
import { DetailsComponent } from './details/details.component';
import { ProfilePicComponent } from './profile-pic/profile-pic.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserItemComponent } from './user-item/user-item.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FriendsComponent,
    GenuinelyLikeComponent,
    CollegeHelpComponent,
    DetailsComponent,
    ProfilePicComponent,
    UserListComponent,
    UserItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
