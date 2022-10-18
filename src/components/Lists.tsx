import React, {Dispatch, SetStateAction, useState} from 'react';
import {TodoData} from "../type/TodoData";
import {DragDropContext, Draggable, Droppable, DropResult} from "react-beautiful-dnd";

type Props = {
  todoDatas: TodoData[]
  setTodoDatas: Dispatch<SetStateAction<TodoData[]>>
};

export default function Lists(
    {todoDatas, setTodoDatas}: Props,
  ):JSX.Element {
  const handleEnd = (result:DropResult) => {
    console.log(result);
    if(!result.destination) return;
    const newTodoDatas = todoDatas;

    const [reorderItem] = newTodoDatas.splice((result.source.index, 1));
    newTodoDatas.splice(result.destination.index, 0, reorderItem);
    setTodoDatas(newTodoDatas)
  };
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
        <DragDropContext onDragEnd={handleEnd}>
          <Droppable droppableId='handleEnd'>
            {(provided) => (
                <div {...provided.droppableProps} ref={provided.innerRef}>
                  {todoDatas.map((data:TodoData, index: number) => (
                    <Draggable draggableId={data.id.toString()} key={data.id} index={index}>
                      {(provided, snapshot) => (
                        <div key={data.id} {...provided.draggableProps} ref={provided.innerRef} {...provided.dragHandleProps} className={`${snapshot.isDragging ? "bg-gray-400": "bg-gray-100"} flex items-center justify-between w-full px-4 py-1 my-2 text-gray-600 border rounded`}>
                          <div className="items-center">
                            <input
                              type="checkbox"
                              defaultChecked={data.completed}
                              onChange={() => changeCheckbox(data.id)}/>
                            <span
                                className={data.completed ? "line-through" : undefined}
                            >
                              {data.title}
                            </span>
                          </div>
                          <div className="items-center">
                            <button
                                onClick={() => deleteItem(data.id)}
                                className="px-4 py-2 float-right"
                            >
                              x
                            </button>
                          </div>
                        </div>
                      )}
                    </Draggable>
                ))}
                  {provided.placeholder}
                </div>
              )}
          </Droppable>
        </DragDropContext>
      </div>
  )
}