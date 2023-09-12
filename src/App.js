import logo from './logo.svg';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Portifolio from './Components/Portifolio/Portifolio';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';

function App() {

  let routes=createBrowserRouter([
    {path:'/',element:<Layout></Layout>,children:[
      {index:true,element:<Home></Home>},
      {path:'about',element:<About></About>},
      {path:'contact',element:<Contact></Contact>},
      {path:'portifolio',element:<Portifolio></Portifolio>}
    ]}
  ])
  return (
    <div className="App">
      <RouterProvider router={routes}></RouterProvider>
      
    </div>
  );
}

export default App;
