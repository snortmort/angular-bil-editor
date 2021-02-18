import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { TopBarComponent } from "./top-bar/top-bar.component";
import { BilListeComponent } from "./bil-liste/bil-liste.component";
import { FlyListeComponent } from "./fly-liste/fly-liste.component";
import { KjoretoyService } from "./kjoretoy.service";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: "", component: FlyListeComponent },
      { path: "fly", component: FlyListeComponent },
      { path: "biler", component: BilListeComponent }
      // { path: "cart", component: CartComponent },
      // { path: "shipping", component: ShippingComponent }
    ])
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    TopBarComponent,
    BilListeComponent,
    FlyListeComponent
  ],
  bootstrap: [AppComponent],
  providers: [KjoretoyService]
})
export class AppModule {}
