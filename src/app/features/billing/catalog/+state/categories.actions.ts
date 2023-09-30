import {createAction, props} from "@ngrx/store";
import {Category, CategoryAddEditDto} from "../../_models/category";

const name = '[Category Page]'

//  set Category
export const setActiveCategory = createAction(
  `${name} setActiveCategory`, props<{ activeCategory: Category }>());
export const clearActiveCategory = createAction(
  `${name} clearActiveCategory`);

//  load Category
export const loadCategoryList = createAction(
  `${name} loadCategoryList`);
export const loadCategoryListSuccess = createAction(
  `${name} loadCategoryList Success`, props<{ categories: Category[] }>());
export const loadCategoryListFailure = createAction(
  `${name} loadCategoryList Failure`, props<{ error: string }>());

//  create Category
export const createCategory = createAction(
  `${name} createCategory`, props<{ category: CategoryAddEditDto }>());
export const createCategorySuccess = createAction(
  `${name} createCategory Success`, props<{ category: Category }>());
export const createCategoryFailure = createAction(
  `${name} createCategory Failure`, props<{ error: string }>());


//  update Category
export const updateCategory = createAction(
  `${name} updateCategory`, props<{ id: number, category: CategoryAddEditDto }>());
export const updateCategorySuccess = createAction(
  `${name} updateCategory Success`, props<{ category: Category }>());
export const updateCategoryFailure = createAction(
  `${name} updateCategory Failure`, props<{ error: string }>());


//  delete Category
export const deleteCategory = createAction(
  `${name} deleteCategory`, props<{ id: number }>());
export const deleteCategorySuccess = createAction(
  `${name} deleteCategory Success`, props<{ category: Category }>());
export const deleteCategoryFailure = createAction(
  `${name} deleteCategory Failure`, props<{ error: string }>());

