import React from 'react'
import { RouterProvider } from 'react-router'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import router from './router'
import ErrorBoundary from './components/ErrorComponents/ErrorBoundary'
import { BeerCollectionProvider } from './store/beer-collection-provider'

const App: React.FC = () => {
  const queryClient = new QueryClient()

  return (
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <BeerCollectionProvider>
          <RouterProvider router={router} />
          <ReactQueryDevtools initialIsOpen={false} />
        </BeerCollectionProvider>
      </QueryClientProvider>
    </ErrorBoundary>
  )
}
App.displayName = 'App'
export default App
