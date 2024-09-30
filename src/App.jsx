import { useState } from 'react'
import './App.css'
import InputCard from './components/InputCard'
import DisplayCard from './components/DisplayCard'

function App() {

  const [data, setData] = useState([])

  const updateData = (newData) => { 
    setData([...data, newData])
  }


  return (
    <div className="main">
    <h1 className="title">Tarjetas</h1>
    <InputCard updateData={updateData} />  
    <DisplayCard data={data} />
    </div>
  )
}

export default App
