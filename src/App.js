import { useState } from 'react';
import './App.scss';

function App() {
  const [count,setCount] = useState(0)
  return (
    <div className="App">
      <header className='header'>Counter</header>
      <h2 className='number' style={{color: `${count > 0 ? 'green' : count < 0 ? 'red' : 'black'}`}}>{count}</h2>
      <div className='btns'>
        <div className='btn' onClick={() => setCount(prev => prev - 1)}>Decrease</div>
        <div className='btn' onClick={() => setCount(0)}>Reset</div>
        <div className='btn' onClick={() => setCount(prev => prev + 1)}>Increase</div>
      </div>
    </div>
  );
}

export default App;
