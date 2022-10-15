import React, {useState} from "react";
import "./App.css";
import Lists from "./components/Lists";
import {TodoData} from "./type/TodoData";
import Form from "./components/Form";

export default function App():JSX.Element {
  const [todoDatas, setTodoDatas] = useState<TodoData[]>([]);
  const [value, setValue] = useState<string>("");
  const [keyIndex, setKeyIndex] = useState<number>(0);
    return (
      <div className="container">
        <div className="todoBlock">
          <div className="title">
            <h1>할 일 목록</h1>
          </div>
          <Lists todoDatas={todoDatas} setTodoDatas={setTodoDatas}  />
          <Form
              value={value}
              keyIndex={keyIndex}
              setTodoDatas={setTodoDatas}
              setValue={setValue}
              setKeyIndex={setKeyIndex}
          />
        </div>
      </div>
    )
}
