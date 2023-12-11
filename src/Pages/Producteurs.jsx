import React, {useEffect, useState} from 'react'
import NavBar from '../Components/NavBar.jsx'
import Footer from "../Components/Footer.jsx";
import ProducteursPage from "../Components/ProducteursPage.jsx";

function Producteurs() {

    return (
        <>
            <div className="Cartes">
                <NavBar />
                <ProducteursPage/>
                <Footer/>
            </div>
        </>
    )
}

export default Producteurs