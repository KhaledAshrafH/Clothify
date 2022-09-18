import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CrudService } from "../../services/crud.service";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent implements OnInit {
  productForm!: FormGroup;
  /*
  *
  "name": "string",
  "price": 0,
  "image": "string",
  "size": "string",
  "category": "string",
  "description": "string",
  "color": "string",
  * */
  constructor(public crudservice: CrudService, private router: Router) {}

  ngOnInit(): void {
    this.productForm = new FormGroup({
      name: new FormControl(''),
      price: new FormControl(''),
      image: new FormControl(''),
      size: new FormControl(''),
      category: new FormControl(''),
      description: new FormControl(''),
      addedToCart: new FormControl("false"),
      boughtItemsCount: new FormControl("4"),
      color: new FormControl(''),
    });
  }

  submitForm(){
    this.crudservice.create(this.productForm.value).subscribe((res)=>{
      console.log("product created !!!");
      this.router.navigateByUrl('/admin');
    })
  }
}



