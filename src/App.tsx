import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Circle, Layer,Text, Line, Rect, Stage} from "react-konva";
import Kuladraw from './pages/Kuladraw';

function App() {
  return (
     <div>
       <Kuladraw/>
     </div>
  );
}

export default App;
