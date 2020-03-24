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
    // to fish out WHICH input is having the change event
    const inputThatChanged = event.target.name
    // to fish out the current value
    const newValueForInput = event.target.value
    // and replace the WHOLE formValues object
    setFormValues({
      // with a new one that's a copy of the old one
      ...formValues,
      // BUT with a little override
      [inputThatChanged]: newValueForInput,
    })
  }
  const onFormSubmit = event => {
    // stop the form from reloading the page on submit
    event.preventDefault()
    // let's add a new friend to the friedns array in state
    // let's make a new friend
    const newFriend = {
      id: uuid(),
      fname: formValues.fname,
      lname: formValues.lname,
    }
    setFriends([ ...friends, newFriend ]) // WE NEED TO PASS AN ENTIRE ARRAY
  }

  return (
    <div className="App">
      {/* Make a form to add friends!!!!!!!! */}
      <form onSubmit={onFormSubmit}>
        <label> first name
          <input
            onChange={onInputChange} // callback takes an event object
            value={formValues.fname}
            name='fname'
            type='text'
          />
        </label><br/>

        <label> Last name
          <input
            onChange={onInputChange}
            value={formValues.lname}
            name='lname'
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
