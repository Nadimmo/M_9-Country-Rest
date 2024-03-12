/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
import { useEffect } from "react"
import { useState } from "react"
import Country from "./Country"
import   './Country.css';
export default function Countries(){
    const [countrys, setCountry] = useState([])
    const [visiteCountry, setVisiteCountry] = useState([])
    const [visitFlags, setVisitFlag] = useState([])

    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountry(data))
    },[])

    const handlerVisiteCountry = country =>{
        const newVisite = [...visiteCountry,{country}]
        setVisiteCountry(newVisite)
    }

    const handlerVisitFlag = flag =>{
        const newVisiteFlag = [...visitFlags, flag]
        setVisitFlag(newVisiteFlag)
    }
    return (
        <div>
            <h3 style={{marginLeft:"10px"}}>Visited Country </h3>
            <ul>
                {
                    visiteCountry.map(country => <li style={{listStyle:"none"}}>{country.country.name.common}</li>)
                }
            </ul>
            <div className="imgContainer">
                {
                    visitFlags.map(flag => <img src={flag}></img>)
                }
            </div>

            <div className="container">
                <div className="item">
                    {
                        countrys.map(country => <Country handlerVisitFlag={handlerVisitFlag} handlerVisiteCountry={handlerVisiteCountry} country = {country} ></Country> )
                    }
                </div>
            </div>
        </div>
       
    )
}