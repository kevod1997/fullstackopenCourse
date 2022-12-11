import { useState } from "react";
import Filter from "./Filter";
import PersonForm from "./PersonForm";
import Persons from "./Persons";

function App() {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456" },
    { name: "Ada Lovelace", number: "39-44-5323523" },
    { name: "Dan Abramov", number: "12-43-234345" },
    { name: "Mary Poppendieck", number: "39-23-6423122" },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [findName, setFindName] = useState("");

  const addPerson = (e) => {
    e.preventDefault();
    if (persons.some((person) => person.name === newName)) {
      alert(`${newName} is already added to the phonebook`);
    } else {
      const newPerson = { name: newName, number: newNumber };
      setPersons(persons.concat(newPerson));
      setNewName("");
      setNewNumber("");
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
        <Persons filteredPersons={filteredPersons}/>
      </div>
    </>
  );
}

export default App;
