//import React, { useState } from "react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { filterByOriginTemperament } from "../../../Store/Actions/index";
import "./filter.css";


export default function Filter() {
    const dispatch = useDispatch();

    //const error = useSelector(state => state.error);
    const listTemperaments = useSelector(state => state.listTemperaments);
    const filters = {
        origin: "0",
        temp: "0",
    };

    const selectedOrigin = (e) => {
        e.preventDefault()
        filters.origin = e.target.value;
        dispatch(filterByOriginTemperament(filters));
    }

    const selectedTemperament = (e) => {
        e.preventDefault()
        filters.temp = e.target.value;
        dispatch(filterByOriginTemperament(filters));
    }

    return(
        <div>
        FILTROS:
        <div className="header">
            <div className="header">
                Creado en:&nbsp;&nbsp;
                <select name="origin" onChange={selectedOrigin} >
                    <option disabled defaultValue>--Seleccione--</option>
                    <option value="0">Todos</option>
                    <option value="false">API</option>
                    <option value="true">BD</option>
                </select>
                <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
                <div>Temperamentos:&nbsp;&nbsp;</div>
                <select name="temperaments" onChange={selectedTemperament} >
                    <option disabled defaultValue>--Seleccione--</option>
                    <option value="0">Todos</option>
                    {listTemperaments.map(temperament => {
                        return (
                            <option value={temperament.name} key={temperament.id} >{temperament.name}</option>
                        )
                    })}
                </select>
            </div>
        </div>
        </div>
    )
}