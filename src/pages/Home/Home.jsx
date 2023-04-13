import React, {useContext} from 'react';
import {CustomContext} from "../../utils/Context";
import {Navigate} from "react-router-dom";
import Aside from "./Aside/Aside";
import {ToastContainer} from "react-toastify";
import HomeContent from "./HomeContent/HomeContent";
import "./home.scss"


const Home = () => {
    const  {user} = useContext(CustomContext)
    if (user.email.length === 0){
        return  <Navigate to={'/login'}/>
    }
    return (
        <div className='home'>
            <Aside/>
          <ToastContainer/>
            <HomeContent/>
        </div>
    );
};

export default Home;