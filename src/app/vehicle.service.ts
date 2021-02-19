import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, range } from "rxjs";
import { filter, map } from "rxjs/operators";

@Injectable()
export class VehicleService {
  constructor(private http: HttpClient) {}
  vehicles;

  // createVehicle(vehicle) {
  //   this.items.push(vehicle);
  // }

  getVehicle(id) {
    this.vehicles = this.http
      .get("/assets/vehicles.json").subscribe(vehicle => {
        this.myGridOptions.rowData = countries as CountryData[]
    console.log(this.vehicles);
    return this.vehicles.find(vehicle => vehicle.id === id);
  }

  // deleteVehicle(id) {
  //   this.items = [];
  //   return this.items;
  // }

  getAllVehicles() {
    return this.http.get<any[]>("/assets/vehicles.json");
  }
}
