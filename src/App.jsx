import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FormBuscador from './components/FormBuscador'
import Peliculas from './components/Peliculas'
import MainComponent from './components/mainComponent'
import SingleMovie from './components/singleMovie'


import {Routes, Route, BrowserRouter} from 'react-router-dom'

// http://www.omdbapi.com/?apikey=5c3fa58f&type=series
// http://www.omdbapi.com/?apikey=5c3fa58f&i=tt12162902

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<MainComponent/>}/>
      <Route path='/movies/:id' element={<SingleMovie/>}/>



      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
