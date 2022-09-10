// Core models
type orNull<T> = T | null
export type StringOrNull = orNull<string>
export type NumberOrNull = orNull<number>

export enum COLORS {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  ACCENT = 'accent',
  SUCCESS = 'success',
  ERROR = 'error',
  INFO = 'info',
  WARNING = 'warning',
}

export enum STATUS_ICONS {
  SUCCESS = 'check',
  ERROR = 'report',
  INFO = 'info',
  WARNING = 'warning',
}

// Snackbar
export interface Snackbar {
  message: string
  timeout?: number
  color: COLORS
}

// Database types
export type ID = {
  id?: number
}
