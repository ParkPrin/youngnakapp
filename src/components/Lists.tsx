import React, {Dispatch, SetStateAction} from "react";
import {TodoData} from "../type/TodoData";

type Props = {
  todoDatas: TodoData[]
  setTodoDatas: Dispatch<SetStateAction<TodoData[]>>
};

export default function Lists(
    {todoDatas, setTodoDatas}: Props,
  ):JSX.Element {

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

  const changeCheckbox = (id: number): void => {
    const changeTodoDatas = todoDatas.map((item) => {
      if (item.id === id){
        item.completed = !item.completed;
      }
      return item;
    });
    setTodoDatas(changeTodoDatas);
  }

  const deleteItem = (id: number): void => {
    const newTodoData = todoDatas.filter((data: TodoData) => data.id !== id)
    setTodoDatas(newTodoData)
  }
  return (
      <div>
        {todoDatas.map((data:TodoData) => (
            <div key={data.id} style={getStyle(data.completed)}>
              <input type="checkbox" defaultChecked={data.completed} onChange={() => changeCheckbox(data.id)}/>
              {data.title}
              <button style={btnStyle} onClick={() => deleteItem(data.id)}>x</button>
            </div>
        ))}
      </div>
  )
}