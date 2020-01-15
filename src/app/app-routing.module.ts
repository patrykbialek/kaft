import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './main/main.component';
import { ServicesComponent } from './services/services.component';
import { IndustriesComponent } from './industries/industries.component';
import { CaseStudiesComponent } from './case-studies/case-studies.component';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'services',
    component: ServicesComponent
  },
  {
    path: 'industries',
    component: IndustriesComponent
  },
  {
    path: 'case-studies',
    component: CaseStudiesComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'blog',
    component: BlogComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
