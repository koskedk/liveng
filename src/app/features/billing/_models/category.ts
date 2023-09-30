export interface Category {
  id: number,
  name: string,
  description: string
}

export type CategoryAddEditDto = Pick<Category, "name" | "description">;
