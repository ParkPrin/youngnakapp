import React, {useState} from "react";
import "./App.css";
import Lists from "./components/Lists";
import {TodoData} from "./type/TodoData";
import Form from "./components/Form";

export default function App():JSX.Element {
  const [todoDatas, setTodoDatas] = useState<TodoData[]>([]);
  const [keyIndex, setKeyIndex] = useState<number>(0);
    return (
      <div className="flex items-center justify-center w-screen h-screen bg-blue-200">
        <div className="w-full p-6 m-4 bg-white shadow lg:w-3/4 lg:max-w-lg">
          <div className="flex justify-between mb-3">
            <h1>할 일 목록</h1>
          </div>
          <Lists todoDatas={todoDatas} setTodoDatas={setTodoDatas}  />
          <Form
            keyIndex={keyIndex}
            setTodoDatas={setTodoDatas}
            setKeyIndex={setKeyIndex}
          />
        </div>
      </div>
    )
}
