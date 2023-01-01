import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home/home.component';
import { HeaderComponent } from './component/header/header.component';
import { HeroStartComponent } from './component/hero-start/hero-start.component';
import { ServicescompComponent } from './component/servicescomp/servicescomp.component';
import { SkillsComponent } from './component/skills/skills.component';
import { ResumeComponent } from './component/resume/resume.component';
import { ContactmeComponent } from './component/contactme/contactme.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    HeroStartComponent,
    ServicescompComponent,
    SkillsComponent,
    ResumeComponent,
    ContactmeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
