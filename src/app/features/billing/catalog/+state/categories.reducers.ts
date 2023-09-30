import {Category} from "../../_models/category";
import {createReducer, on} from "@ngrx/store";
import {
  clearActiveCategory,
  createCategory,
  createCategoryFailure,
  createCategorySuccess,
  deleteCategory, deleteCategoryFailure,
  deleteCategorySuccess,
  loadCategoryList,
  loadCategoryListFailure,
  loadCategoryListSuccess,
  setActiveCategory,
  updateCategory,
  updateCategoryFailure,
  updateCategorySuccess
} from "./categories.actions";

export const BILLING_CATEGORY_FEATURE_KEY = 'BILLING_CATEGORY'

export interface State {
  activeCategory: Category
  categoryList: Category[];
  loading: boolean;
  error: string;
}

export const initialState: State = {
  activeCategory: null,
  categoryList: [],
  loading: false,
  error: null
}

export const reducer = createReducer(
  initialState,
  on(clearActiveCategory, loadCategoryList, (state, action) => {
    return ({...state, activeCategory: null});
  }),
  on(setActiveCategory, (state, action) => {
    return ({...state, activeCategory: action.activeCategory});
  }),

  on(loadCategoryListSuccess, (state, action) => {
    return ({...state, loading: false, categoryList: action.categories});
  }),
  on(loadCategoryListFailure, (state, action) => {
    return ({...state, loading: false, error: action.error});
  }),

  on(createCategory, (state, action) => {
    return ({...state, loading: true});
  }),
  on(createCategorySuccess, (state, action) => {
    return ({
      ...state,
      activeCategory: null,
      categoryList: [...state.categoryList, action.category],
      loading: false
    });
  }),
  on(createCategoryFailure, (state, action) => {
    return ({...state, loading: false, error: action.error});
  }),

  on(updateCategory, (state, action) => {
    return ({...state, loading: true});
  }),
  on(updateCategorySuccess, (state, action) => {
    return ({
      ...state,
      activeCategory: null,
      categoryList: state.categoryList.map((category) => {
        return category.id === action.category.id ? Object.assign({}, category, action.category) : category;
      }),
      loading: false
    });
  }),
  on(updateCategoryFailure, (state, action) => {
    return ({...state, loading: false, error: action.error});
  }),


  on(deleteCategory, (state, action) => {
    return ({...state, loading: true});
  }),
  on(deleteCategorySuccess, (state, action) => {
    return ({
      ...state,
      activeCategory: null,
      categoryList: state.categoryList.filter((category) => action.category.id !== category.id),
      loading: false
    });
  }),
  on(deleteCategoryFailure, (state, action) => {
    return ({...state, loading: false, error: action.error});
  })
)
