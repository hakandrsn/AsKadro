import React from "react";
import "../styles/NavStyle.css"

const NavBar = () => {
    return (
        <header>
            <div className="left">
                <a>AS KADRO</a>
            </div>
            <div className="center">
                <input className="intt" type="text" title="Search" placeholder="Ara" />
                <button className="butt" placeholder="Ara">Ara</button>
            </div>
            <div className="right">
                <a>
                    Ayarlar
                </a>
            </div>

        </header>

    )
}
export default NavBar