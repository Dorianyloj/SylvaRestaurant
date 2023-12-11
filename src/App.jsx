
import Home from "../src/Pages/Home"
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cartes from "./Pages/Cartes.jsx";
import Producteurs from "./Pages/Producteurs.jsx";
import Equipe from "./Pages/Equipe.jsx";
import Contact from "./Pages/Contact.jsx";
function App() {

    return (
        <>
            <div className="App">
                <Router>
                    <Routes>
                        <Route path='/' element={<Home />}></Route>
                        <Route path='/cartes' element={<Cartes/>}></Route>
                        <Route path='/equipe' element={<Equipe/>}></Route>
                        <Route path='/producteurs' element={<Producteurs/>}></Route>
                        <Route path='/contact' element={<Contact/>}></Route>
                    </Routes>
                </Router>
            </div>
        </>
    )
}

export default App
