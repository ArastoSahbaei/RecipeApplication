import React from 'react';
import './shared/design/Global.css'
import { FirstComponent } from './components/FirstComponent'
import { SearchRecipe } from './components/searchrecipe/SearchRecipe'

function App() {
  return (
    <div className="App">
      <SearchRecipe />
      {/*  <FirstComponent /> */}
    </div>
  );
}

export default App;
