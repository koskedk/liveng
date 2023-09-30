import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {Category} from "../../_models/category";
import {Store} from "@ngrx/store";
import {
  selectActiveBillingCategory, selectBillingCategoryError,
  selectBillingCategoryList,
  selectBillingCategoryLoading
} from "../../catalog/+state/categories.selectors";
import {
  clearActiveCategory, createCategory, deleteCategory,
  loadCategoryList,
  setActiveCategory,
  updateCategory
} from "../../catalog/+state/categories.actions";

@Component({
  selector: 'app-categories-page',
  templateUrl: './categories-page.component.html',
  styleUrls: ['./categories-page.component.scss']
})
export class CategoriesPageComponent implements OnInit {
  category$: Observable<Category>;
  categoryList$: Observable<Category[]>;
  loading$: Observable<boolean>;
  error$: Observable<string>;

  constructor(readonly store: Store) {
    this.category$ = store.select(selectActiveBillingCategory);
    this.categoryList$ = store.select(selectBillingCategoryList);
    this.loading$ = store.select(selectBillingCategoryLoading);
    this.error$ = store.select(selectBillingCategoryError);
  }

  ngOnInit(): void {
    this.store.dispatch(loadCategoryList());
  }

  onSelect($event: Category) {
    this.store.dispatch(setActiveCategory({activeCategory: $event}));
  }

  onAdd($event: Category) {
    this.store.dispatch(createCategory({category: $event}));
  }

  onEdit($event: Category) {
    this.store.dispatch(updateCategory({id: $event.id, category: $event}));
  }

  onDelete($event: Category) {
    this.store.dispatch(deleteCategory({id: $event.id}));
  }


  onCancel() {
    this.store.dispatch(clearActiveCategory());
  }
}
