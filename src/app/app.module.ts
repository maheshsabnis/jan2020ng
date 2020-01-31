import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {SimpleComponent} from './components/simplecomponent/app.simple.component';
import { StudentFormComponent } from './components/studentformcomponent/app.studentform.component';
import { StudentReactiveFormComponent } from './components/studentreactiveformcomponent/app.studentreactiveform.component';
// declarations: of the type array, used to declare all components, pipes 
// and directives in current application to be loaded
// imports: of the type array, used to import standard modules and custom 
// external modules in current application
// providers: of the type array, used to initialize DI Container for all
// angular services
// bootstrap: of the type array, used to instantiate the component from
// declarations to be loaded and rendered when application starts
@NgModule({
  declarations: [
    AppComponent, SimpleComponent, StudentFormComponent,
    StudentReactiveFormComponent
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [StudentReactiveFormComponent]
})
export class AppModule { }
