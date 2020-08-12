import React from 'react';
import Button from './components/Button';
import './App.scss'

function App() {
  return (
     <div className="App">
        <div className="buttons">
          <Button size="large">BUTTON</Button>
             <Button>BUTTON</Button>
           <Button size="samall">BUTTON</Button>
        </div>
        <div className="buttons">
          <Button color="gray" size="large">BUTTON</Button>
             <Button color="gray">BUTTON</Button>
           <Button color="gray" size="samall">BUTTON</Button>
        </div>

        <div className="buttons">
          <Button color="pink" size="large">BUTTON</Button>
             <Button color="pink">BUTTON</Button>
           <Button color="pink" size="samall">BUTTON</Button>
        </div>

        <div className="buttons">
             <Button size="large" fullWidth >BUTTON</Button>
             {/* <Button size="large" fullWidth>BUTTON</Button> */}
             <Button color="gray" fullWidth>BUTTON</Button>
             <Button color="pink" size="samall" fullWidth 
             onClick={() =>{
                console.log('클릭!');
             }}
             onMouseMove={() => {
              console.log('mouseMove');
             }}
             >BUTTON</Button>
        </div>
     </div>
  );
}

export default App;
