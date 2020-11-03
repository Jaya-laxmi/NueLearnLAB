import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseRoutingModule } from './course-routing.module';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [HomeComponent, HeaderComponent, CourseListComponent, CourseDetailsComponent],
  imports: [
    CommonModule,
    CourseRoutingModule,
    AngularMaterialModule,
    BrowserAnimationsModule
  ]
})
export class CourseModule { }
