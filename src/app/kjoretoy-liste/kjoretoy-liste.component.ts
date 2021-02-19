import { Component, OnInit } from "@angular/core";
import { VehicleService } from "../vehicle.service";

@Component({
  selector: "app-kjoretoy-liste",
  templateUrl: "./kjoretoy-liste.component.html",
  styleUrls: ["./kjoretoy-liste.component.css"]
})
export class KjoretoyListeComponent implements OnInit {
  vehicleList = this.vehicleService.getAllVehicles();
  constructor(private vehicleService: VehicleService) {}

  ngOnInit() {}
}
