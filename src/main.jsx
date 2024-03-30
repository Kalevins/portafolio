import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'

import { LoadingProvider } from '@/contexts'
import { LoadingScreen } from './components'
import { App } from '@/App'

import '@/libraries/i18nextConfig'
import '@/styles/globals.scss'

const container = document.getElementById('root')
const root = createRoot(container)

root.render(
  <StrictMode>
    <Suspense fallback={<LoadingScreen/>}>
      <LoadingProvider>
        <App />
      </LoadingProvider>
    </Suspense>
  </StrictMode>
)
