export interface Property {
  id: string,
  value: string,
  description: string
}
export type PropertyEditDto = Pick<Property, "value" | "description">
