import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from '@/pages'
import { MenuProvider } from '@/contexts'

import '@/styles/globals.css'
import '@/utils/i18n'

const root = createRoot(document.getElementById('root')!)

root.render(
  <StrictMode>
    <MenuProvider>
      <Suspense fallback="loading">
        <App />
      </Suspense>
    </MenuProvider>
  </StrictMode>,
)
