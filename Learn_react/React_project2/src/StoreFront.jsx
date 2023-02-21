import { useState } from "react";
import AddProductForm from "./AddProductForm.jsx";
import ProductsList from "./ProductsList.jsx";
import useFetch from "./useFetch";

export default function StoreFront() {
    const [products, setProducts] = useState([]);
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [validation, setValidation] = useState("");
    const { post } = useFetch("https://api.learnjavascript.online/demo/react/admin/");

    function handleFormSubmit(event) {
        event.preventDefault();
        if (!name) {
            setValidation("Please enter a name");
            return;
        }
        if (!description) {
            setValidation("Please enter a description");
            return;
        }
        post("products", { name: name, description: description })
            .then(data => console.log(data))
            .catch(e => console.error(e));
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