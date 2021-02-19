import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class VehicleService {
  items = [];

  // createVehicle(vehicle) {
  //   this.items.push(vehicle);
  // }

  // getVehicle() {
  //   return this.items;
  // }

  // deleteVehicle(id) {
  //   this.items = [];
  //   return this.items;
  // }

  getAllVehicles() {
    return this.http.get("/assets/vehicles.json");
  }
  constructor(private http: HttpClient) {}
}
