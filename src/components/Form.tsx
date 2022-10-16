import React, {ChangeEvent, Dispatch, SetStateAction} from "react";
import {TodoData} from "../type/TodoData";
type Props = {
    value: string
    keyIndex: number
    setTodoDatas: Dispatch<SetStateAction<TodoData[]>>
    setValue: Dispatch<SetStateAction<string>>
    setKeyIndex: Dispatch<SetStateAction<number>>
};
export default function Form(
        {value, keyIndex, setTodoDatas, setValue, setKeyIndex}: Props
    ):JSX.Element {
    const addItem = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        const key: number = keyIndex + 1;

        const newTodoItem: TodoData = {
            id: key,
            title: value,
            completed: false,
        };
        setTodoDatas(prev => [...prev, newTodoItem]);
        setKeyIndex(key);
        setValue("")
    }

    const inputTitle = (e:ChangeEvent<HTMLInputElement>): void => {
        setValue(e.target.value);
    }
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