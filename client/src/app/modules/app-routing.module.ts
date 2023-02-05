import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatComponent } from '../chat/chat.component';
import { LogInComponent } from '../components/log-in/log-in.component';
import { AccountPageComponent } from '../pages/account-page/account-page.component';
import { LogInPageComponent } from '../pages/log-in-page/log-in-page.component';
import { ObjectivesToAddPageComponent } from '../pages/objectives-to-add-page/objectives-to-add-page.component';

const routes: Routes = [
    { path: '', redirectTo: '/log-in', pathMatch: 'full' },
    { path: 'profile', component: AccountPageComponent },
    { path: 'chat', component: ChatComponent },
    {path:'log-in', component: LogInPageComponent},
    {path:'objectives-to-add', component: ObjectivesToAddPageComponent},
    { path: '**', redirectTo: '/home' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule],
})
export class AppRoutingModule {}
