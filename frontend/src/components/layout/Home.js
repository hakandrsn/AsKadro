import React, { useContext } from "react";
import "../styles/Home.css"
import { apiContext } from "../../context/ApiContext";
const Home = () => {
    const value = useContext(apiContext)
    return (
        <div className="body">
            <div> {value.user} </div>
        </div>
    )
}

export default Home;
