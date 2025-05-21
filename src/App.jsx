import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from "./components/ui/button"




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <p className='p-80 text-3xl text-red-700 '>Tailwind is working</p>
    <Button>Button</Button>
    
    </>
  )
}

export default App
