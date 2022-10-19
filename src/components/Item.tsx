import React, {Dispatch, SetStateAction} from 'react';
import {TodoData} from "../type/TodoData";
import {DraggableProvided, DraggableStateSnapshot, DroppableProvided} from "react-beautiful-dnd";

type Props = {
  data: TodoData;
  provided:DraggableProvided;
  snapshot:DraggableStateSnapshot;
  todoDatas: TodoData[];
  setTodoDatas: Dispatch<SetStateAction<TodoData[]>>;
}

const Item = ({data, provided, snapshot, todoDatas, setTodoDatas}: Props) => {
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
    <div key={data.id} {...provided.draggableProps} ref={provided.innerRef} {...provided.dragHandleProps} className={`${snapshot.isDragging ? "bg-gray-400": "bg-gray-100"} flex items-center justify-between w-full px-4 py-1 my-2 text-gray-600 border rounded`}>
      <div className="items-center">
          <input
            type="checkbox"
            defaultChecked={data.completed}
            onChange={() => changeCheckbox(data.id)}/>
          <span className={data.completed ? "line-through" : undefined} >
            {data.title}
          </span>
      </div>
        <div className="items-center">
          <button onClick={() => deleteItem(data.id)} className="px-4 py-2 float-right">x</button>
        </div>
    </div>
  );
};

export default Item;