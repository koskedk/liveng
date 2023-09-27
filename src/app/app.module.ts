import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {CoreModule} from "./core/core.module";
import {SharedModule} from "./shared/shared.module";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {StoreModule} from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      maxAge: 15,
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
