import { useState } from 'react'
import paperNCutLogo from './assets/paperncut-logo.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="#" >
          <img src={paperNCutLogo} className="logo paperncut" alt="PaperNCutLogo" />
        </a>
      </div>

      <p className="read-the-docs">
        Sitio en construcción...
      </p>
    </>
  )
}

export default App
