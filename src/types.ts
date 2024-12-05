import { ReactNode } from 'react'

export type Beer = {
  id: string
  name: string
  image: string
  price: string
  rating: {
    average: number
    reviews: number
  }
}

export type SnackbarState = {
  open: boolean
  message: string
  severity: 'success' | 'error'
}

export interface RatingOption {
  value: string
  label: ReactNode
}

export type Action = {
  type: 'SET_FEEDBACK'
  payload: { beerId: string; feedback: string }
}

export type Feedback = { beerId: string; feedback: string }

// CONTEXT API

export type State = {
  feedback: any
}

export type ContextValue = State & {
  addFeedback: (beerId: string, feedback: string) => void
}

export type BeerCollectionProviderProps = {
  children: React.ReactNode
}

// PROPS

export interface CollectionProps {
  beers: Beer[]
}

export interface ControlPanelProps {
  onSearch: (search: string) => void
  onFilter: (value: string) => void
  onSort: (sort: string) => void
}

export interface FilterByRatingProps {
  onFilter: (value: string) => void
}

export interface FormInputProps {
  label: string
  name: string
  value: string
  onChange: React.ChangeEventHandler<HTMLInputElement>
  type?: string
  required?: boolean
  error?: boolean
  helperText?: string
  [key: string]: any
}

export interface RatingInputProps {
  value: number
  onChange: React.ChangeEventHandler<HTMLInputElement>
}

export interface SaveButtonProps {
  onSave: () => void
}

export interface SortByProps {
  onSort: (value: string) => void
}
