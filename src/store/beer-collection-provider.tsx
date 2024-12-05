import React, { createContext, useContext, useReducer } from 'react'
import {
  Action,
  BeerCollectionProviderProps,
  ContextValue,
  State,
} from '@/types'

// Initial state for the context
const initialState: State = {
  feedback: {},
}

// Create the context
const BeerCollectionContext = createContext<ContextValue | undefined>(undefined)

/**
 * Reducer function for managing the beer collection state
 *
 * @param state The current state of the beer collection
 * @param action The action to process
 * @returns The updated state after the action is applied
 */
const beerCollectionReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'SET_FEEDBACK':
      const { beerId, feedback } = action.payload
      return {
        ...state,
        feedback: {
          ...state.feedback,
          [beerId]: [...(state.feedback[beerId] || []), feedback],
        },
      }

    default:
      return state
  }
}

/**
 * Provider component for the BeerCollectionContext
 *
 * @param props The props for the provider
 *
 * @returns The provider element
 */
const BeerCollectionProvider: React.FC<BeerCollectionProviderProps> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(beerCollectionReducer, initialState)

  // Dispatches an action to add feedback for selected beer
  const addFeedback = (beerId: string, feedback: string) => {
    dispatch({ type: 'SET_FEEDBACK', payload: { beerId, feedback } })
  }

  return (
    <BeerCollectionContext.Provider
      value={{
        ...state,
        addFeedback,
      }}
    >
      {children}
    </BeerCollectionContext.Provider>
  )
}

/**
 * Custom hook for accessing the BeerCollectionContext
 *
 * @returns The context value containing state and actions
 */
const useBeerCollectionContext = (): ContextValue => {
  const context = useContext(BeerCollectionContext)

  if (!context) {
    throw new Error(
      'useBeerCollectionContext must be used within a BeerCollectionProvider',
    )
  }

  return context
}

export { BeerCollectionProvider, useBeerCollectionContext }
