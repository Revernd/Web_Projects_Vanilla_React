import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StoreFront from "./StoreFront";
import ProductDetails from "./ProductDetails";
import Nav from "./Nav";
import About from "./About";
import Home from "./Home";
import NotFound from "./NotFound";
import ProductDelivery from "./ProductDelivery";

export default function App() {
    return (
        <BrowserRouter>
            <Nav />
            <Routes>
                <Route path="/" element={<Home />}>
                </Route>
                <Route path="/about" element={<About />}>
                </Route>
                <Route path="/products" element={<StoreFront />}>
                </Route>
                <Route path="/products/:id" element={<ProductDetails />}>
                    <Route path="/products/:id/delivery" element={<ProductDelivery />} />
                </Route>
                <Route path="*" element={<NotFound />}></Route>
            </Routes>
        </BrowserRouter>
    );
}


