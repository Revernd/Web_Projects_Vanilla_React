import {useState} from "react";

export default function Product(props) {
    const [count, setCount] = useState(0);
    const {details} = props;
    const handleIncrementCount = ()=>{
        setCount(count +1);
    };
    const handleDecrementCount = ()=>{
            setCount(count - 1)
    };
    return <div className="product">
        <img src={details.image} width="50" alt="" />
        <div className="product-info">
            <h2>{details.name}</h2>
            <p>{details.description}</p>
        </div>
        <div className="product-buttons">
            <button className="product-sub" disabled={count ===0} onClick={handleDecrementCount}>-</button>
            <h3 className="product-count">{count}</h3>
            <button className="product-add" onClick={handleIncrementCount}>+</button>
        </div>
    </div>
}