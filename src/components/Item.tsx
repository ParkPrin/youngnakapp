import React from 'react';
import {TodoData} from "../type/TodoData";
import {DraggableProvided, DraggableStateSnapshot} from "react-beautiful-dnd";

type Props = {
  data: TodoData;
  provided:DraggableProvided;
  snapshot:DraggableStateSnapshot;
  changeCheckbox: Function,
  deleteItem: Function,
}

const Item = React.memo(({data, provided, snapshot, changeCheckbox, deleteItem}: Props) => {
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
});

export default Item;