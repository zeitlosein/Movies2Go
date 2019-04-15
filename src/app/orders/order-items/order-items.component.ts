import { Component, OnInit, Inject } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
import { OrderItem } from "src/app/shared/order-item.model";
import { ItemService } from "src/app/shared/item.service";
import { Item } from "src/app/shared/item.model";
import { NgForm } from "@angular/forms";
import { OrderService } from "src/app/shared/order.service";

@Component({
  selector: "app-order-items",
  templateUrl: "./order-items.component.html",
  styles: []
})
export class OrderItemsComponent implements OnInit {
  formData: OrderItem;
  itemList: Item[];
  // isValid: boolean = true;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data,
    public dialogRef: MatDialogRef<OrderItemsComponent>,
    private itemService: ItemService,
    private orderService: OrderService
  ) {}

  ngOnInit() {
    this.itemService.getItemList().then(res => (this.itemList = res as Item[]));
    if (this.data.orderItemIndex == null)
      this.formData = {
        OrderItemID: null,
        OrderID: this.data.OrderID,
        ItemID: 0,
        ItemName: "",
        Cost: 0,
        Genre: "",
        Quantity: 0,
        Total: 0
      };
    else
      this.formData = Object.assign(
        {},
        this.orderService.orderItems[this.data.orderItemIndex]
      );
  }
  updateCost(ctrl) {
    if (ctrl.selectedIndex == 0) {
      this.formData.Cost = 0;
      this.formData.Genre = "";
      this.formData.ItemName = "";
    } else {
      this.formData.Cost = this.itemList[ctrl.selectedIndex - 1].Cost;
      this.formData.Genre = this.itemList[ctrl.selectedIndex - 1].Genre;
      this.formData.ItemName = this.itemList[ctrl.selectedIndex - 1].Name;
    }
    this.updateTotal();
  }

  updateTotal() {
    this.formData.Total = parseFloat(
      (this.formData.Quantity * this.formData.Cost).toFixed(2)
    );
  }
  onSubmit(form: NgForm) {
    if (this.data.orderItemIndex == null)
      this.orderService.orderItems.push(form.value);
    else this.orderService.orderItems[this.data.orderItemIndex] = form.value;
    this.dialogRef.close();
  }

  // validateForm(formData: OrderItem) {
  //   this.isValid = true;
  //   if (formData.ItemID == 0) this.isValid = false;
  //   else if (formData.Quantity == 0) this.isValid = false;
  //   return this.isValid;
  // }
}
