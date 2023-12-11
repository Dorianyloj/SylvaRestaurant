import React, {useEffect, useState} from 'react'
import NavBar from '../Components/NavBar.jsx'
import HomePage from "../Components/HomePage.jsx";
import Footer from "../Components/Footer.jsx";

function Home() {

    return (
        <>
            <div className="Home">
                <NavBar />
                <HomePage/>
                <Footer/>
            </div>
        </>
    )
}

export default Home