import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getByName } from "../../../Store/Actions/index";
import "./search.css";


export default function Search() {
    const dispatch = useDispatch();

    //const error = useSelector(state => state.error);

    const [name, setName] = useState("");

    const handleInput = (e) => {
        e.preventDefault()
        setName(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(getByName(name));
    }

    return(
        <div className="searchbar_container">
            <input className="searchbar" type="text" onChange={handleInput} placeholder="Buscar..."/>
            <button className="searchbar_button" type="button" onClick={handleSubmit}>
                Buscar
            </button>
        </div>
    )
}