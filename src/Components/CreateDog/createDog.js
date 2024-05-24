import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import './createDog.css';
import { createDog } from '../../Store/Actions/index.js';


export default function CreateDog(){
    const dispatch = useDispatch();
    const success = useSelector(state => state.success);
    const error = useSelector(state => state.error);

    const [input, setInput] = useState({
        name: "",
        image: "",
        minimunHeight: 0,
        maximumHeight: 0,
        minimunWeight: 0,
        maximumWeight: 0,
        minimumYearsOfLife: 0,
        maximumYearsOfLife: 0,
        temperaments: []
    });

    const [errors, setErrors] = useState({});


    const handleChange = (event) => {
        setInput({
            ...input,
            [event.target.name]: event.target.value
        });
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        if(!Object.keys(errors).length){

            dispatch(createDog(input));

            setInput({
                name: "",
                image: "",
                minimunHeight: 0,
                maximumHeight: 0,
                minimunWeight: 0,
                maximumWeight: 0,
                minimumYearsOfLife: 0,
                maximumYearsOfLife: 0,
                temperaments: []
            })
        }
    }

    const validateInput = (input) => {
        const errors = {};

        //Nombre obligatorio
        if(!input.name.length){
            errors.name = "El nombre es requerido";
        }else if(!/[A-Z]+$/i.test(input.name)) {
            errors.name = "Solo puede contener letras";
        }else if(parseInt(input.name.length) >= 25) {
            errors.name= "Debe contener menos de 25 caracteres";
        }

        //Imagen
        //if(!input.image.length) errors.image = "La imagen es requerida";

        //Altura Minima obligatoria
        if(!input.minimunHeight.length || input.minimunHeight === 0){
            errors.minimunHeight = "La altura minima es requerida";
        }else if(isNaN(input.minimunHeight)) {
            errors.minimunHeight = "Solo puede contener numeros";
        }else if(parseInt(input.minimunHeight) >= parseInt(input.maximumHeight)) {
            errors.minimunHeight = "Debe ser menor al max";
        }

        //Altura Maxima obligatoria
        if(!input.maximumHeight.length || input.maximumHeight === 0){
            errors.maximumHeight = "La altura maxima es requerida";
        }else if(isNaN(input.maximumHeight)) {
            errors.maximumHeight = "Solo puede contener numeros";
        }else if(parseInt(input.maximumHeight) > 85) {
            errors.maximumHeight = "Debe ser menor a 85 cm";
        }

        //Peso Minimo obligatorio
        if(!input.minimunWeight.length || input.minimunWeight === 0){
            errors.minimunWeight = "El peso minimo es requerido";
        }else if(isNaN(input.minimunWeight)) {
            errors.minimunWeight = "Solo puede contener numeros";
        }else if(parseInt(input.minimunWeight) >= parseInt(input.maximumWeight)) {
            errors.minimunWeight= "Debe ser menor al max";
        }

        //Peso Maximo obligatorio
        if(!input.maximumWeight.length || input.maximumWeight === 0){
            errors.maximumWeight = "El peso maximo es requerido";
        }else if(isNaN(input.maximumWeight)) {
            errors.maximumWeight = "Solo puede contener numeros";
        }else if(parseInt(input.maximumWeight) > 90) {
            errors.maximumWeight= "Debe ser menor a 90 kg";
        }

        //Años de vida minimo
        if(isNaN(input.minimumYearsOfLife)){
            errors.minimumYearsOfLife = "Solo puede contener numeros";
        }else if(parseInt(input.minimumYearsOfLife) > 0){
            if(parseInt(input.minimumYearsOfLife) >= parseInt(input.maximumYearsOfLife)){
                errors.minimumYearsOfLife = "Debe ser menor al max";
            }            
        }

        //Años de vida maximo
        if(isNaN(input.maximumYearsOfLife)){
            errors.maximumYearsOfLife = "Solo puede contener numeros";
        }else if(parseInt(input.maximumYearsOfLife) > 20){
            errors.maximumYearsOfLife = "Debe ser menor a 20 Años";
        }

        //Temperamentos
        if(input.temperaments.length > 12){
            errors.temperaments = "Maximo 12 temperamentos";
        }

        return errors;
    }


    const [listTemperaments, setListTemperaments] = useState(useSelector(state => state.listTemperaments));

    const selectedTemperament = (e) => {
        let temp = listTemperaments.find(t => t.id === parseInt(e.target.value));
        setListTemperaments(listTemperaments.filter(t => t.id !== temp.id));
        input.temperaments.push(temp);
    }

    const deleteTemperament = (e) => {
        let temp = input.temperaments.find(t => t.id === parseInt(e.target.value));
        let newTemp = input.temperaments.filter(t => t.id !== temp.id);
        setInput({
            ...input,
            temperaments: newTemp
        });
        listTemperaments.push(temp);
        listTemperaments.sort((a, b) => a.name.localeCompare(b.name));
    }

    useEffect(() => {
        setErrors(validateInput(input))
    },[input]);

    return(
        <div>
            <div>
                <Link to="/dogs" className="container_cards">
                    <div className="enter">
                        REGRESAR
                    </div>
                </Link>
            </div>

            <div className="container_cards">
                <p className="word">{success.msg}</p>
            </div>
            <div className="container_cards">
                <p className="error">{error.message}</p>
            </div>

        <div className="container_cards">
            <form onSubmit={handleSubmit}>
                <table width="100%" className="table">
                    <tbody>
                        <tr>
                            <td colSpan="4" align="center" className="tablePadding"><label className="word">REGISTRAR UN NUEVO PERRO</label></td>
                        </tr>
                        <tr>
                            <td colSpan="4">&nbsp;</td>
                        </tr>
                        <tr>
                            <td colSpan="4">&nbsp;</td>
                        </tr>
                        <tr>
                            <td className="tablePadding"><label className="word">Nombre:</label></td>
                            <td colSpan="3"><input className="text" type="text" name="name" value={input.name} onChange={handleChange}/></td>
                        </tr>
                        <tr>
                            <td colSpan="4" align="center"><p className="error">{errors.name && errors.name}</p></td>
                        </tr>
                        <tr>
                            <td className="tablePadding"><label className="word">Imagen:</label></td>
                            <td colSpan="3"><input className="text" type="text" name="image" value={input.image} onChange={handleChange}/></td>
                        </tr>
                        <tr>
                            <td colSpan="4" align="center"><p className="error">{errors.image && errors.image}</p></td>
                        </tr>
                        <tr>
                            <td className="tablePadding"><label className="word">Altura mín. (cm):</label></td>
                            <td>
                                <input className="text2" type="number" name="minimunHeight" value={input.minimunHeight} min="1" onChange={handleChange} />
                            </td>
                            <td><label className="word">Altura máx. (cm):</label></td>
                            <td>
                                <input className="text2" type="number" name="maximumHeight" value={input.maximumHeight} max="85" onChange={handleChange} />
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="2" align="center"><p className="error">{errors.minimunHeight && errors.minimunHeight}</p></td>
                            <td colSpan="2" align="center"><p className="error">{errors.maximumHeight && errors.maximumHeight}</p></td>
                        </tr>
                        <tr>
                            <td className="tablePadding"><label className="word">Peso mín. (kg):</label></td>
                            <td>
                                <input className="text2" type="number" name="minimunWeight" value={input.minimunWeight} min="1" onChange={handleChange} />
                            </td>
                            <td ><label className="word">Peso máx. (kg):</label></td>
                            <td>
                                <input className="text2" type="number" name="maximumWeight" value={input.maximumWeight} max="90" onChange={handleChange} />
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="2" align="center"><p className="error">{errors.minimunWeight && errors.minimunWeight}</p></td>
                            <td colSpan="2" align="center"><p className="error">{errors.maximumWeight && errors.maximumWeight}</p></td>
                        </tr>
                        <tr>
                            <td className="tablePadding"><label className="word">Años de vida mín.:</label></td>
                            <td>
                                <input className="text2" type="number" name="minimumYearsOfLife" value={input.minimumYearsOfLife} onChange={handleChange} />
                            </td>
                            <td><label className="word">Años de vida máx.:</label></td>
                            <td>
                                <input className="text2" type="number" name="maximumYearsOfLife" value={input.maximumYearsOfLife} onChange={handleChange} />
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="2" align="center"><p className="error">{errors.minimumYearsOfLife && errors.minimumYearsOfLife}</p></td>
                            <td colSpan="2" align="center"><p className="error">{errors.maximumYearsOfLife && errors.maximumYearsOfLife}</p></td>
                        </tr>
                        <tr>
                            <td className="tablePadding"><label className="word">Temperamentos:</label></td>
                            <td colSpan="3">
                                <select name="temperaments" onChange={selectedTemperament}>
                                    <option value="selec" key="S1">--Seleccione--</option>
                                    {listTemperaments.map(temperament => {
                                        return (
                                            <option value={temperament.id} key={temperament.id} >{temperament.name}</option>
                                        )
                                    })}
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="4">
                                <ul className='ul_temp'>
                                    {input.temperaments.map(temp => {
                                        return(
                                            <li className='li_temp' key={temp.id}>
                                                <label className="word">{temp.name}</label>
                                                <button className='delete_temp' type='button' value={temp.id} onClick={deleteTemperament}>x</button>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="4" align="center"><p className="error">{errors.temperaments && errors.temperaments}</p></td>
                        </tr>
                        <tr>
                            <td colSpan="4"><button className="button" type="submit">Crear</button></td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </div>
        </div>
    )
}