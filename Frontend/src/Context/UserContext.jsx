import React, { createContext, useEffect, useState } from 'react'


export const userContextData = createContext()
const UserContext = ({children}) => {
    const [user, setuser] = useState(false)

    useEffect(()=>{
     const token = localStorage.getItem("token")
    if(token){
        setuser(true)
        // console.log(user);
        
    }

    },[user])
    
  return (
    <userContextData.Provider value={{user}}>
        {children}
    </userContextData.Provider>
  )
}

export default UserContext
