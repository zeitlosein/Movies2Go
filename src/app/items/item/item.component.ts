import { Component, OnInit } from "@angular/core";
import { ItemService } from "src/app/shared/item.service";
import { NgForm } from "@angular/forms";
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";

@Component({
  selector: "app-item",
  templateUrl: "./item.component.html",
  styles: []
})
export class ItemComponent implements OnInit {
  constructor(private service: ItemService, private dialog: MatDialog) {}

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if ((form = null)) form.resetForm();
    this.service.formData = {
      ItemID: null,
      Name: "",
      Cost: 0,
      Genre: ""
    };
  }
  AddOrEditItem(ItemsIndex, ItemID) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = "50%";
    dialogConfig.data = { ItemsIndex, ItemID };
    this.dialog.open(ItemComponent, dialogConfig);
  }
}
