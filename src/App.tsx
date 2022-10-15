import React, {ChangeEvent, useState} from "react";
import "./App.css";

type TodoData = {
    id: number;
    title: string;
    completed: boolean;
};


export default function App():JSX.Element {
  const [todoDatas, setTodoDatas] = useState<TodoData[]>([]);
  const [value, setValue] = useState<string>("");
  const [keyIndex, setKeyIndex] = useState<number>(0);

  const btnStyle = {
      color: "#fff",
      border: "none",
      padding: "5px 9px",
      borderRadius: "50%",
      cursor: "pointer",
      float: "right" as "right"
  }
  const getStyle = (completed: boolean): any => {
      return {
          marginTop: "15px",
          padding: "10px",
          borderBottom: "1px #ccc dotted",
          textDecoration: completed ? "line-through" : "none",
      }
  }

  const deleteItem = (id: number): void => {
      const newTodoData = todoDatas.filter((data: TodoData) => data.id !== id)
      setTodoDatas(newTodoData)
  }
  const addItem = (e: React.MouseEvent<HTMLInputElement>): void => {
      e.preventDefault();
      const key: number = keyIndex + 1;

      const newTodoItem: TodoData = {
        id: key,
        title: value,
        completed: false,
      };
      setTodoDatas(prev =>
          [...prev, newTodoItem]);
      setKeyIndex(key);
      setValue("")
  }

  const inputTitle = (e:ChangeEvent<HTMLInputElement>): void => {
      setValue(e.target.value);
  }
  const changeCheckbox = (id: number): void => {
      const changeTodoDatas = todoDatas.map((item) => {
          if (item.id === id){
              item.completed = !item.completed;
          }
          return item;
      });
      setTodoDatas(changeTodoDatas);
  }


    return (
        <div className="container">
          <div className="todoBlock">
              <div className="title">
                  <h1>할 일 목록</h1>
              </div>
              {todoDatas.map((data:TodoData) => (
                  <div key={data.id} style={getStyle(data.completed)}>
                      <input type="checkbox" defaultChecked={data.completed} onChange={() => changeCheckbox(data.id)}/>
                      {data.title}
                      <button style={btnStyle} onClick={() => deleteItem(data.id)}>x</button>
                  </div>
              ))}
              <form style={{ display: 'flex'}}>
                  <input type="text" name="value" value={value} style={{ flex: '10', padding: '5px'}} onChange={(e) => inputTitle(e)}/>
                  <input type="submit" value="입력" className="btn" style={{flex: '1'}} onClick={(e) => addItem(e)}/>
              </form>
          </div>
        </div>
    )

}
