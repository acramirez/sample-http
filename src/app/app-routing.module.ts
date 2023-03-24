import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SuccessComponent } from './shared/success/success.component';
import { UnauthorizedComponent } from './shared/unauthorized/unauthorized.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: 'success', component: SuccessComponent, canActivate: [AuthGuard] },
  { path: 'unauthorized', component: UnauthorizedComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
