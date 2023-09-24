export interface Client {
  id?: string
  age?: number
  name?: string
  gender?: string
}
export type ClientRequiredProps=Pick<Client,'age'|'name'|'gender'>
