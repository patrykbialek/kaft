import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KtAppHeaderComponent } from './kt-app-header/kt-app-header.component';
import { KtAppFooterComponent } from './kt-app-footer/kt-app-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    KtAppHeaderComponent,
    KtAppFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
