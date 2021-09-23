/*
 * @Date: 2021-09-14 18:43:58
 * @LastEditors: Fane Kung
 * @LastEditTime: 2021-09-23 14:23:36
 * @FilePath: /react-counter/src/App.js
 */
import React from 'react';
import TimeSetting from './components/TimeSetting'
import Lottery from './components/Lottery';
import './App.css'

function App() {
  return (  
    <div className="App">
      <h1>Lottery</h1>
      <TimeSetting />
      <Lottery />
    </div>
  );
}

export default App;
