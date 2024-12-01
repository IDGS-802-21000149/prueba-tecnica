import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OrderService } from '../../../../../app/core/services/order.service';
import { UserService } from '../../../../../app/core/services/user.service';
import { ProductService } from '../../../../../app/core/services/product.service';
import { User } from '../../../../core/models/user.interface';
import { Product } from '../../../../core/models/product.interface';


@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.css']

})
export class OrderFormComponent implements OnInit {
  orderForm!: FormGroup;
  users: User[] = [];
  products: Product[] = [];

  constructor(private fb: FormBuilder,
     private orderService: OrderService,
    private userService: UserService,
    private productService: ProductService
    ) {}

  ngOnInit() {
    this.orderForm = this.fb.group({
      userId: ['', Validators.required],
      productId: ['', Validators.required],
      quantity: [1, [Validators.required, Validators.min(1)]],
      unitPrice: [0, Validators.required],
    });

    // Cargar usuarios y productos
    this.userService.getUsers().subscribe((data) => (this.users = data));
    this.productService.getProducts().subscribe((data) => (this.products = data));
  }

  onSubmit() {
    if (this.orderForm.valid) {
      this.orderService.createOrder(this.orderForm.value).subscribe((res) => {
        console.log('Order Created', res);
      });
    }
  }
}
