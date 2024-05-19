import { useState } from 'react'
import './App.scss'
import Notify from './component/Notify'
import Footer from './component/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
  <>
    <div className="background"></div>
    <main>
      <div className='container'>
        <h1>We are Coming Soon...</h1>
        <p>
          We are currently working on our new website. <br/>
          We will be here soon, We will notify you when we finish the Sites!
        </p>
        <Notify/>
      </div>
      <Footer/>
    </main>
  </>
  )
}

export default App
