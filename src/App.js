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
import ProductDetails from './Components/ProductDetails/ProductDetails';
import Products from './Components/Products/Products'
import toast, { Toaster } from 'react-hot-toast';
import Orders from './Components/Orders';
import Brand from './Components/Brand/Brand';
import Categories from './Components/Categories/Categories';
import Wishlist from './Components/Wishlist/Wishlist';

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
      {path:'/allorders',element:<ProtectedRoute><Orders></Orders></ProtectedRoute>},
      {path:'/wishlist',element:<ProtectedRoute><Wishlist></Wishlist></ProtectedRoute>},
      {path:'/brands',element:<Brand></Brand>},
      {path:'/categories',element:<Categories></Categories>},
      {path:'/register',element:<Register></Register>},
      {path:'/products',element:<Products></Products>},
      {path:'/productdetails/:id',element:<ProductDetails></ProductDetails>},
      {path:'/login',element:<Login></Login>},
      {path:'*', element:<NotFound></NotFound>}
    ]}
  ])
  return (
    <>
    <div className="App">
       <RouterProvider router={routes} ></RouterProvider>
    </div>
    <Toaster></Toaster>
    </>
  );
}

export default App;
