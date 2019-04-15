import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { OrdersComponent } from "./orders/orders.component";
import { OrderComponent } from "./orders/order/order.component";
import { ItemsComponent } from "./items/items.component";
import { ItemComponent } from "./items/item/item.component";

const routes: Routes = [
  { path: "", redirectTo: "order", pathMatch: "full" },
  { path: "orders", component: OrdersComponent },
  {
    path: "order",
    children: [
      { path: "", component: OrderComponent },
      { path: "edit/:id", component: OrderComponent }
    ]
  },
  { path: "items", component: ItemsComponent },
  {
    path: "item",
    children: [
      { path: "", component: ItemComponent },
      { path: "edit/:id", component: ItemComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
