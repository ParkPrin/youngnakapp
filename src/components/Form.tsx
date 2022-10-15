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
    const addItem = (e: React.MouseEvent<HTMLInputElement>): void => {
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
        <form style={{ display: 'flex', marginTop: '15px'}}>
            <input type="text" name="value" value={value} style={{ flex: '10', padding: '5px'}} onChange={(e) => inputTitle(e)}/>
            <input type="submit" value="입력" className="btn" style={{flex: '1'}} onClick={(e) => addItem(e)}/>
        </form>
    )

}