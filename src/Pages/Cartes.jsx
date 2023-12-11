import React, {useEffect, useState} from 'react'
import NavBar from '../Components/NavBar.jsx'
import CartesPage from "../Components/CartesPage.jsx";
import Footer from "../Components/Footer.jsx";

function Cartes() {

    return (
        <>
            <div className="Cartes">
                <NavBar />
                <CartesPage/>
                <Footer/>
            </div>
        </>
    )
}

export default Cartes