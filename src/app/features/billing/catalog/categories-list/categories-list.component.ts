import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Category} from "../../_models/category";

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.scss']
})
export class CategoriesListComponent {
  @Input()
  categories: Category[]
  @Output()
  select = new EventEmitter<Category>();

  selectCategory(category: Category) {
    this.select.emit(category)
  }
}
