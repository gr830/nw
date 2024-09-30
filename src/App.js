import logo from './logo.png';
import './App.css';
import { useState } from 'react';
import { Converter } from './component/converter';
import { CalcPlit } from './component/calcPlitt';

function App() {
  const [enableConverter, setenableConverter] = useState(false)
  const [plitTogle, setplitTogle] = useState(false)

  const converterTogle = () => {
    setenableConverter(!enableConverter)
  }

  const plitTogleFn = () => {
    setplitTogle(!plitTogle)
  }

  return (
    <div className="App">
      <img src={logo} className="logo"></img>
      <button className="btn1"onClick={converterTogle}>{enableConverter ? "Скрыть конвертер" :"Показать конвертер"}</button>
      <button className="btn1"onClick={plitTogleFn}>{plitTogle ? "Скрыть раскрой" :"Показать раскрой"}</button>
      {enableConverter ? <Converter /> : "" }
      {plitTogle ? <CalcPlit /> : "" }
    </div>
  );
}

export default App;
