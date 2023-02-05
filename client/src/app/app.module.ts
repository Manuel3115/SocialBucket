import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
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
import { ObjectivesToAddPageComponent } from './pages/objectives-to-add-page/objectives-to-add-page.component';
import { BucketListToAddComponent } from './components/bucket-list-to-add/bucket-list-to-add.component';
import { ObjectiveToAddComponent } from './components/bucket-list-to-add/objective-to-add/objective-to-add.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    AccountPageComponent,
    NavigationComponent,
    BucketListComponent,
    ObjectiveComponent,
    LogInComponent,
    LogInPageComponent,
    ObjectivesToAddPageComponent,
    BucketListToAddComponent,
    ObjectiveToAddComponent
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
