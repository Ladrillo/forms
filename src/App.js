import React, { useState } from 'react'
import { v4 as uuid } from 'uuid';
import './App.css'

const initialFriends = [
  { id: uuid(), fname: 'John', lname: 'Smith' },
  { id: uuid(), fname: 'Jane', lname: 'Doe' },
]

function App() {
  const [friends, setFriends] = useState(initialFriends)

  return (
    <div className="App">
      {/* Make a form to add friends! */}

      <h3>List of friends:</h3>
      {
        friends.map(fr => <div key={fr.id}>{fr.fname} {fr.lname}</div>)
      }
    </div>
  )
}

export default App
