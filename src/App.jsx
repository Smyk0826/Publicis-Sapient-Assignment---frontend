import { useContext, useState } from 'react'
import './App.css'
import SearchBox from './components/searchbox'
import { userContext } from './context/context'
import Content from './components/content'

function App() {
  const [users, setUsers] = useState([]);

  return (
  
    <userContext.Provider value={{ users, setUsers }}>
    <>
      <SearchBox />
      <Content />
    
    </>
    </userContext.Provider>
 
  )
}

export default App
