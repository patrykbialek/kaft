import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { AppFooterComponent } from './app-footer/app-footer.component';
import { MainComponent } from './main/main.component';
import { ServicesComponent } from './services/services.component';
import { IndustriesComponent } from './industries/industries.component';
import { CaseStudiesComponent } from './case-studies/case-studies.component';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { MainIntroComponent } from './main/main-intro/main-intro.component';
import { MainServicesComponent } from './main/main-services/main-services.component';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    AppFooterComponent,
    MainComponent,
    ServicesComponent,
    IndustriesComponent,
    CaseStudiesComponent,
    AboutComponent,
    BlogComponent,
    MainIntroComponent,
    MainServicesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
