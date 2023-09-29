export interface Setting {
  id: string,
  value: string,
  description: string
}

export type SettingEditDto = Pick<Setting, "value" | "description">;
