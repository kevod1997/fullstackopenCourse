import { useState, useEffect } from "react";
import Filter from "./Filter";
import PersonForm from "./PersonForm";
import Persons from "./Persons";
import {getAll, create} from "./services/persons";

function App() {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [findName, setFindName] = useState("");

  useEffect(() => {
    getAll()
    .then(initialPersons => {
        console.log('promise fulfilled')
        console.log(initialPersons);
        setPersons(initialPersons)
      })
  }, [])

  



  const addPerson = (e) => {
    e.preventDefault();
    if (persons.some((person) => person.name === newName)) {
      alert(`${newName} is already added to the phonebook`);
    } else {
      const newPerson = { name: newName, number: newNumber };
      setPersons(persons.concat(newPerson));
      setNewName("");
      setNewNumber("");
      create(newPerson)
    }
    
  };

  const handleFindName = (e) => {
    setFindName(e.target.value);
  };

  const filteredPersons = persons.filter((person) =>
    person.name.toLowerCase().includes(findName.toLowerCase())
  );

  return (
    <>
      <div>
        <h2>Phonebook</h2>
        <div>
          <Filter findName={findName} handleFindName={handleFindName} />
        </div>
        <form onSubmit={addPerson}>
          <h1>add a new</h1>
          <PersonForm newName={newName} setNewName={setNewName} />
          <div>
            phone:{" "}
            <input
              value={newNumber}
              type="number"
              onChange={(event) => setNewNumber(event.target.value)}
            />
          </div>
          <div>
            <button type="submit">add</button>
          </div>
        </form>

        <h2>Numbers</h2>
        <Persons filteredPersons={filteredPersons} />
      </div>
    </>
  );
}

export default App;
