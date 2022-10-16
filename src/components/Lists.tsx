import React, {Dispatch, SetStateAction} from 'react';
import {TodoData} from "../type/TodoData";

type Props = {
  todoDatas: TodoData[]
  setTodoDatas: Dispatch<SetStateAction<TodoData[]>>
};

export default function Lists(
    {todoDatas, setTodoDatas}: Props,
  ):JSX.Element {

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
            <div key={data.id}>
              <div className="flex items-center justify-between w-full px-4 py-1 my-2 text-gray-600 bg-gray-100 border rounded">
                <div className="items-center">
                  <input
                    type="checkbox"
                    defaultChecked={data.completed}
                    onChange={() => changeCheckbox(data.id)}/>
                  <span className={data.completed ? "line-through" : undefined}>{data.title}</span>
                </div>
                <div className="items-center">
                  <button onClick={() => deleteItem(data.id)}>x</button>
                </div>
              </div>
            </div>
        ))}
      </div>
  )
}