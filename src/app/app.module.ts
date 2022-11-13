import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule} from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatStepperModule } from '@angular/material/stepper';
import { MatChipsModule } from '@angular/material/chips';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatRippleModule } from '@angular/material/core';
import { AnimateOnScrollModule } from 'ng2-animate-on-scroll';
import { SwiperModule } from "swiper/angular";
import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ApiInterceptor } from './sevices/http/AppInterceptor';

import { HeaderComponentComponent } from './component/header-component/header-component.component';
import { FooterComponentComponent } from './component/footer-component/footer-component.component';
import { HomeComponentComponent } from './component/home-component/home-component.component';
import { CvComponentComponent } from './component/cv-component/cv-component.component';
import { AboutComponentComponent } from './component/about-component/about-component.component';
import { MyworkComponentComponent } from './component/mywork-component/mywork-component.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LoginDialogComponent } from './component/dialog/login-dialog/login-dialog.component';
import { DialogComponent } from './component/dialog/dialog/dialog.component';
import { ServicesComponent } from './component/services/services.component';
import { ProjectDetailsComponent } from './component/services/project-details/project-details.component';
import { PersonalInfoComponent } from './component/services/personal-info/personal-info.component';
import { ColorAndThemeComponent } from './component/services/color-and-theme/color-and-theme.component';
import { AdminComponent } from './component/admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentComponent,
    FooterComponentComponent,
    HomeComponentComponent,
    CvComponentComponent,
    AboutComponentComponent,
    MyworkComponentComponent,
    LoginDialogComponent,
    DialogComponent,
    ServicesComponent,
    ProjectDetailsComponent,
    PersonalInfoComponent,
    ColorAndThemeComponent,
    AdminComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    MatRippleModule,
    AnimateOnScrollModule.forRoot(),
    SwiperModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule, 
    MatSelectModule,
    MatDialogModule,
    MatIconModule,
    MatTooltipModule,
    MatStepperModule,
    MatChipsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSidenavModule,
    MatMenuModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent, AnimateOnScrollModule]
})
export class AppModule { }
