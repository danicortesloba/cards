import { useState } from 'react'
import './App.css'
import InputCard from './components/InputCard'
import DisplayCard from './components/DisplayCard'

function App() {

  const [data, setData] = useState([])

  const updateData = (newData) => { 
    setData([...data, newData])
  }

  const removeData = (index) => {
    const newData = [...data.slice(0, index), ...data.slice(index + 1)];
    setData(newData);
  }


  return (
    <div className="main">
    <h1 className="title">Tarjetas</h1>
    <InputCard updateData={updateData} />  
    <DisplayCard data={data} removeData={removeData} />
    </div>
  )
}

export default App
