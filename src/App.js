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
  const [formValues, setFormValues] = useState({
    fname: '',
    lname: '',
  })
  const onInputChange = event => {
    // use the event object
    // to fish out the current value
    // and replace the WHOLE formValues object
    // with a new one that's a copy of the old one
    // BUT with a little override
    const inputThatChanged = event.target.name
    const newValueForInput = event.target.value
    setFormValues({
      ...formValues,
      [inputThatChanged]: newValueForInput,
    })
  }

  return (
    <div className="App">
      {/* Make a form to add friends!!!!!!!! */}
      <form>
        <label> first name
          <input
            onChange={onInputChange} // callback takes an event object
            value={formValues.fname}
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
