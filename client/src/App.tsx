import React from 'react';
import './shared/design/Global.css'
import Routing from "./components/routing/Routing"
import { SearchRecipe } from './components/searchrecipe/SearchRecipe'

function App() {
  return (
    <div className="App">
      <Routing>
         <SearchRecipe />
      </Routing>
    </div>
  );
}

export default App;
