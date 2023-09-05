import React, { useEffect, useState } from 'react'

export default function About() {
    //Badeel el state eli fel class component hoa el hook eli hya esmha use state
    let[name,setName]=useState('a3ww') // b intialize el name wel age b empty string wel setName hya el method eli btghyr elName
    let[count,setCount]=useState(0)
//bashel el data zy eli kant fel class eli hya el state goa el UseState

    function changeName(){
        setName("batekha") // keda lma b-call el function bghyr el name b whatever i set
    }

    function changeCount(){
        setCount(count+1)
    }


    useEffect(()=>{
        console.log("Mounting")
        
        
    },[]) //de by7sl call leha fel b3d el rendring w mfesh ay dependency 

    useEffect(()=>{
        if(name=='a3ww')
        return;
        console.log(count)
        },[name]) //de by7sl call leha fel b3d el rendring w feh  dependency  which is the name so hena by7sl call lma b-update el name
        
        //VVVVIP
        //by7sl infinte loop lw ghyrt data goa el useEffect lw el dependancy hya hya el data eli bghyrha aw lw mfesh dependancy khales
        //l2no lma bghyr fel state which is the data by7sl render eli fel return w b3dha b-call yseEffect
        //State(data) ==> return ==> useEffect
  return (
    <div> 
        <h3 >Count {count}</h3>
        <h1>{name}</h1>
        <button onClick={() => { changeCount(); changeName();}}>change name</button>
        
    </div>
  )
}
