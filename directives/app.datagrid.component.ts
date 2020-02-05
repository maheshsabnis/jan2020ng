import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-datagrid-component',
  templateUrl: './app.datagrid.view.html' 
})
export class DataGridComponent implements OnInit {
  private _DataSource: Array<any>;
  columnHeaders: Array<string>;
  @Output()
  notifyData: EventEmitter<any>;
  constructor() { 
    this._DataSource = new Array<any>();
    this.columnHeaders = new Array<string>();
    this.notifyData = new EventEmitter<any>();
  }


  @Input()
  set DataSource(val: Array<any>) {
    if(val.length > 0) {
      this._DataSource = val;

      for(let c in this._DataSource[0])  {
        this.columnHeaders.push(c);
      }
    }
  }
  get DataSource(): Array<any> {
    return this._DataSource;
  }

  getSelectedValue(val: any) : void {
    this.notifyData.emit(val);
  }
  ngOnInit(): void { }
}
