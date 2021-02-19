import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { VehicleService } from "../vehicle.service";

@Component({
  selector: "app-vehicle-detail",
  templateUrl: "./vehicle-detail.component.html",
  styleUrls: ["./vehicle-detail.component.css"]
})
export class VehicleDetailComponent implements OnInit {
  vehicle;
  constructor(
    private route: ActivatedRoute,
    private vehicleService: VehicleService
  ) {}

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const vehicleIdFromRoute = Number(routeParams.get("vehicleId"));
    // this.vehicle = this.vehicleService.getVehicle(vehicleIdFromRoute);
    console.log(vehicleIdFromRoute);
    // this.vehicle = products.find(product => product.id === productIdFromRoute);
  }
}
