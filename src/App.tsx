import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Person } from "./user/Person";

const personInfo: Function = (person: Person) => (
  <p>
    이름: {person.getName()}, 나이: {person.getAge()}
  </p>
);

const clock: Function = (date: Date) => <h2>{date.toLocaleTimeString()}.</h2>;

function App(props: any) {
  const person: Person = props.person;
  const [date, setDate] = useState<Date>(new Date());

  useEffect(() => {
    setDate(new Date());
    document.title = `시간 ${date} 입니다`;
  });
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        {personInfo(person)}
        {clock(date)}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
