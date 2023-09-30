import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {Category, CategoryAddEditDto} from "../../_models/category";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Store} from "@ngrx/store";

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.scss']
})
export class CategoryDetailComponent {
  originalCategory: Category | undefined;
  categoryForm: FormGroup;
  @Output() save = new EventEmitter<Category>();
  @Output() cancel = new EventEmitter();

  @Input() set category(category: Category | null) {

    this.categoryForm.reset();
    this.originalCategory = undefined;

    if (category) {
      this.categoryForm.setValue({
        name: category.name,
        description: category.description
      })
      this.originalCategory = category;
    }
  }

  constructor(private store: Store, private fb: FormBuilder) {
    this.categoryForm = this.fb.group({
      name: ['', Validators.required],
      description: ['']
    });
  }

  saveCategory(category: Category) {
    console.log('originalCategory',this.originalCategory)
    console.log('category',category)
    this.save.emit({...this.originalCategory, ...category});
  }

  cancelSaveCategory() {
    this.cancel.emit()
  }
}
