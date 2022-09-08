import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from "../../interfaces/product";
import { CrudService } from "../../services/crud.service";

@Component({
  selector: 'app-home',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  products: Product[] = [];

  constructor(public crudservice: CrudService, private router: Router) {}

  ngOnInit(): void {
    this.crudservice.getAllProducts().subscribe((data: Product[]) => {
      console.log('data = ', data);
      this.products = data;
    });
  }

  navigateToCreateComponent() {
    this.router.navigateByUrl('/crud/create');
  }

  removeItem(id: string) {
    this.crudservice.deleteItem(id).subscribe((data) => {
      console.log('Item deleted ..... ');
      this.getAllproducts();
    });
    this.router.navigate(['/admin'])
      .then(() => {
        window.location.reload();
      });
  }

  updateItem(id:string){
    this.router.navigateByUrl('crud/update/'+id);
  }

  getAllproducts() {
    this.crudservice.getAllProducts().subscribe((data: Product[]) => {
      this.products = data;
    });
  }
}
