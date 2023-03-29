import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SuccessComponent } from './shared/success/success.component';
import { UnauthorizedComponent } from './shared/unauthorized/unauthorized.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { InternalServerErrorComponent } from './shared/internal-server-error/internal-server-error.component';
import { AppService } from './app.service';

@NgModule({
  declarations: [
    AppComponent,
    SuccessComponent,
    UnauthorizedComponent,
    NotFoundComponent,
    InternalServerErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
