import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Content from './components/Header'
import Body from './components/Body'

function App() {
  const [count, setCount] = useState(0)

  return (
    // <div className='overflow-hidden text-neutral-300 antialiased selection:bg-neutral-300 selection:text-black'>
    //   <div className='fixed top-0 -z-10 h-full w-full'>
    //     <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(59, 130, 246, 0.3),rgba(123, 31, 162, 0))]"></div>
    //     </div>
    //     <div className='container mx-auto px-4'></div>
    //     <Content/>
    //   </div>
    <div>
      <Content/>
      <Body/>
    </div>
  )
}

export default App
