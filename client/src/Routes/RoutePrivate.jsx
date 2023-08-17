import { Navigate } from "react-router-dom"
import { AuthContext } from "../Context/AuthContext"
import { useContext } from "react"


export const RoutePrivate = ({children}) => {

    const {user} = useContext(AuthContext)
    console.log(user);
    
    if (!user || !user.id) {
        
        return <Navigate to='/'/>
        
    } else {

        return <>{children}</>;
    }
    
}