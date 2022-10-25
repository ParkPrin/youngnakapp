import React, {ChangeEvent, useState} from 'react';
import {TodoData} from "../type/TodoData";
import {DraggableProvided, DraggableStateSnapshot} from "react-beautiful-dnd";

type Props = {
  data: TodoData;
  provided:DraggableProvided;
  snapshot:DraggableStateSnapshot;
  changeCheckbox: Function,
  deleteItem: Function,
  changeTodoDatas: Function,
}

const Item = React.memo(({data, provided, snapshot, changeCheckbox, deleteItem, changeTodoDatas}: Props) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(data.title);

  const editingItem = ():void => {
    setIsEditing(!isEditing);
    if (isEditing) {
      const editData:TodoData = data;
      editData.title = editedTitle;
      changeTodoDatas(editData);
    }
  }
  const changeEditedTitle = (e:ChangeEvent<HTMLInputElement>):void => {
    setEditedTitle(e.target.value);
  }
  return (
    <div key={data.id} {...provided.draggableProps} ref={provided.innerRef} {...provided.dragHandleProps} className={`${snapshot.isDragging ? "bg-gray-400": "bg-gray-100"} flex items-center justify-between w-full px-4 py-1 my-2 text-gray-600 border rounded`}>
      <div className="items-center">
          <input
            type="checkbox"
            defaultChecked={data.completed}
            onChange={() => changeCheckbox(data.id)}/>
          <span>
            {
              !isEditing ?
                <span className="ml-2">{data.title}</span>
              : <input type="text" name="editedTitle"
                      className="ml-2 px-3 py-2 mr-4 text-gray-300 border rounded text-slate-800"
                      placeholder="해야 할 일을 입력하세요"
                      value={editedTitle}
                      onChange={changeEditedTitle}
                />
            }
          </span>
      </div>
      <div className="items-center">
        <button onClick={() => deleteItem(data.id)} className="px-4 py-2 float-right">x</button>
        <button onClick={() => editingItem()} className="px-4 py-2 float-right">{isEditing ? "save" : "edit"}</button>
      </div>
    </div>
  );
});

export default Item;