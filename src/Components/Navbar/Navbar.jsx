import React, { useContext, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserContext } from '../../Context/UserToken'
import { CartContext } from '../../Context/CartContext'
import logo from "../../assets/freshcart-logo.svg"
import { WishListContext } from '../../Context/WishlistContext'

export default function Navbar() {
    let navigate = useNavigate();
    let { isLogin, setIsLogin } = useContext(UserContext);
    let { cartNumber, setCartNumber,getCart } = useContext(CartContext);
    let {wishListCount,setWishlistCount,getwishlist}=useContext(WishListContext)

    function logout() {
        localStorage.removeItem('userToken');
        setIsLogin(null)
        navigate("/")
    }
    async function getCount(){
        let res=await getwishlist();
        let res2=await getCart();
        setWishlistCount(res?.data?.data?.length)
        setCartNumber(res2?.data?.numOfCartItems,"M#Rfsh")
    }
    useEffect(() => {
        getCount();
        console.log("UPDATE COUNT")

    }, [cartNumber,wishListCount]);
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <Link to='/' className="navbar-brand" >
                        <img src= {logo}></img>
                    </Link>
                    <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="collapsibleNavId">
                        <ul className="navbar-nav me-auto mt-2 mt-lg-0">
                            <li className="nav-item">
                                <Link to='/' className="nav-link active" aria-current="page">Home <span className="visually-hidden">(current)</span></Link>
                            </li>
                            <li className="nav-item">
                                <Link to='products' className="nav-link">Products</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='categories' className="nav-link">Categories</Link>
                            </li>

                            <li className="nav-item">
                                <Link to='brands' className="nav-link">Brands</Link>
                            </li>
                            
                        </ul>
                        <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
                            {!isLogin ?
                                <>
                                    <li className="nav-item ms-auto d-block">
                                        <Link to='register' className="nav-link">Register</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to='login' className="nav-link">Login</Link>
                                    </li>

                                </> :
                                <>
                                {isLogin ? <li className="nav-item">
                                <Link to='/cart' className="nav-link">Cart 
                                    <i className='fa-solid fa-cart-shopping fx-2 fa-xl'></i>
                                    {cartNumber === 0 ? '' : cartNumber}
                                </Link>
                            </li>
                                : ""}
                                {isLogin ? <li className="nav-item">
                                <Link to='/wishlist' className="nav-link">Wishlist 
                                    <i className='fa-solid fa-heart  fa-xl'></i>
                                    {wishListCount === 0 ? '' : wishListCount}
                                </Link>
                            </li>
                                : ""}
                                <li className="nav-item">
                                    <span className="nav-link cursor-pointer" onClick={logout}>Sign Out</span>
                                </li>
                                </>}

                        </ul>

                    </div>
                </div>
            </nav>
        </div>
    )
}
