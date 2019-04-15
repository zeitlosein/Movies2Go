import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatDialogModule } from "@angular/material/dialog";
import { HttpClientModule } from "@angular/common/http";
import { ToastrModule } from "ngx-toastr";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { OrdersComponent } from "./orders/orders.component";
import { OrderComponent } from "./orders/order/order.component";
import { OrderItemsComponent } from "./orders/order-items/order-items.component";
import { ItemsComponent } from "./items/items.component";
import { ItemComponent } from "./items/item/item.component";
import { OrderService } from "./shared/order.service";
import { ItemService } from "./shared/item.service";

@NgModule({
  declarations: [
    AppComponent,
    OrdersComponent,
    OrderComponent,
    OrderItemsComponent,
    ItemsComponent,
    ItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    HttpClientModule,
    ToastrModule.forRoot()
  ],
  entryComponents: [OrderItemsComponent, ItemComponent],
  providers: [OrderService, ItemService],
  bootstrap: [AppComponent]
})
export class AppModule {}
