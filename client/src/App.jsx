import { useState } from "react";

import Spline from '@splinetool/react-spline';
import {  Navbar, Welcome } from "./components";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
  
      <div className="bg-welcome">
      <Spline scene="https://prod.spline.design/Iqi-R3kn-ajaApR8/scene.splinecode" className="position: absolute "/>
        <Navbar/>
        <Welcome/>
      </div>
      
    </div>
  );
}

export default App;

