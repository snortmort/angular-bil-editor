import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { TopBarComponent } from "./top-bar/top-bar.component";
import { KjoretoyService } from "./kjoretoy.service";
import { KjoretoyListeComponent } from "./kjoretoy-liste/kjoretoy-liste.component";
import { SmilComponent } from "./smil/smil.component";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: "", component: SmilComponent },
      { path: "kjoretoy", component: KjoretoyListeComponent },
      { path: "smil", component: SmilComponent }
      // { path: "cart", component: CartComponent },
      // { path: "shipping", component: ShippingComponent }
    ])
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    TopBarComponent,
    KjoretoyListeComponent,
    SmilComponent
  ],
  bootstrap: [AppComponent],
  providers: [KjoretoyService]
})
export class AppModule {}
