import React, {Dispatch, SetStateAction, useCallback} from 'react';
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
import {LocalstorageManager} from "../common/localstorage";

type Props = {
  todoDatas: TodoData[];
  setTodoDatas: Dispatch<SetStateAction<TodoData[]>>;
};

const Lists = React.memo((
    {todoDatas, setTodoDatas}: Props,
  ):JSX.Element => {
  const handleEnd = useCallback( (result:DropResult): void => {
    if(!result.destination) return;
    const newTodoDatas = todoDatas;
    const [reorderItem] = todoDatas.splice(result.source.index, 1);
    newTodoDatas.splice(result.destination.index, 0, reorderItem);
    LocalstorageManager.saveTodoList("todoData", newTodoDatas, setTodoDatas);
  }, [todoDatas, setTodoDatas]);
  const changeCheckbox = useCallback( (id: number): void => {
    const inpuChangeTodoDatas = todoDatas.map((item) => {
      if (item.id === id){
        item.completed = !item.completed;
      }
      return item;
    });
    LocalstorageManager.saveTodoList("todoData", inpuChangeTodoDatas, setTodoDatas);
  }, [todoDatas, setTodoDatas]);
  const changeTodoDatas = useCallback( (todoData: TodoData): void => {
    const resultTodoDatas:TodoData[] = todoDatas.map((item:TodoData) => {
      return item.id === todoData.id ? todoData : item;
    });
    LocalstorageManager.saveTodoList("todoData", resultTodoDatas, setTodoDatas);
  }, [todoDatas, setTodoDatas]);

  const deleteItem = useCallback( (id: number): void => {
    const newTodoDatas:TodoData[] = todoDatas.filter((data: TodoData) => data.id !== id)
    LocalstorageManager.saveTodoList("todoData", newTodoDatas, setTodoDatas);
  }, [todoDatas, setTodoDatas]);
  return (
      <div>
        <DragDropContext onDragEnd={handleEnd}>
          <Droppable droppableId='handleEnd'>
            {(provided:DroppableProvided) => (
                <div {...provided.droppableProps} ref={provided.innerRef}>
                  {todoDatas.map((data:TodoData, index: number) => (
                    <Draggable draggableId={data.id.toString()} key={data.id} index={index}>
                      {(provided:DraggableProvided, snapshot:DraggableStateSnapshot) => (
                        <Item data={data} provided={provided} snapshot={snapshot} changeCheckbox={changeCheckbox} deleteItem={deleteItem} changeTodoDatas={changeTodoDatas} />
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
});

export default Lists;