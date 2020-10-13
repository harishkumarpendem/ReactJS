import React from 'react';
import ClassCounter from './components/ClassCounter'
import HookCounter from './components/HookCounter';
import HookCounter2 from './components/HookCounter2';
import HookComponent3 from './components/HookCounter3';
import HookCounter4 from './components/HookCounter4';

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
      <a href="/" className="navbar-brand">Functional Component Interaction</a>
      </nav> 
      <ClassCounter />
      <HookCounter />
      <HookCounter2 />
      <HookComponent3 />
      <HookCounter4 />
    </div>
  );
}

export default App;
