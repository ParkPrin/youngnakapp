import React from "react";
import "./App.css";
import Nav from "./components/Nav";
import Banner from "./components/Banner";

const App = ():JSX.Element => {
    return (
      <div className="app">
        <Nav />
        <Banner />
      </div>
    );
}

export default App;