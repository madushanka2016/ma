import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EducationComponent } from './education/education.component';
import { HomeComponent } from './home/home.component';
import { MainGrilComponent } from './main-gril/main-gril.component';
import { ProjectComponent } from './project/project.component';
import { SkillComponent } from './skill/skill.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Routes, RouterModule } from '@angular/router'

import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    EducationComponent,
    HomeComponent,
    MainGrilComponent,
    ProjectComponent,
    SkillComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    RouterModule.forRoot([
      { path: '' , component: HomeComponent },
      { path: 'education' , component: EducationComponent },
      { path: 'skill' , component: SkillComponent },
      { path: 'project' , component: ProjectComponent },
    ]
    ),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
