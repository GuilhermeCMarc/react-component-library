import { useState } from 'react'
import reactLogo from './assets/react.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-zinc-900 text-zinc-300 min-h-screen'>
      <h1 className="text-lg font-bold text-white">Hello world</h1>
    </div>
  )
}

export default App
