import React from 'react';
import './shared/design/Global.css'
import Routing from "./routes/Routing"
import { NavigationBar } from './components/navigationbar/NavigationBar'

function App() {
  return (
    <Routing>
      <NavigationBar />
    </Routing>
  );
}

export default App;
