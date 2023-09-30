import {Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core';
import {Category} from "../../_models/category";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Store} from "@ngrx/store";

@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.scss']
})
export class CategoryDetailComponent implements OnChanges {
  @Input()
  category: Category;
  @Output()
  save = new EventEmitter<Category>();
  @Output()
  cancel = new EventEmitter();
  categoryForm: FormGroup;


  constructor(private store: Store, private fb: FormBuilder) {
    this.categoryForm = this.fb.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
      description: ['']
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.category) {
      this.categoryForm.setValue({
        id: this.category.id,
        name: this.category.name,
        description: this.category.description
      })
    }
  }


  saveCategory() {
    this.save.emit(this.categoryForm.value)
  }

  cancelSaveCategory() {
    this.cancel.emit()
  }


}
