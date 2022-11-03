import './App.css';
import React from "react";
import { Button } from 'primereact/button';
import { Menubar } from 'primereact/menubar';

import Greet from './components/greet';
import Counter from './components/counter';
import UserList from './components/list';

function App() {

  return (
    <div className="App">
      <Menubar
        className="bg-blue-600 p-3 text-3xl text-white"
        start={"This is a demo project of Prime React"}
        end={<Button label="Logout" icon="pi pi-power-off" />}
      />
      {/* <Counter />
      <Greet /> */}
      <UserList />
    </div>
  );
}

export default App;
