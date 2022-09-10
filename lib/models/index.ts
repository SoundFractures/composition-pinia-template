type orNull<T> = T | null
export type StringOrNull = orNull<string>
export type NumberOrNull = orNull<number>

// Database types
export type ID = {
  id?: number
}
