import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'

import { ActiveSlideProvider } from '@/contexts'
import App from '@/routes/App'
import '@/libraries/i18nextConfig'

import '@/styles/globals.scss'

const container = document.getElementById('root')
const root = createRoot(container)

root.render(
  <StrictMode>
    <Suspense fallback={<div>Loading...</div>}>
      <ActiveSlideProvider>
        <App />
      </ActiveSlideProvider>
    </Suspense>
  </StrictMode>
)
