import { Link } from "react-router-dom";
//import { useSelector } from 'react-redux';

import "./header.css";
import Search from './Search/search.js';
import Filter from "./Filter/filter";
import Order from "./Order/order";


export default function Header(){

    //Se obtiene el listado de temperamentos del store
    //const temperaments = useSelector((state) => state.listTemperaments);

    return (
        <div className="header">
            <div className="header_right">
                <div className="logo">
                    DOGS
                </div>
            </div>

            <div className="header_container_left">
                <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
                <div className="header_left">
                    <Search/>
                    <div className="container_filters">
                        <Filter/>
                        <div>&nbsp;&nbsp;</div>
                        <Order/>
                    </div>
                </div>
            </div>
            
            <div className="header_right">
                <Link to="/createDog">
                    <div className="logo2">
                        CREAR UN PERRO
                    </div>
                </Link>
            </div>
        </div>
    );
}