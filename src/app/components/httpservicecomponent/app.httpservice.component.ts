import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../../servmodule/services/app.http.service';
import { Product } from '../../models/app.product.model';

@Component({
  selector: 'app-httpservice-component',
  template: `
    <input type="button" value="get" class="btn btn-warning" (click)="getData()"/>
    <br>
    <input type="button" value="post" class="btn btn-success" (click)="saveData()"/>
  ` 
})
export class HttpServiceComponent implements OnInit {
  products: Array<Product>;
  constructor(private serv: HttpService) { 
      this.products = new Array<Product>();
  }

  ngOnInit(): void { 
    this.loadData();
  }

  private loadData(): void {
    this.serv.getData().subscribe((resp) => {
        this.products = resp;
        console.log(`Received Data ${JSON.stringify(this.products)}`);
    }, (error)=>{
       console.log(`Error occured ${error}`);
    });
  }

  getData(): void {
    this.loadData();
  }

  saveData(): void{
    let prd: Product = new Product(
      0, 'Prd0001', 'Laptop', 'Electronics', 'IBM', 'Gaming', 120000
    );
    this.serv.postData(prd).subscribe((resp) => {
      console.log(`Received Data ${JSON.stringify(resp)}`);
  }, (error) => {
     console.log(`Error occured ${error}`);
  });
  }
}
