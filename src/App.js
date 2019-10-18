import React from 'react';

function App() {
  const accessCamera = () => {
    const input = document.createElement('input');
    input.setAttribute('type', 'file');
    input.setAttribute('accept', 'image');
    input.setAttribute('capture', 'camera');
    input.click();
  };
  
  // const accessCamera = () => {
  //   Navigator.getUserMedia()
  // };
  
  return (
    <div className="App">
      {accessCamera()}
    </div>
  );
}

export default App;
