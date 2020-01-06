import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from "./components/about/about.component";
import { ProgrammingLanguagesComponent } from './components/programming-languages/programming-languages.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { IdesComponent } from './components/ides/ides.component';
import { JsFrameworksComponent } from './components/js-frameworks/js-frameworks.component';
import { FrontEndComponent } from './components/front-end/front-end.component';
import { BackEndComponent } from './components/back-end/back-end.component';
import { TensorflowComponent } from './components/tensorflow/tensorflow.component';
import { AlgorithmsComponent } from './components/algorithms/algorithms.component';
import { LibrariesComponent } from './components/libraries/libraries.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component'


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'programming', component: ProgrammingLanguagesComponent},
  {path: 'experience', component: ExperienceComponent},
  {path: 'ides', component: IdesComponent},
  {path: 'js', component: JsFrameworksComponent},
  {path: 'frontend', component: FrontEndComponent},
  {path: 'backend', component: BackEndComponent},
  {path: 'tensorflow', component: TensorflowComponent},
  {path: 'algorithms', component: AlgorithmsComponent},
  {path: 'libraries', component: LibrariesComponent},
  {path: 'contact', component: ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
