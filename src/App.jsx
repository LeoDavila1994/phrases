import { useState } from 'react';
import './App.css';
import data from "./quotes.json";
import QuoteBox from './Components/QuoteBox';

function App() {

  const [colorR, setColorR] = useState(Math.floor(Math.random() * 255));
  const [colorG, setColorG] = useState(Math.floor(Math.random() * 255));
  const [colorB, setColorB] = useState(Math.floor(Math.random() * 255));
  const [initQuote, setInitQuote] = useState(Math.floor(Math.random() * data.length));
  const reloadQuoat = Math.floor(Math.random() * data.length);

  const click = () =>{
    setColorR(Math.floor(Math.random() * 255));
    setColorG(Math.floor(Math.random() * 255));
    setColorB(Math.floor(Math.random() * 255));
    setInitQuote(reloadQuoat);
  };


  return (
    <section style={{backgroundColor: `rgb(${colorR}, ${colorG}, ${colorB})`}}>
      <QuoteBox click={click} colorR={colorR} colorG={colorG} colorB={colorB} initQuote={initQuote}/>
    </section>
  )
}

export default App;
