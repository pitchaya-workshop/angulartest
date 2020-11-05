import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component'
import { PreviewComponent } from './preview/preview.component';
import { AuthGuard } from './guard/auth-guard'
const routes: Routes = [
  { path: '', loadChildren:'./preview/preview.module#PreviewModule',canActivate:[AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
