import { Route, Routes } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import Assets from './pages/Assets'
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Assets/>}/>
        <Route path='*' element={<h1>Not Found</h1>}/>
      </Routes>
    </BrowserRouter>
    
  )
}

export default App
