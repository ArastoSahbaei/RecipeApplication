import React from 'react';
import './shared/design/Global.css'
import Routing from "./routes/Routing"
import { NavigationBar } from './components/navigationbar/NavigationBar'
import { UserProvider } from './UserContext'

function App() {
  return (
    <UserProvider>
      <Routing>
        <NavigationBar />
      </Routing>
    </UserProvider>
  );
}

export default App;
