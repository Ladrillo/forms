import React, { useState } from 'react'
import { v4 as uuid } from 'uuid';
import './App.css'

const initialFriends = [
  { id: uuid(), fname: 'John', lname: 'Smith' },
  { id: uuid(), fname: 'Jane', lname: 'Doe' },
]

function App() {
  // App it the top-level component
  // so it's an EXCELLENT place to put
  // all of our slices of state
  const [friends, setFriends] = useState(initialFriends)
  const [fnameValue, setFnameValue] = useState('')

  return (
    <div className="App">
      {/* Make a form to add friends!!!!!!!! */}
      <form>
        <label> first name
          <input
            name='fname'
            type='text'
          />
        </label>
      </form>

      <h3>List of friends:</h3>
      {
        friends.map(fr => <div key={fr.id}>{fr.fname} {fr.lname}</div>)
      }
    </div>
  )
}

export default App
