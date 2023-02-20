import { useEffect, useState } from "react";
import Product from "./Product.jsx";
import Loader from "./Loader";

export default function StoreFront() {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch("https://react-tutorial-demo.firebaseio.com/products.json")
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setProducts(data);
            })
            .catch(error => console.log(error))
            .finally(() => {
                setIsLoading(false);
                console.log("loading done")
            })
    }, []);

    return <div className="store-front">
        {isLoading && <Loader />}
        {products.map(product => <Product key={product.id} details={product} />)}
    </div>;
}
