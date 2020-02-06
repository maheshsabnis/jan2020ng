import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/routingapp/app.home.component';
import { AboutComponent } from './components/routingapp/app.about.component';
import { ContactComponent } from './components/routingapp/app.contact.component';
import { StudentFormComponent } from './components/studentformcomponent/app.studentform.component';

// define the route table

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'about/:id', component:AboutComponent},
  {path:'contact', component:ContactComponent, 
    children: [
      {path:'student', component: StudentFormComponent}
  ]},
  {path:'lazy', loadChildren:'./../lib/app.lazy.module#LazyModule'},
  {path:'**', redirectTo:''} // path other than the route path('','about','contact')
]; // redirectTo the '' (default)

@NgModule({
  imports: [RouterModule.forRoot(routes)], // registering the RouteTable at application root level
  exports: [RouterModule] // exports the RouterModule with Route Table to AppModule 
})
export class AppRoutingModule { }
