import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { ConfigureItemsComponent } from './configure-items/configure-items.component';
import { UserListComponent } from './user-list/user-list.component';
import { AlumniComponent } from './alumni/alumni.component';


const routes: Routes = [
  {
    path: 'alumni',
    component: AlumniComponent,
  },
  {
    path: 'begin',
    component: ToolbarComponent,
  },
  {
    path: 'userlist',
    component: UserListComponent,
  },
  {
    path: 'config',
    component: ConfigureItemsComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'login',
  },
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
