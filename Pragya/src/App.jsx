import React from 'react'
import myImage from './assets/react.svg';

function App() {
  return (
    <div>
      <img style={{width:200}} src={myImage} alt="image" />
      <div style={{fontSize:30}}></div>
    </div>
  )
}

export default App
