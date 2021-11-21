import React, { useState, useEffect, createContext } from "react";
import axios from "axios"

export const apiContext = createContext()


export const ApiProvider = ({ children }) => {
    const [user, setUser] = useState("naber")
    const [searchBar, setSearchBar] = useState("")
    
    const getUser = () => {
        axios.get("").then(response => {
            setUser(response)
            if (response) {
                console.log(response)
            }
        })
    }
    useEffect(() => {
        setUser("hakan")
    }, [user])
    return (
        <apiContext.Provider
            value={{
                user,
                searchBar,
            }}>
            {children}
        </apiContext.Provider>
    )
}