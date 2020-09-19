import React from 'react';
import GithubAPI from "./components/GithubAPI";
import "./App.css"
function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
      <a href="/" className="navbar-brand">React with Github Search(HTTP calls)</a>
      </nav>
        <GithubAPI />
    </div>
  );
}

export default App;
