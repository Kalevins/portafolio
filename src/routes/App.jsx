import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Principal } from '@/layouts'

import {
  Home,
  Works,
  Skills,
  Education,
  Page404
} from '@/pages'

function App() {

  return (
    <BrowserRouter basename={import.meta.env.VITE_BASE_URL}>
      <Routes>
        <Route path='/' element={<Principal />}>
          <Route index element={<Home/>}/>
          <Route path='/Works' element={<Works/>}/>
          <Route path='/Skills' element={<Skills/>}/>
          <Route path='/Education' element={<Education/>}/>
          <Route path='/*' element={<Page404/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App