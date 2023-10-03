import { createContext, useState } from "react";


// {/* props.children de hya el app fa da m3nah eni provide userContext for the children aka App
//             value={} de hya el value eli h-provide beha el children which is the app w fel case hena el value hya el isLogin fel awl null w b3den mafrod hyb2a goaha el token
//             */

export let UserContext = createContext(null) //ashan fel awl el token b null

export default function UserContextProvider(props) {

    let[isLogin,setIsLogin]=useState(null)
    
    return <UserContext.Provider value={{isLogin,setIsLogin}}>
             {props.children}
        </UserContext.Provider>

    
}
