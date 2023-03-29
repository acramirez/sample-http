import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SuccessComponent } from './shared/success/success.component';
import { UnauthorizedComponent } from './shared/unauthorized/unauthorized.component';
import { AuthGuard } from './auth.guard';
import { InternalServerErrorComponent } from './shared/internal-server-error/internal-server-error.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';

const routes: Routes = [
  { path: 'success', component: SuccessComponent },
  { path: 'unauthorized', component: UnauthorizedComponent },
  { path: 'internal-server-error', component: InternalServerErrorComponent },
  { path: 'not-found', component: NotFoundComponent },
  { path: '', pathMatch: 'full', redirectTo: 'unauthorized' },
  { path: '**', pathMatch: 'full', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
