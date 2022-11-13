import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponentComponent} from './component/home-component/home-component.component';
import {MyworkComponentComponent} from './component/mywork-component/mywork-component.component';
import {CvComponentComponent} from './component/cv-component/cv-component.component';
import {AboutComponentComponent} from './component/about-component/about-component.component';
import { ServicesComponent } from './component/services/services.component';
import { AdminComponent } from './component/admin/admin.component';

const routes: Routes = [
  {path: '', component: HomeComponentComponent},
  {path: 'my-work', component: MyworkComponentComponent},
  {path: 'services', component: ServicesComponent},
  {path: 'curriculum-vitae', component: CvComponentComponent},
  {path: 'about', component: AboutComponentComponent},
  {path: 'admin', component: AdminComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
