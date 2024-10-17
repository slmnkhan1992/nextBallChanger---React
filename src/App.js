import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(1)
  const [advice, setAdvice] = useState('')

  function nextHandler() {
    setCount(count+1)
  }

  function previousHandler() {
    setCount(count-1)
  } 

  return (
    <div style={{width: '60%', height: '50%', backgroundColor: '#eeeeee', display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly'}}>

    
      <div style={{display: 'flex', justifyContent: 'space-evenly'}}>

      <div style={{width:'50px', height:'50px', borderRadius: '50%', display:'flex', justifyContent:'center', alignItems: 'center', fontSize: '2rem',
        backgroundColor: count === 1 ? 'blue': 'white',
        color: count === 1 ? 'white': 'black'
      }}>1</div>

        <div style={{width:'50px', height:'50px', borderRadius: '50%', display:'flex', justifyContent:'center', alignItems: 'center', fontSize: '2rem',
          backgroundColor: count === 2 ? 'blue': 'white',
        color: count === 2 ? 'white': 'black'

        }}>2</div>

        <div style={{width:'50px', height:'50px', borderRadius: '50%', display:'flex', justifyContent:'center', alignItems: 'center', fontSize: '2rem',
          backgroundColor: count === 3 ? 'blue': 'white',
        color: count === 3 ? 'white': 'black'
        }}>3</div>
      </div>

      <h3 style={{textAlign: 'center'}}>Step:<span>{count}</span>{count==1 ?" Learn Raect": ''}
      {count==2 ?" Explore it's fundamental" : ''} {count==3 ?" Invest your income" : ''} <i style={{color: 'purple', fontSize: '1.4rem', fontWeight: '600'}} class="fa-brands fa-react"></i></h3>

      <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
        <button onClick={previousHandler} style={{backgroundColor: 'blue', color: 'white', padding: '10px 10px', border:"none", borderRadius: '20px'}}>Previous</button>
        <button onClick={nextHandler} style={{backgroundColor: 'blue', color: 'white', padding: '10px 10px', border:"none", borderRadius: '20px'}}>Next</button>
      </div>

    </div>
  );
}

export default App;
