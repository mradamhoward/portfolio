import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AboutComponent } from './components/about/about.component';
import { ProgrammingLanguagesComponent } from './components/programming-languages/programming-languages.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { IdesComponent } from './components/ides/ides.component';
import { JsFrameworksComponent } from './components/js-frameworks/js-frameworks.component';
import { FrontEndComponent } from './components/front-end/front-end.component';
import { BackEndComponent } from './components/back-end/back-end.component';
import { TensorflowComponent } from './components/tensorflow/tensorflow.component';
import { LibrariesComponent } from './components/libraries/libraries.component';
import { AlgoritmsComponent } from './components/algoritms/algoritms.component';
import { AlgorithmsComponent } from './components/algorithms/algorithms.component';
import { ContactComponent } from './components/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    AboutComponent,
    ProgrammingLanguagesComponent,
    ExperienceComponent,
    IdesComponent,
    JsFrameworksComponent,
    FrontEndComponent,
    BackEndComponent,
    TensorflowComponent,
    LibrariesComponent,
    AlgoritmsComponent,
    AlgorithmsComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
