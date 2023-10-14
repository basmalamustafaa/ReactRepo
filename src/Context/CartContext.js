import { createContext, useState,useContext } from "react";
import axios from 'axios'
import { UserContext } from './UserToken';

export let CartContext = createContext(null) //ashan fel awl el token b null

export default function CartContextProvider(props) {
    let BaseUrl = 'https://ecommerce.routemisr.com'
    let {isLogin,setIsLogin}=useContext(UserContext);
    let headers={token:isLogin}
    let[cartNumber,setCartNumber]=useState(0);
    let[cartId,setCartId]=useState(0);

    //add to cart
    function addtoCart(productId){
    return axios.post(`${BaseUrl}/api/v1/cart`,{productId},{headers}).then(res=>res).catch(err=>err) //url,data eli goa el body,akhr haga eli byb2a fel header which is the user token
    }
    //get cart
    function getCart(){
    return axios.get(`${BaseUrl}/api/v1/cart`,{headers}).then(res=>res).catch(err=>err) 
    }

    //update cart
    function updateCart(prodId,count){
        return axios.put(`${BaseUrl}/api/v1/cart/${prodId}`,{count},{headers}).then(res=>res).catch(err=>err) 

    }
    //delete
    function deleteItem(prodId){
        return axios.delete(`${BaseUrl}/api/v1/cart/${prodId}`,{headers}).then(res=>res).catch(err=>err) 

    }
    function deleteCart(){
        return axios.delete(`${BaseUrl}/api/v1/cart`,{headers}).then(res=>res).catch(err=>err) 

    }
    function checkout(cartId,shippingAddress){
        return axios.post(`${BaseUrl}/api/v1/orders/checkout-session/${cartId}`,{shippingAddress},{headers}).then(res=>res).catch(err=>err) 

    }

    
    return <CartContext.Provider value={{addtoCart,getCart,deleteItem,updateCart,cartNumber,setCartNumber,checkout,cartId,setCartId,deleteCart}}>
             {props.children}
        </CartContext.Provider>

    
}
