
import React, { useEffect, useState,useContext } from "react";
import axios from "axios";
import GetApi from '../../src/Components/CustomHook/GetApi'
import Loading from "./Loading";
import { CartContext } from '../Context/CartContext';
import toast, { Toaster } from 'react-hot-toast';
import { UserContext } from '../Context/UserToken';
import { Link } from 'react-router-dom';


export default function Search(){
  const [isloading, setIsloading] = useState(true);
  const [factsData, setFactsData] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);
  let {isLogin}=useContext(UserContext)
  let{addtoCart}=useContext(CartContext) //lazm a-call el function abl el button
  let { cartNumber, setCartNumber } = useContext(CartContext);
  let { isLoading, data } = GetApi('Searchedcproduct', 'products')
  async function addtoCartFunc(prodId){
    let response= await addtoCart(prodId);
    console.log(response);
    setCartNumber(response.data.numOfCartItems)

    if(!isLogin){
        toast.error(response.response.data.message, {
            duration: 4000,
            position: 'top-center'});
            return
    }
    toast.success(response.data.message, {
        duration: 4000,
        position: 'top-center'});
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
    console.log(filteredData,"Data")
  }, [factsData, searchInput]);

  return (
    <>
      

        <form className="form-input-group w-100">
          <label className="search-input-label" htmlFor="search">
            <input
              className="search-input"
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
    
      <main>
        {isloading ? (
          <Loading></Loading>
        ) : (
          <div className="container">
            <div className="row">
           {filteredResults?.map((res) => (
                 <>
                 <div className="col-md-2">
                  <div  key={res._id}>
                      <div className='product p-3 cursor-pointer'>

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
                    <i className='fa-solid fa-plus ' style={{marginRight:"6px"}}></i>
                    Add to cart
                    </button>
                    </div>
                  </div>
                  </div>
                 </>
                ))}
          </div>
          </div>
        )}
        
      </main>
    </>
  );
};




















// import Autocomplete from '@mui/material/Autocomplete';
// import GetApi from '../../src/Components/CustomHook/GetApi'
// import React, { useState } from 'react';
// import IconButton from "@mui/material/IconButton";
// import SearchIcon from '@mui/icons-material/Search';
// import TextField from "@mui/material/TextField";
// export default function Search() {
//     // src/Search.js
//   const [query, setQuery] = useState('');
//   const [searchQuery, setSearchQuery] = useState("");
  
//   const filterData = (query, data) => {
//       if (!query) {
//           return data;
//         } else {
//             return data.filter((d) => d.toLowerCase().includes(query));
//         }
//     };
//     const SearchBar = ({setSearchQuery}) => (
//         <form>
//       <TextField
//         id="search-bar"
//         className="text"
//         onInput={(e) => {
//             setSearchQuery(e.target.value);
//         }}
//         label="Enter a city name"
//         variant="outlined"
//         placeholder="Search..."
//         size="small"
//         />
//       <IconButton type="submit" aria-label="search">
//         <SearchIcon style={{ fill: "blue" }} />
//       </IconButton>
//     </form>
//   );
//   let { isLoading, data } = GetApi('Specificproduct', 'products')
// let data2=data.data.data
//   const dataFiltered = filterData(searchQuery, data2);
  
//   return (
//    <>
//    <div
//       style={{
//         display: "flex",
//         alignSelf: "center",
//         justifyContent: "center",
//         flexDirection: "column",
//         padding: 20
//       }}
//     >
//       <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
//     </div>
//    </>
//   );
// };

