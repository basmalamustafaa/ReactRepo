import { Navigate, useNavigate } from "react-router-dom"

export default function ProtectedRoute({children}){
    if(localStorage.getItem('userToken')){
        // keda hena hyrg3 el children which is the cart component
       return children
    }
       else
        //navigate('/login') msh shaghala ashan useNavigate btt3ml 3ala el component elo goa el routing eli fel app.js wel prtotecteRoute
        // da js file msh jsx fa hoa function msh component fa mynf3sh astkhdm useNavigate
        return <Navigate to={'/login'}></Navigate>
       
    }
