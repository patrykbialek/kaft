import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
import { MainIndustriesComponent } from './main/main-industries/main-industries.component';
import { StickyHeaderComponent } from './sticky-header.component';
import { MainCompaniesComponent } from './main/main-companies/main-companies.component';

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
    MainServicesComponent,
    MainIndustriesComponent,
    StickyHeaderComponent,
    MainCompaniesComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
