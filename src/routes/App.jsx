import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Principal from '@/layouts'
import Home from '@/pages/Home'
import Works from '@/pages/Works'
import Skills from '@/pages/Skills'
import Education from '@/pages/Education'
import Page404 from '@/pages/Page404'

function App() {

  return (
    <BrowserRouter basename={import.meta.env.DEV ? '/' : '/Portafolio/'}>
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