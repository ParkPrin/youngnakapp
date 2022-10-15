import React, {Component} from "react";
import "./App.css";

interface TodoData {
    id: number;
    title: string;
    completed: boolean;
}

type State = {
    todoDatas: TodoData[];
}

export default class App extends Component<any, State>{
  state: State = {
      todoDatas: [
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
      ]
  }
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

  handleClick = (id: number) => {
      const newTodoData = this.state.todoDatas.filter((data: TodoData) => data.id !== id)
      this.setState({
          todoDatas: newTodoData
      })
  }

  render() {
    return (
        <div className="container">
          <div className="todoBlock">
              <div className="title">
                  <h1>할 일 목록</h1>
              </div>
              {this.state.todoDatas.map((data:TodoData) => (
                  <div key={data.id} style={this.getStyle()}>
                      <input type="checkbox" defaultChecked={data.completed}/>
                      {data.title}
                      <button style={this.btnStyle} onClick={() => this.handleClick(data.id)}>x</button>
                  </div>
              ))}
          </div>
        </div>
    )
  }
}
