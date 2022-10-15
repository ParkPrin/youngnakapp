import React, {ChangeEvent, Component} from "react";
import "./App.css";

interface TodoData {
    id: number;
    title: string;
    completed: boolean;
}

type State = {
    todoDatas: TodoData[];
    value: string;
    keyIndex: number;
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
      ],
      value: '',
      keyIndex: 2
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

  deleteItem = (id: number) => {
      const newTodoData = this.state.todoDatas.filter((data: TodoData) => data.id !== id)
      this.setState({
          todoDatas: newTodoData
      })
  }
  addItem = (e: React.MouseEvent<HTMLInputElement>) => {
      e.preventDefault();
      const keyIndex: number = this.state.keyIndex + 1;

      const newTodoItem: TodoData = {
        id: keyIndex,
        title: this.state.value,
        completed: false,
      }
      this.setState({
          todoDatas: [...this.state.todoDatas, newTodoItem],
          keyIndex: keyIndex
      })
      this.clearInput();
  }

  clearInput = () => {
      this.setState({
          value: ''
      })
  }

  inputTitle = (e:ChangeEvent<HTMLInputElement>) => {
      this.setState({
          value: e.target.value
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
                      <button style={this.btnStyle} onClick={() => this.deleteItem(data.id)}>x</button>
                  </div>
              ))}
              <form style={{ display: 'flex'}}>
                  <input type="text" name="value" value={this.state.value} style={{ flex: '10', padding: '5px'}} onChange={(e) => this.inputTitle(e)}/>
                  <input type="submit" value="입력" className="btn" style={{flex: '1'}} onClick={(e) => this.addItem(e)}/>
              </form>
          </div>
        </div>
    )
  }
}
