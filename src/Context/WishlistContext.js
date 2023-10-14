import { createContext, useState,useContext } from "react";
import axios from 'axios'
import { UserContext } from './UserToken';

export let WishListContext = createContext(null) //ashan fel awl el token b null
 
export default function WishListContextProvider(props) {
    const [wishlist, setWishlist] = useState([]);
    const [wishListCount,setWishlistCount]=useState(0)

    let BaseUrl = 'https://ecommerce.routemisr.com'
    let {isLogin,setIsLogin}=useContext(UserContext);
    let headers={token:isLogin}
    //let[added,setAdded]=useState(false)
    function addtowishlist(productId){
        return axios.post(`${BaseUrl}/api/v1/wishlist`,{productId},{headers}).then(res=>res).catch(err=>err) //url,data eli goa el body,akhr haga eli byb2a fel header which is the user token
        }
    function removeFromwishlist(productId){
        return axios.delete(`${BaseUrl}/api/v1/wishlist/${productId}`,{headers}).then(res=>res).catch(err=>err) //url,data eli goa el body,akhr haga eli byb2a fel header which is the user token
        }
    function getwishlist(){
        return axios.get(`${BaseUrl}/api/v1/wishlist`,{headers}).then(res=>res).catch(err=>err) //url,data eli goa el body,akhr haga eli byb2a fel header which is the user token
        }


        return <WishListContext.Provider value={{addtowishlist,removeFromwishlist,getwishlist,wishlist,setWishlist,wishListCount,setWishlistCount}}>
             {props.children}
        </WishListContext.Provider>
}