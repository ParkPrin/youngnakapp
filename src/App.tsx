import React, {Component} from "react";
import "./App.css";

interface TodoData {
    id: number;
    title: string;
    completed: boolean;
}

export default class App extends Component<any, any>{
  btnStyle = {
      color: "#fff",
      border: "none",
      padding: "5px 9px",
      borderRadius: "50%",
      cursor: "pointer",
      float: "right" as "right"
  }
  getStyle = () => {
      return {
          marginTop: "15px",
          padding: "10px",
          borderBottom: "1px #ccc dotted",
          textDecoration: "none",
      }
  }

  todoData: TodoData[] = [
      {
          id: 1,
          title: "공부하기",
          completed: true,
      },
      {
          id: 2,
          title: "청소하기",
          completed: false,
      }
  ];

  handleClick = (id: number) => {
      const newTodoData = this.todoData.filter((data: TodoData) => data.id !== id)
      console.log(`newTodoData: ${JSON.stringify(newTodoData)}`);
  }

  render() {
    return (
        <div className="container">
          <div className="todoBlock">
              <div className="title">
                  <h1>할 일 목록</h1>
              </div>
              {this.todoData.map((data:TodoData) => (
                  <div key={data.id} style={this.getStyle()}>
                      <input type="checkbox" defaultChecked={data.completed}/>
                      {data.title}
                      <button style={this.btnStyle} onClick={() => this.handleClick(data.id)}></button>
                  </div>
              ))}
          </div>
        </div>
    )
  }
}
