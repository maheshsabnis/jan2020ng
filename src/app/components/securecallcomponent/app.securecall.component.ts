import { Component, OnInit } from '@angular/core';
import { SecureService } from '../../../servmodule/services/app.secure.service';
import { Product, Register, ResponseData, Login } from '../../models/app.secure.models';

@Component({
  selector: 'app-securecall-component',
  template: `
     <input type="button" value="register" class="btn btn-warning" (click)="register()"/>
     <br>
     <input type="button" value="login" class="btn btn-success" (click)="login()"/>
     <br>
     <input type="button" value="get data" class="btn btn-danger" (click)="getdata()"/>
  ` 
})
export class SecureCallComponent implements OnInit {
  products: Array<Product>;
  constructor(private serv: SecureService) {
    this.products = new Array<Product>();
   }

   register(): void {
     let user: Register = new Register("jb@msit.com", "P@ssw0rd_","P@ssw0rd_");
     this.serv.createUser(user).subscribe((resp: ResponseData)=>{
       console.log(JSON.stringify(resp));
     },(error)=>{
       console.log(error);
     });
   }
   login(): void {
    let user: Login = new Login("jb@msit.com", "P@ssw0rd_");
    this.serv.login(user).subscribe((resp)=>{
      console.log(JSON.stringify(resp));
      localStorage.setItem('token',resp.message);
    },(error)=>{
      console.log(error);
    });
   }
   getdata(): void {
     let token = localStorage.getItem('token');
     this.serv.getData(token).subscribe((resp) => {
        this.products = resp;
        console.log(JSON.stringify(this.products));
     }, (error) => {
      console.log(error);
     });
   }

  ngOnInit(): void { }
}
