/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react"

export default function Country({country, handlerVisiteCountry,handlerVisitFlag}){
    // console.log(country)
    const [visite, setVisit] = useState(false)

    const handlerVisit = ()=>{
        setVisit(true)
    }

    // console.log(handlerVisiteCountry)
    return (
        <div>
            <div className= {`country ${visite? "visited":"no-visited"}`}>
                <h3>Name : {country.name.common} </h3>
                <img src={country.flags.png} alt="" className='img' />
                <div className="countryItem">
                    <div>
                         <p>Official Name : {country.name.official} </p>
                        <p>Capital City : {country.capital} </p>
                        <button onClick={ ()=>handlerVisiteCountry (country)}>Mark as Read</button> <br /><br />
                        <button onClick={()=> handlerVisitFlag(country.flags.png)}>Add Flag</button>
                        <button onClick={handlerVisit} style={{
                            marginLeft:"10px"
                        }}> {visite ? "Visited":"Going on"} </button> <br />
                        {visite && "I wil visited this country"}
                    </div>

                    <div className="text">
                         <p>Population : {country.population} People </p>
                        <p>Continents : {country.continents} </p>
                        <p>Start of Week : {country.startOfWeek} </p>
                        <p>Area : {country.area} km <sup>2</sup> </p>                         
                    </div>
                </div>
                <p> <h3>OpenStreetMap-</h3><b>{country.maps.openStreetMaps}</b> </p> 
            </div>
        </div>
       
    )
}