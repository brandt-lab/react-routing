import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Component/Home';
import About from './Component/About';
import Contact from './Component/Contact';
import Services from './Component/Services';


const Router = () => {
    return (

        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/about" element={<About/>} />
                <Route path="/contact" element={<Contact/>} />
                <Route path="/services" element={<Services/>} />
            </Routes>
        </BrowserRouter>

    );
}

export default Router;
