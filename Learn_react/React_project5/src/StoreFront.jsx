import { useState, useEffect } from "react";
import Product from "./Product";
import Loader from "./Loader";
import useFetch from "./useFetch";

export default function StoreFront() {
    const [products, setProducts] = useState([]);
    const { get, loading } = useFetch("https://react-tutorial-demo.firebaseio.com/");
    useEffect(() => {
        get("products.json")
            .then(data => setProducts(data))
            .catch(e => console.error(e));
    }
        , [])

    return <div className="store-front">
        {loading && <Loader />}
        {products.map(product => <Product key={product.id} details={product} />)}
    </div>;
}