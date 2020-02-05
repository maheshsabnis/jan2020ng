import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class CommunicationService {
  notify: EventEmitter<string>;
  constructor() {
    this.notify = new EventEmitter<string>();
  }

  notifyData(uname: string): void {
    this.notify.emit(uname);
    console.log(`in service ${uname}`);
  }

}
