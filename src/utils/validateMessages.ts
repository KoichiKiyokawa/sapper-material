export const required = (label: string) => (val: string) =>
  val.length === 0 && `${label}は1文字以上で入力してください`

export const maxLength = (label: string, max: number) => (val: string) =>
  val.length > max && `${label}は${max}文字以下で入力してください`
