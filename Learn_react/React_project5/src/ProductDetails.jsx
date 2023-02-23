import { useState, useEffect } from "react";
import { useParams, Link, Outlet } from "react-router-dom";
import useFetch from "./useFetch";
export default function ProductDetails() {
    const [product, setProduct] = useState({});
    const params = useParams();
    console.log(params);
    const { get } = useFetch("https://react-tutorial-demo.firebaseio.com/");
    useEffect(() => {
        get(`productdetails/id${params.id}.json`)
            .then(data => {
                console.log(data);
                setProduct(data);
            })
    }, [])
    return <div>
        <Link to="/">Back home</Link>
        {product && <div>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <h3>${product.price}</h3>
            <img src={product.image} width="100" />
            <p>View <Link to={"/products/" + params.id + "/delivery"}>delivery notes</Link></p>
        </div>}
        <Outlet />
    </div>
}
