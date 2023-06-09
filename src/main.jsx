import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { ActiveSlideProvider } from '@/contexts'
import App from '@/routes/App'
import '@/libraries/i18nextConfig'

import '@/styles/main.scss'

const container = document.getElementById('root')
const root = createRoot(container)

root.render(
  <StrictMode>
    <ActiveSlideProvider>
      <App/>
    </ActiveSlideProvider>
  </StrictMode>,
)
