 import {createContext,useState} from "react";
 export const CustomContext = createContext()

 export const Context = (props) =>{
    const [status,setStatus] = useState('all')
    const [btn,setBtn] = useState(false)
    const [user,setUser] = useState({
        email:''
    })

     const  value = {
         user,
         setUser,
         status,
         setStatus,
         btn,
         setBtn
     }

    return <CustomContext.Provider value={value}>
        {props.children}
    </CustomContext.Provider>
 }