import './App.css';
import contactsData from './contacts.json';
import { useState } from 'react';
import trophy from './trophy.png';

function App() {

  const [contacts, setContacts] = useState(contactsData.slice(0,5));
  const [remainingContacts, setRemainingContacts] = useState(contactsData.slice(5))
  const [sortName, setSortName] =useState(contactsData)

  const addRandom = () => {
    console.log('clicked')
    const remainingContactIndex = Math.floor(Math.random() * remainingContacts.length)
    const randomContact = remainingContacts[remainingContactIndex]
    const copyArr = [...contacts, randomContact]
    setContacts(copyArr)
    const copyRemainingContacts = [...remainingContacts]
    copyRemainingContacts.splice(remainingContactIndex, 1)
    setRemainingContacts(copyRemainingContacts)
  }

  // const sortNameFunction = () => {
  //   console.log('clicked name button', contactsData)
  //   const copySortName = [...contactsData]
  //   copySortName.sort()
  // }

  return (
    <div className="App">
      <h1>IronContacts</h1>
    
    {/* ADD RANDOM CELEB */}
    <div className='buttons'>
      <button
      onClick={addRandom}
      >
        Add Random Contact
      </button>

    {/* SORT BY POPULARITY */}
      <button>
        Sort by Popularity
      </button>

    {/* SORT BY NAME */}
      <button>
        Sort by Name
      </button>
    </div>
          <table>
            <thead>
              <tr>
                <th>Picture</th>
                <th>Name</th>
                <th>Popularity</th>
                <th>Won an Oscar</th>
                <th>Won an Emmy</th>
              </tr>
            </thead>
            <tbody>
                      {contacts.map(e => {
                        return(
              <tr>
                <td><img className='picture' src={e.pictureUrl} alt="celeb" /></td>
                <td>{e.name}</td>
                <td>{e.popularity.toFixed(2)}</td>
                <td>{e.wonOscar ? <img src={trophy} alt="trophy" className='trophy' /> : null}</td>
                <td>{e.wonEmmy ? <img src={trophy} alt="trophy" className='trophy' /> : null}</td>
              </tr>
                        )
                      })}
            </tbody>
          </table>
    </div>
  );
}

export default App;