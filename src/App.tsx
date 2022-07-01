import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import {Counters} from "./components/Counters/Counters";

function App() {
  return (
    <div className="app">
        <div className="content">
            <Counters/>
        </div>
    </div>
  );
}

export default App;
