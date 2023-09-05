import React, {  useEffect, useState } from 'react'
import styles from "./Pizza.module.css"
import axios from 'axios'
export default function Pizza() {
    let[array,setArray]=useState([])
    let[show,setShow]=useState(false)
    let x;
   async function getData(){
    let {data}=await axios.get('https://forkify-api.herokuapp.com/api/search?q=pizza')
    //lw 3ndy data of array w hghyr feha i should deep copy, w how eny aghyr fe new array bas ana hena ana b-get data bas msh bghyr
    setArray(data.recipes);
    }
    // async function getInfo(){
    //     let {data}=await axios.get('https://forkify-api.herokuapp.com/api/search?q=pizza')
    //     //lw 3ndy data of array w hghyr feha i should deep copy, w how eny aghyr fe new array bas ana hena ana b-get data bas msh bghyr
    //      setIngredients(data.recipes.publisher);
    //     }
        function changeBackground(e) {
           console.log("ss");
          }
        
    useEffect(()=>{
      getData();   
     
    },[]) 
            


  return (
    <div>Pizza
        <div className="row g-4">
        {array.map((element)=>
            <div key={element.recipe_id} 
            onMouseEnter={() => setShow(true)}
            onMouseLeave={() => setShow(false)} 
            className='col-md-3'>
             <div className={styles.article}>
            <img src={element.image_url} className='w-100' style={{height:'200px',objectFit:'cover'}} ></img>
            <p>{element.title}</p>
          <h1 className={styles.header}>{show? <p>{element.publisher}</p>:<p></p>}</h1>  
                </div>   
            
            
            </div>)}
        </div>
    </div>
  )
}
