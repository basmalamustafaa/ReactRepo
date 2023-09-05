// import logo from './logo.svg';
// import './App.css';

import FruitsVeg from "./Components/FruitsVeg/FruitsVeg"
import About from "./Components/About/About"
import { Component } from "react"
import Pizza from "./Components/Pizza"


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
export default class App extends  Component{
state={}
render (){
  return <>
  <h1></h1>
  
  <About></About>
  <Pizza></Pizza>
  </>
}
}
