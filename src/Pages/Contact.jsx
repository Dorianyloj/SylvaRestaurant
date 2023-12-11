import React, {useEffect, useState} from 'react'
import NavBar from '../Components/NavBar.jsx'
import Footer from "../Components/Footer.jsx";
import ContactPage from "../Components/ContactPage.jsx";

function Contact() {

    return (
        <>
            <div className="Contact">
                <NavBar />
                <ContactPage/>
                <Footer/>
            </div>
        </>
    )
}

export default Contact