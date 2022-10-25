import {Dispatch, SetStateAction} from "react";
import {TodoData} from "../type/TodoData";

export class LocalstorageManager {
  public static saveTodoList = (id:string, value:TodoData[], setTodoDatas: Dispatch<SetStateAction<TodoData[]>>) => {
    setTodoDatas([...value])
    localStorage.setItem(id, JSON.stringify(value));
  }
}