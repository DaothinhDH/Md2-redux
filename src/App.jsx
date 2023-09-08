import { useState } from 'react'
import './App.css'
import Todolist from './components/Todolist'
import Header from './components/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Todolist />
    </>
  );
}

export default App
