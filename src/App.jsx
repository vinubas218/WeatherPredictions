import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Route, Routes } from 'react-router-dom'
import Weather from './Weather'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Weather/>} />
        </Routes>      
      </BrowserRouter>
    </div>
  )
}

export default App
