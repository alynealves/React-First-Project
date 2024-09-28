import { useState } from 'react'
import './App.css'
import User from "./Components/User.jsx"

function App() {

  const [users, setUsers] = useState(
    [
      {
        name: "Alyne", email: "alineamelia2015@gmail.com"
      }
    ]
  )

  return (
    <>
      <User/>
      {users.map(learray => 
        <User name={learray.name} email={learray.email}/>
      )}
    </>
  )
}

export default App
