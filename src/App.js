import logo from './logo.svg';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import Home from './Components/Home/Home';
import Cart from './Components/Cart/Cart';
import Register from './Components/Register/Register';
import NotFound from './Components/NotFound/NotFound';
import Login from './Components/Login/Login';
import { useContext, useEffect } from 'react';
import { UserContext } from './Context/UserToken';
import ProtectedRoute from './Components/ProtectedRoute';
function App() {
  let {IsLogin,setIsLogin}=useContext(UserContext)

//ashan kul mara a-render feha a-check ana m3aya token wala la

  useEffect(()=>{
if(localStorage.getItem('userToken')){
setIsLogin(localStorage.getItem('userToken'))
}
  },[])

  const routes=createBrowserRouter([
    {path:'/',element:<Layout></Layout>,children:[
      {index:true,element:<Home></Home>},
      {path:'/cart',element:<ProtectedRoute><Cart></Cart></ProtectedRoute>},
      {path:'/register',element:<Register></Register>},
      {path:'/login',element:<Login></Login>},
      {path:'*', element:<NotFound></NotFound>}
    ]}
  ])
  return (
    <div className="App">
     
       <RouterProvider router={routes} ></RouterProvider>
      
    </div>
  );
}

export default App;
