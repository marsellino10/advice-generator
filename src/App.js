import { useEffect, useState } from 'react';
import './App.css';
import pauseDesktop from "./images/pattern-divider-desktop.svg";
import dice from "./images/icon-dice.svg";

function App() {

  const[advices,setAdvices] = useState([]);

  const getAdvices = async () => {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    console.log(data);
    setAdvices(data.slip);
  }

  useEffect(() => {
    getAdvices();
  },[]);


  return (
    <div className="App">
      <div className='container'>

        <h1>Advice #{advices.id}</h1>
        <p className='Par'>"{advices.advice}"</p>

        <picture>
            <source media="(min-width: 768px)" srcSet={pauseDesktop} />
            <img src={pauseDesktop} alt="" />
        </picture>

        <button onClick={getAdvices}>
          <img src={dice} alt="" />
        </button>

      </div>
      
    </div>
  );
}

export default App;
