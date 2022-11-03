import './App.css';
import React, { useEffect, useState } from "react";
import { Button } from 'primereact/button';
import { Menubar } from 'primereact/menubar';
import { InputText } from 'primereact/inputtext';

import Greet from './components/greet';
import Counter from './components/counter';

function App() {

  return (
    <div className="App">
      <Menubar
        className="bg-blue-600 p-3 text-3xl text-white"
        start={"This is a demo project of Prime React"}
        end={<Button label="Logout" icon="pi pi-power-off" />}
      />
      <Counter />
      <Greet />
    </div>
  );
}

export default App;
