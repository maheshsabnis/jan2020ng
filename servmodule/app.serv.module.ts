import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import { HttpService } from './services/app.http.service';
import { SecureService } from './services/app.secure.service';
import {CommunicationService} from './services/app.communication.service';
@NgModule({
  imports: [ CommonModule, HttpClientModule ],
  exports: [],
  providers: [HttpService, SecureService,CommunicationService]
})
export class ServiceModule {}