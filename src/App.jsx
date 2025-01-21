import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import Table from './components/Table'
// import Image from './components/Image'
import Test from './components/Test'





function App() {
  const [count, setCount] = useState(0)

  return (
    
      <div>
       {/* <Table/> */}
       {/* <Image/> */}
       {/* <Test empName="Sheetal Savane" empAddress="Mumbai" stdId="1003"/> */}
      <Test/>
       
       
        
      {/* <marquee>Welcome to VPPCOE</marquee>
      <h2>This is jsx element</h2> */}
      </div>
    
  )
}

export default App
