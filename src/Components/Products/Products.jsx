import React, { useEffect, useState, useContext } from 'react'
import { Helmet } from "react-helmet";
import { useQuery } from 'react-query'
import GetApi from '../CustomHook/GetApi'
import Loading from '../Loading'
import { CartContext } from '../../Context/CartContext';
import toast, { Toaster } from 'react-hot-toast';
import { UserContext } from '../../Context/UserToken';
import { Link } from 'react-router-dom';
import Search from '../Search';
import { WishListContext } from '../../Context/WishlistContext';


export default function Products() {
  const [isloading, setIsloading] = useState(true);
  const [factsData, setFactsData] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);
  let { addtoCart,cartNumber, setCartNumber,getCart } = useContext(CartContext) //lazm a-call el function abl el button
  let { isLogin } = useContext(UserContext)

  let { addtowishlist,removeFromwishlist,getwishlist,wishlist,setWishlist,wishListCount,setWishlistCount } = useContext(WishListContext)

  let { isLoading, data } = GetApi('Specificproduct', 'products')
  console.log(data?.data?.data, "ProductArr");

  async function addtoCartFunc(prodId) {
    let response = await addtoCart(prodId);
    console.log(response);
    setCartNumber(response.data.numOfCartItems)

    if (!isLogin) {
      toast.error(response.response.data.message, {
        duration: 4000,
        position: 'top-center'
      });
      return
    }
    toast.success(response.data.message, {
      duration: 4000,
      position: 'top-center'
    });
  }
  async function AddtowishListFunc(id) {
    let res = await addtowishlist(id);
    console.log(res?.data?.data?.length, "WISHLISTTTTTT a3www");

    setWishlistCount(res?.data?.data?.length)
    if (!isLogin) {
        toast.error(res.response.data.message, {
            duration: 4000,
            position: 'top-center'
        });
        return
    }
    toast.success(res.data.message, {
        duration: 4000,
        position: 'top-center'
    });
    //setIsInWishlist(!isInWishlist);

}
async function RemovefromwishListFunc(id) {
    let res = await removeFromwishlist(id);
    console.log(res?.data?.data?.length, "REMOVESSSS");
    setWishlistCount(res?.data?.data?.length)
if (!isLogin) {
    toast.error(res.response.data.message, {
        duration: 4000,
        position: 'top-center'
    });
    return
}
toast.error(res.data.message, {
    duration: 4000,
    position: 'top-center'
});
}
//ashan y-update el cart number wel wishlist items w b3ml call fe useEffect()
async function getCount(){
    let res=await getwishlist();
    let res2=await getCart();
    setWishlistCount(res?.data?.data?.length)
    setCartNumber(res2?.data?.numOfCartItems,"M#Rfsh")
}
const toggleWishlist =  (productId) => {
    if (wishlist.includes(productId)) {
      // Remove from wishlist
      try {
        // Make a request to your API to remove the product from the wishlist
        RemovefromwishListFunc(productId);
        setWishlist(prevWishlist => prevWishlist.filter(id => id !== productId));
        console.log("A#WSWW")
      } catch (error) {
        console.error('Error removing from wishlist:', error);
      }
    } else {
      // Add to wishlist
      try {
        // Make a request to your API to add the product to the wishlist
         AddtowishListFunc(productId);
        console.log("AMAMAMMAMA")

        setWishlist(prevWishlist => [...prevWishlist, productId]);
      } catch (error) {
        console.error('Error adding to wishlist:', error);
      }
    }
  }
  const isInWishlist = (productId) => {
    return wishlist.includes(productId);
  }

  useEffect(() => {

    setFactsData(data?.data?.data);
    setIsloading(false);

  }, []);

  useEffect(() => {
    setIsloading(true)
    const filteredData = data?.data?.data?.filter((fact) => {
      return Object.values(fact)
        .join("")
        .toLowerCase()
        .includes(searchInput.toLowerCase());
    });
    setIsloading(false)
    setFilteredResults(filteredData);
    console.log(filteredData, "Data")
  }, [factsData, searchInput]);

  useEffect(() => {
    getCount();
    //console.log("UPDATE COUNT")

}, [cartNumber,wishListCount]);
  return (
    <div className='container my-3 py-3' style={{ minHeight: "100vh" }}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Products</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      {isLoading ?
        <div className='container h-100' style={{ minHeight: "100vh" }}>
          <Loading></Loading>
        </div> : <>
          <h3>Shop our top rated products</h3>
          <form className="searchproducs mx-auto"  >
            <label className="searchproducs my-2 " htmlFor="search">
              <input

                className="search-input py-1 px-2"
                type="search"
                name="search"
                id="search"
                placeholder="Search..."
                value={searchInput}
                onChange={(e) => {
                  setSearchInput(e.target.value);
                }}
                required
              />
            </label>
          </form>
          <div className="row ">

            {!filteredResults ?
              <>
                {data?.data?.data.sort((a, b) => b.ratingsAverage - a.ratingsAverage).slice(0, 11).map((product) =>
                  <div className='col-md-2 cart-box ' key={product._id}>

                    <div className='product p-3 cursor-pointer'>
                    <button className='bg-transparent border-0 py-3' style={{ width: "100%" ,display: "flex",justifyContent: "end"}} onClick={() => toggleWishlist(product._id)} >
                                                        <i className={`fa-solid fa-heart fa-light fa-xl ms-auto ${isInWishlist(product._id) ? 'text-danger' : ''}`} ></i>
                                                    </button>
                      <Link className='ayhaga' to={`productdetails/${product._id}`}>
                        <div>
                          <img className='w-100' alt='ayhaga' src={product.imageCover}></img>
                          <p className='text-main'>{product.category.name}</p>
                          <p>{product.title.split(" ").slice(0, 2).join(" ")}</p>
                          <div className='product-box d-flex justify-content-between'>
                            <span>{product.price} EGP</span>

                            <span>
                              <i className='fa-solid fa-star rating-color'></i>
                              {product.ratingsAverage}</span>
                          </div>
                        </div>
                      </Link>

                      <button className='btn bg-main my-3 text-white w-100' onClick={() => addtoCartFunc(product._id)}>
                        <i className='fa-solid fa-plus ' style={{ marginRight: "6px" }}></i>
                        Add to cart
                      </button>
                    </div>

                  </div>)
                } </>
              :
              <>
                {filteredResults?.map((res) => (

                  <div className="col-md-2">
                    <div key={res._id}>
                      <div className='product p-3 cursor-pointer'>
                      <button className='bg-transparent border-0 py-3' style={{ width: "100%" ,display: "flex",justifyContent: "end"}} onClick={() => toggleWishlist(res._id)} >
                                                        <i className={`fa-solid fa-heart fa-light fa-xl ms-auto ${isInWishlist(res._id) ? 'text-danger' : ''}`} ></i>
                                                    </button>
                        <Link className='ayhaga' to={`productdetails/${res._id}`}>
                          <div>
                            <img className='w-100' alt='ayhaga' src={res.imageCover}></img>
                            <p className='text-main'>{res.category.name}</p>
                            <p>{res.title.split(" ").slice(0, 2).join(" ")}</p>
                            <div className='product-box d-flex justify-content-between'>
                              <span>{res.price} EGP</span>

                              <span>
                                <i className='fa-solid fa-star rating-color'></i>
                                {res.ratingsAverage}</span>
                            </div>
                          </div>
                        </Link>

                        <button className='btn bg-main my-3 text-white w-100' onClick={() => addtoCartFunc(res._id)}>
                          <i className='fa-solid fa-plus ' style={{ marginRight: "6px" }}></i>
                          Add to cart
                        </button>
                      </div>
                    </div>
                  </div>

                ))
                }
              </>

            }



          </div>
        </>
      }

    </div>
  )
}
