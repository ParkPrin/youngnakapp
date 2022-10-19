import React, {Dispatch, SetStateAction, useState} from 'react';
import {TodoData} from "../type/TodoData";
import {
  DragDropContext,
  Draggable,
  DraggableProvided, DraggableStateSnapshot,
  Droppable,
  DroppableProvided,
  DropResult
} from "react-beautiful-dnd";
import Item from "./Item";

type Props = {
  todoDatas: TodoData[];
  setTodoDatas: Dispatch<SetStateAction<TodoData[]>>;
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
  return (
      <div>
        <DragDropContext onDragEnd={handleEnd}>
          <Droppable droppableId='handleEnd'>
            {(provided:DroppableProvided) => (
                <div {...provided.droppableProps} ref={provided.innerRef}>
                  {todoDatas.map((data:TodoData, index: number) => (
                    <Draggable draggableId={data.id.toString()} key={data.id} index={index}>
                      {(provided:DraggableProvided, snapshot:DraggableStateSnapshot) => (
                        <Item data={data} provided={provided} snapshot={snapshot} todoDatas={todoDatas} setTodoDatas={setTodoDatas} />
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