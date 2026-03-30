import { useState } from 'react'

import './App.css'

import MainComponent from './components/MainComponent'
import SingleMovie from './components/SingleMovie'


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
