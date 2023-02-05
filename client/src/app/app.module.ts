import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ChatComponent } from './chat/chat.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { AccountPageComponent } from './pages/account-page/account-page.component';
import { AppRoutingModule } from './modules/app-routing.module';
import { NavigationComponent } from './components/navigation/navigation.component';
import { BucketListComponent } from './components/bucket-list/bucket-list.component';
import { ObjectiveComponent } from './components/bucket-list/objective/objective.component';
import { AppMaterialModule } from './modules/material.module';
import { LogInComponent } from './components/log-in/log-in.component';
import { LogInPageComponent } from './pages/log-in-page/log-in-page.component';
import { SocialPostComponent } from './components/social-post/social-post.component';

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    MainPageComponent,
    AccountPageComponent,
    NavigationComponent,
    BucketListComponent,
    ObjectiveComponent,
    LogInComponent,
    LogInPageComponent,
    SocialPostComponent
  ],
  imports: [
    AppMaterialModule,
    AppRoutingModule,
    BrowserModule,
    NoopAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
