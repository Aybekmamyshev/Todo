 import {Routes,Route} from "react-router-dom";
 import Home from "./pages/Home/Home";
 import Login from "./pages/Login/Login";
 import Register from "./pages/Register/Register";
 import "./style.scss"
 import {useContext, useEffect} from "react";
 import {CustomContext} from "./utils/Context";


 function App() {
     const {setUser} = useContext(CustomContext)

     useEffect(() => {
         if (localStorage.getItem('user') !== null){
             setUser(JSON.parse(localStorage.getItem('user')))
         }
     },[])

  return (
   <>

  <Routes>
       <Route path={'/'} element={<Home/>}/>
       <Route path={'/login'} element={<Login/>}/>
       <Route path={'/register'} element={<Register/>}/>
  </Routes>
   </>

  );
}

export default App;
