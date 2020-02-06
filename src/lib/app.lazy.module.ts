import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MyTestComponent } from './components/mytestcomponent/app.mytest.component';

const routes: Routes = [
  {path:'', component:MyTestComponent}
];

@NgModule({
  declarations: [MyTestComponent],
  imports: [ CommonModule, RouterModule.forChild(routes) ] 
  // forChild() method will load all routes as child roues in the Lazy Loaded Module
})
export class LazyModule {}