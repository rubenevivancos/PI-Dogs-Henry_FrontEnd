import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { listDogs, listTemperaments } from "../../Store/Actions/index";
import "./home.css";
import Dogs from '../Dogs/dogs.js';
import Header from '../Header/header.js';


export default function Home() {

    let dispatch = useDispatch();

    useEffect(() => {
        //Se obtiene el listado de perros
        dispatch(listDogs());
        
        //Se obtiene el listado de temperamentos
        dispatch(listTemperaments());
    }, [dispatch]);
    

    return (
        <div >
            <div>
                <Header />
            </div>                
            <div className="list_dogs">
                <Dogs />
            </div>
        </div>
    );
}