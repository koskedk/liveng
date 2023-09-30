import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, concatMap, exhaustMap, map, mergeMap, of} from "rxjs";
import {CategoryService} from "../../_services/category.service";
import {
  createCategory, createCategoryFailure, createCategorySuccess,
  deleteCategory, deleteCategoryFailure, deleteCategorySuccess,
  loadCategoryList, loadCategoryListFailure, loadCategoryListSuccess,
  updateCategory, updateCategoryFailure, updateCategorySuccess
} from "./categories.actions";

@Injectable()
export class CategoriesEffects {
  constructor(
    private categoryService: CategoryService,
    private action$: Actions) {
  }

  loadCategoryList$ = createEffect(() => this.action$.pipe(
      ofType(loadCategoryList),
      exhaustMap(() => this.categoryService.getCategories()
        .pipe(
          map((categories) => loadCategoryListSuccess({categories})),
          catchError(error => {
            return of(loadCategoryListFailure({error: `${error.message}`}));
          })
        )
      )
    )
  );

  createCategory$ = createEffect(() => this.action$.pipe(
      ofType(createCategory),
      concatMap((a) => this.categoryService.createCategory(a.category)
        .pipe(
          map((category) => createCategorySuccess({category})),
          catchError(error => {
            return of(createCategoryFailure({error: `${error.message}`}));
          })
        )
      )
    )
  );

  updateCategory$ = createEffect(() => this.action$.pipe(
      ofType(updateCategory),
      concatMap((a) => this.categoryService.updateCategory(a.id, a.category)
        .pipe(
          map((category) => updateCategorySuccess({category})),
          catchError(error => {
            return of(updateCategoryFailure({error: `${error.message}`}));
          })
        )
      )
    )
  );

  deleteCategory$ = createEffect(() => this.action$.pipe(
      ofType(deleteCategory),
      mergeMap((a) => this.categoryService.deleteCategory(a.id)
        .pipe(
          map((category) => deleteCategorySuccess({id: a.id})),
          catchError(error => {
            return of(deleteCategoryFailure({error: `${error.message}`}));
          })
        )
      )
    )
  );
}
