import './App.css';
import React from "react";
import StoreFront from "./StoreFront";
import {BrowserRouter, 
        Routes, 
        Route } from "react-router-dom";
import ProductDetails from "./ProductDetails";

export default function App() {
    return (<BrowserRouter>
        <Routes>
            <Route path="/" element={<StoreFront />}/>
            <Route path="/products/:id" element={<ProductDetails />}/>
        </Routes>
    </BrowserRouter>
    );
}
 
