import React, {ChangeEvent, useState} from "react";
import "./App.css";
import Lists from "./components/Lists";
import {TodoData} from "./type/TodoData";

export default function App():JSX.Element {
  const [todoDatas, setTodoDatas] = useState<TodoData[]>([]);
  const [value, setValue] = useState<string>("");
  const [keyIndex, setKeyIndex] = useState<number>(0);

  const addItem = (e: React.MouseEvent<HTMLInputElement>): void => {
    e.preventDefault();
    const key: number = keyIndex + 1;

    const newTodoItem: TodoData = {
        id: key,
        title: value,
        completed: false,
      };
      setTodoDatas(prev => [...prev, newTodoItem]);
      setKeyIndex(key);
      setValue("")
  }

  const inputTitle = (e:ChangeEvent<HTMLInputElement>): void => {
    setValue(e.target.value);
  }
    return (
      <div className="container">
        <div className="todoBlock">
          <div className="title">
            <h1>할 일 목록</h1>
          </div>
          <Lists todoDatas={todoDatas} setTodoDatas={setTodoDatas}  />
          <form style={{ display: 'flex'}}>
            <input type="text" name="value" value={value} style={{ flex: '10', padding: '5px'}} onChange={(e) => inputTitle(e)}/>
            <input type="submit" value="입력" className="btn" style={{flex: '1'}} onClick={(e) => addItem(e)}/>
          </form>
        </div>
      </div>
    )
}
