import React from 'react'
import Counter from './Counter'
import Employeedata from './Employeedata'
import Example from './Example'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


const App = () => {
  return (
    <>
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Employeedata/>} />
          <Route path='/example' element={<Example />} />
        </Routes>
      </BrowserRouter>
    </>
    {/* <Counter/> */}
    {/* <Employeedata/> */}
    </>
  )
}

export default App