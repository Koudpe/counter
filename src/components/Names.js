import React, { useState } from "react";

const Names = () => {
  const [data, setData] = useState({});
  const [person, setPerson] = useState({});

  const onClick = () => {
    const personData = [];
    if (person.firstname && person.surename && person.age) {
      const personalData = [person.firstname, person.surename, person.age];
      personData.push(personalData);
    }
    pushData(personData);
  };

  const pushData = (personalData) => {
    const newData = personalData;
    setData([...data, newData]);
    console.log("data", data);
  };

  return (
    <div className='App'>
      <div className='wrapper'>
        <p>Firstname:</p>
        <input
          type='text'
          value={person.firstname}
          onChange={(e) => setPerson({ ...person, firstname: e.target.value })}
        />
        <p>Surename:</p>
        <input
          type='text'
          value={person.surename}
          onChange={(e) => setPerson({ ...person, surename: e.target.value })}
        />
        <p>Age:</p>
        <input
          type='text'
          value={person.age}
          onChange={(e) => setPerson({ ...person, age: e.target.value })}
        />
      </div>
      <textarea className='textarea' value={data} />
      <button onClick={onClick}>OK</button>
      <p>Firstname:{person.firstname}</p>
      <p>Surename:{person.surename}</p>
      <p>Age:{person.age}</p>
    </div>
  );
};

export default Names;
