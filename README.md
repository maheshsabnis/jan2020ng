package.json

1. npm init -y command
   1. Generate package.json with defaults
2. npm init command
   1. Provide command line wizard to generate package.json

Angular Standard Packages

1. @angular/core
   1. Standard Angular objects e.g. NgModule, Component, Directive, Pipe, Inejctable etc.
2. @angular/forms
   1. Angular Forms
      1. Template Forms aka standard HTML Forms
      2. Reactive Forms / Model-Driven-Forms
         1. Model is tightly Coupled with the Form
         2. Validations
   2. FormsModule, used for ngModel
   3. ReactiveFormsModule
3. "@angular/compiler
   1. Angular Compiler Services
      1. Minification, merging and Compression
      2. Ahead-Of-Time Compiler (AoT)
      3. Ivy (Angular 8)
4. @angular/common
   1. Module-loaders
   2. 5+, @angular/common/http --> HttpClientModule
5. @angular/router
   1. Routing
6. @angular/platform-browser
   1. Provides BrowserModule, to load angular module in browser to starts app execution
7. @angular/platform-browser-dynamic
   1. platformBrowserDynamic
      1. boostrap the angular module so that BrowserModule can further load and execute it.
8. tslib

==============================================================================
Module Name

1. app.<name>.module.ts
   1. Class Name will be --> <name>Module
2. Component
   1. app.<name>.component.ts
      1. app-<name>-component --> selector
3. Service
   1. app.<name>.service.ts
4. Pipe
   1. app.<name>.pipe.ts
5. Directive
   1. app.<name>.directive.ts

============================================================================
Decorators
Classes applied on TypeScript class, method, property, member to define its behavior

1. @NgModule, applied on class to use it as Angular Module
2. @Component, applied on class to use it as Angular Component
3. @Injectable, applied on class to use it as Angular Service
4. @Directive, applied on class to use it as Angular Directive
5. @Pipe, applied on class to use it as Angular Pipe

==============================================================================
Angular Programming

1. Forms --> <form></form> --> map with ngForm
   1. Template Forms
      1. Default HTML form with 'name' attribute for each editable element
   2. Reactive Forms
      1. ReactiveFormsModule --> @angular/forms
         1. FormGroup
            1. Form mapper to read/write data from form-elements
            2. The 'value' property will provide FormModel
         2. FormControl
            1. Mapping between Model-Property and Form-Element
            2. the 'formControlName' the reactive attribute of Form-Element to bind Model properties (replacement of ngModel)
            3. The 'value' property will read individual form-element's value
            4. The 'setValue()' method to write data in form-element
      2. Validations
         1. The 'Validators' class
         2. Methods
            1. required(), min(), max(), minLength(), maxLength(), requiredTrue(), email(), compose([array of Validation rules])
2. Directives
   1. Component Directive
   2. Structural Directive
      1. Add/Remove DOM based on Binding
         1. \*ngFor=""
         2. \*ngIf
         3. *ngSwitch--*ngSwitchCase
   3. Attribute Directive
      1. ngModel
3. Communication Across Components
   1. Input and Output
   2. Disconnected Communication Using Service
4. Service
   1. Http Calls
   2. Interceptor
   3. Secure Calls
5. Routing
   1. Route Tables
   2. Child Routing / Sub Routing
   3. Lazy Loading
6. NGRX
   1. FLux
