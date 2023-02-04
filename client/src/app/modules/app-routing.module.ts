import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogInComponent } from '../components/log-in/log-in.component';
import { AccountPageComponent } from '../pages/account-page/account-page.component';
import { LogInPageComponent } from '../pages/log-in-page/log-in-page.component';
import { MainPageComponent } from '../pages/main-page/main-page.component';

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: MainPageComponent },
    { path: 'profile', component: AccountPageComponent },
    {path:'log-in', component: LogInPageComponent},
    { path: '**', redirectTo: '/home' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule],
})
export class AppRoutingModule {}
