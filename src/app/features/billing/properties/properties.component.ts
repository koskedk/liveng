import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {config, Observable} from "rxjs";
import {Property} from "../_models/property";
import {propertiesFeatureKey, BillingState} from "../store/billing.reducers";
import {enterProperties} from "../store/billing.actions";
import {selectBillingProperties, selectBillingPropertiesError} from "../store/billing.selectors";

@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.scss']
})
export class PropertiesComponent implements OnInit{
  properties$:Observable<Property[]>;
  error$:Observable<string>;
  constructor(readonly store:Store<BillingState>) {
    this.error$ = store.select(selectBillingPropertiesError)
    this.properties$ = store.select(selectBillingProperties)
  }

  ngOnInit(): void {
    this.store.dispatch(enterProperties())
  }

  protected readonly config = config;
}
