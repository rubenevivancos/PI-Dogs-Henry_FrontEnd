import React, { useEffect }  from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';

import { getDogDetail } from "../../Store/Actions/index";
import './dogDetail.css';


export default function DogDetail(){

    const dispatch = useDispatch();
    let { id } = useParams();

    useEffect(() => {
        dispatch(getDogDetail(id));
    }, [dispatch, id]);

    const dog = useSelector((state) => state.dogDetail)

    const error = useSelector((state) => state.error);

    if(dog !== null){
        return(
            <div>
                <Link to="/dogs" className="container_cards">
                    <div className="enter">
                        REGRESAR
                    </div>
                </Link>
                <div className="container_cards">
    
                    <div className="left">
                        <div className="profile">
                            <div className="div_dog_profile">
                                <img className="image_dog_profile" src={dog.image} alt="dog"/>
                            </div>
                            <div className="div_dog_name">
                                <h2 className="name_dog">{dog.name}</h2>
                            </div>
                        </div>
    
                        <div className="table_container">
                            <table border="1">
                                <thead>
                                    <tr>
                                        <th className="encabezado_tabla">CARACTERISTICAS</th>
                                        <th className="encabezado_tabla">MIN</th>
                                        <th className="encabezado_tabla">MAX</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="table_caracteristicas">ALTURA</td>
                                        <td className="table_datos">{dog.height_min}</td>
                                        <td className="table_datos">{dog.height_max} Cm</td>
                                    </tr>
                                    <tr>
                                        <td className="table_caracteristicas">PESO</td>
                                        <td className="table_datos">{dog.weight_min}</td>
                                        <td className="table_datos">{dog.weight_max} Kg</td>
                                    </tr>
                                    <tr>
                                        <td className="table_caracteristicas">AÑOS DE VIDA</td>
                                        <td className="table_datos">{dog.life_span_min}</td>
                                        <td className="table_datos">{dog.life_span_max} AÑOS</td>
                                    </tr>
                                    <tr>
                                        <td className="table_caracteristicas table_temp">TEMPERAMENTO</td>
                                        <td colSpan="2" className="table_datos temp">{dog.temperament}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    if(Object.keys(error).length){
        return(
            <div>
                <Link to="/dogs" className="container_cards">
                    <div className="enter">
                        REGRESAR
                    </div>
                </Link>
                <div className="container_cards">
                    <h1>{error.message}</h1>
                </div>
            </div>
        )
    }else{
        return(
            <div className="container_cards">
                <img className="image" src="https://www.gifss.com/animales/perros/images/perro-animado-3.gif" alt="" />
            </div>
        )
    }
}