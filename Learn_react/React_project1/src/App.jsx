import { useState } from 'react'
import './App.css';
import StoreFront from "./StoreFront.jsx";

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  if (loggedIn)
    return (
      <>
        <StoreFront />
        <button className="btn btn-outline" onClick={() => setLoggedIn(false)}>Logout</button>
      </>);
  return (<>
    <h2>Please login</h2>
    <button className="btn btn-primary" onClick={() => setLoggedIn(true)}>Login</button>
  </>);
}


