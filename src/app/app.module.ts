import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {SimpleComponent} from './components/simplecomponent/app.simple.component';
import { StudentFormComponent } from './components/studentformcomponent/app.studentform.component';
import { StudentReactiveFormComponent } from './components/studentreactiveformcomponent/app.studentreactiveform.component';
import { UniversityComponent } from './components/masterdetails/app.university.component';
import { StudentComponent } from './components/masterdetails/app.student.component';
import { UtilityComponent } from './components/utilitycomponent/app.utility.component';
import { UtilityService } from './services/app.utility.service';
import { HttpServiceComponent } from './components/httpservicecomponent/app.httpservice.component';
import {ServiceModule} from './../servmodule/app.serv.module';
import { SecureCallComponent } from './components/securecallcomponent/app.securecall.component';
import { UniversitySenderComponent} from './components/masterdetailsservice/app.universitysender.component'
import { StudentReceiverComponent } from './components/masterdetailsservice/app.studentreceiver.component';
import { DataGridComponent } from './directives/app.datagrid.component';
import { ColorDirective } from './directives/app.color.directive';
import { ColorDirectiveComponent } from './components/colordirectivecomponent/app.colordirective.component';
import { HomeComponent } from './components/routingapp/app.home.component';
import { AboutComponent } from './components/routingapp/app.about.component';
import { ContactComponent } from './components/routingapp/app.contact.component';
import { MainComponent } from './components/routingapp/app.main.component';
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
    StudentReactiveFormComponent, UniversityComponent,
     StudentComponent, UtilityComponent, 
     HttpServiceComponent, SecureCallComponent,
     UniversitySenderComponent, StudentReceiverComponent,
     DataGridComponent, ColorDirective, ColorDirectiveComponent,
     HomeComponent, AboutComponent, ContactComponent, MainComponent
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule,
    AppRoutingModule, ServiceModule
  ], //  AppRoutingModule --> Load the Route Table at AppModule Level aka root level
  providers: [UtilityService],
  bootstrap: [MainComponent]
})
export class AppModule { }
