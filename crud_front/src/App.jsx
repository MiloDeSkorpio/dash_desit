import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import { IncidenciaPage } from './pages/IncidenciaPage'
import { IncidenciaFormPage } from './pages/IncidenciaFormPage'
import { IncidenciaViewPage } from './pages/IncidenciaViewPage'
import { LoginPage } from './pages/LoginPage'
import { Navigation } from './components/Navigation'
import { Toaster } from 'react-hot-toast'
const App = () => {
  return (
  <BrowserRouter>
  <div className='container mx-auto'>
    <Navigation />
    <Routes>
      <Route path='/' element={<Navigate to='/incidencia' />}/>
      <Route path='/incidencia' element={<IncidenciaPage />}/>
      <Route path='/incidencia/:id' element={<IncidenciaViewPage />}/>
      <Route path='/incidencia-create' element={<IncidenciaFormPage />}/>
      <Route path='/incidencia-edit/:id' element={<IncidenciaFormPage />}/>
      <Route path='/login' element={<LoginPage />}/>

    </Routes>
    <Toaster />
  </div>
  </BrowserRouter>
  )
}

export default App
