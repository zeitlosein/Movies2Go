import { Injectable } from "@angular/core";
import { Item } from "./item.model";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root"
})
export class ItemService {
  formData: Item;
  movieItems: Item[];
  constructor(private http: HttpClient) {}

  getItemList() {
    return this.http.get(environment.apiURL + "/Item").toPromise();
  }
}
