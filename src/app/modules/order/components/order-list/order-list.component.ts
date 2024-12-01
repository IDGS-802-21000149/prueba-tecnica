import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../../../core/services/order.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
})
export class OrderListComponent implements OnInit {
[x: string]: any;
  orders: any[] = [];
  selectedOrders: any[] = [];

  constructor(private orderService: OrderService) {}

  ngOnInit() {
    this.orderService.getOrders().subscribe((data) => {
      this.orders = data;
    });
  }



  deleteSelectedOrders() {
    this.selectedOrders.forEach((order) => {
      this.orderService.deleteOrder(order.id).subscribe(() => {
        this.orders = this.orders.filter((o) => o.id !== order.id);
      });
    });
  }
}
