import { useState } from "react";
import AddProductForm from "./AddProductForm.jsx";
import ProductsList from "./ProductsList.jsx";
export default function StoreFront() {
    const [products, setProducts] = useState([]);
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [validation, setValidation] = useState("");

    function handleFormSubmit(event) {
        event.preventDefault();
        fetch("https://api.learnjavascript.online/demo/react/admin/products", {
            method: "POST",
            headers: {
                "Content-Type": "applications/json",
            },
            body: JSON.stringify({ name: name, description: description })
        })
            .then(response => response.json())
            .then(data => console.log(data));
        if (!name) {
            setValidation("Please enter a name");
            return;
        }
        if (!description) {
            setValidation("Please enter a description");
            return;
        }
        setProducts([...products, {
            id: products.length + 1,
            name: name,
            description, description
        }]);
        setName("");
        setDescription("");
        setValidation("");
    }

    function handleDeleteClick(id) {
        setProducts(products.filter(product => product.id !== id));
    }

    return <>
        <AddProductForm name={name} description={description} onFormSubmit={handleFormSubmit} validation={validation} setName={setName} setDescription={setDescription} />
        <div>{products.length === 0 && <p>Add your first product</p>}</div>
        <ProductsList products={products} onDeleteClick={handleDeleteClick} />
    </>;
}