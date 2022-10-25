import React, {ChangeEvent, Dispatch, SetStateAction, useCallback, useState} from "react";
import {TodoData} from "../type/TodoData";
import {LocalstorageManager} from "../common/localstorage";
type Props = {
  keyIndex: number
  setTodoDatas: Dispatch<SetStateAction<TodoData[]>>
  todoDatas: TodoData[]
  setKeyIndex: Dispatch<SetStateAction<number>>
};
export default function Form(
    {keyIndex, setTodoDatas, todoDatas, setKeyIndex}: Props
  ):JSX.Element {
    const [value, setValue] = useState<string>("");
    const addItem = useCallback((e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const key: number = keyIndex + 1;

    const newTodoItem: TodoData = {
        id: key,
        title: value,
        completed: false,
    };
    todoDatas.push(newTodoItem);
    LocalstorageManager.saveTodoList("todoData", todoDatas, setTodoDatas);
    setKeyIndex(key);
    setValue("")
  }, [keyIndex, setTodoDatas, todoDatas, setKeyIndex, value, setValue]);

  const inputTitle = useCallback((e:ChangeEvent<HTMLInputElement>): void => {
      setValue(e.target.value);
  }, []);
  return (
    <form onSubmit={addItem} className="flex pt-2">
      <input
        type="text"
        name="value"
        className="w-full px-3 py-2 mr-4 text-gray-500 border rounded shadow"
        placeholder="해야 할 일을 입력하세요"
        value={value}
        onChange={inputTitle}
      />
      <input
        type="submit"
        value="입력"
        className="p-2 text-blue-400 border-2 border-blue-400 rounded hover:text-white hover:bg-blue-200"
      />
    </form>
  )
}