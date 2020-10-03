import React from 'react';
import RecipeList from './component/RecipeList';

function App() {
  return (
    <div className='App'>
      <nav className='navbar navbar-dark bg-dark'>
        <a href='/' className='navbar-brand'>
          EagleOwl
        </a>
      </nav>
        <RecipeList>
          
        </RecipeList>  
    </div>
  );
}

export default App;