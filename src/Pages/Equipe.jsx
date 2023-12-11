import React, {useEffect, useState} from 'react'
import NavBar from '../Components/NavBar.jsx'
import Footer from "../Components/Footer.jsx";
import ProducteursPage from "../Components/ProducteursPage.jsx";
import EquipePage from "../Components/EquipePage.jsx";

function Equipe() {

    return (
        <>
            <div className="Equipe">
                <NavBar />
                <EquipePage/>
                <Footer/>
            </div>
        </>
    )
}

export default Equipe