import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Person } from "./user/Person";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
const appFuction = () => {
  const person: Person = new Person(`박종훈`, 35);
  const element = (
    <React.StrictMode>
      <App person={person} />
    </React.StrictMode>
  );
  root.render(element);
};

appFuction();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
