import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class VehicleService {
  constructor(private http: HttpClient) {}
  // items = [];

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
    return this.http.get<any[]>("/assets/vehicles.json");
  }
}
