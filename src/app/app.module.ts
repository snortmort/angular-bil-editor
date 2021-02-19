import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { TopBarComponent } from "./top-bar/top-bar.component";
import { VehicleService } from "./vehicle.service";
import { KjoretoyListeComponent } from "./kjoretoy-liste/kjoretoy-liste.component";
import { NyKjoretoyComponent } from "./ny-kjoretoy/ny-kjoretoy.component";

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: "", component: KjoretoyListeComponent },
      { path: "kjoretoy", component: KjoretoyListeComponent },
      { path: "legg-til-kjoretoy", component: NyKjoretoyComponent }
      // { path: "cart", component: CartComponent },
      // { path: "shipping", component: ShippingComponent }
    ])
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    TopBarComponent,
    KjoretoyListeComponent,
    NyKjoretoyComponent
  ],
  bootstrap: [AppComponent],
  providers: [VehicleService]
})
export class AppModule {}
