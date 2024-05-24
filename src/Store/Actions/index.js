import axios from 'axios';

import { LIST_DOGS, LIST_TEMPERAMENTS, FIRST_PAGE, 
         PREV_NEXT_PAGE, LAST_PAGE, 
         CREATE_SUCCESS, ERROR, GET_BY_NAME,
         FILTER_ORIGIN_TEMPERAMENT, 
         ORDER_BY_NAME, ORDER_BY_WEIGHT, GET_DOG_DETAIL } from "../Action-Types/actionTypes"


export function createDog(dog){
    return async function(dispatch){
        let response = null;
        try{
            response = (await axios.post("http://localhost:3001/dogs/createDog", dog)).data;
            
            dispatch({
                type: CREATE_SUCCESS,
                payload: response
            });
        }catch(error){
            console.log("[ src/Store/Actions/index.js/createDog ] Excepcion: error.message: " + error.message);
            if(error.message === "Request failed with status code 422"){
                dispatch({
                    type: ERROR,
                    payload: {message: "Falta enviar datos obligatorios"}
                });
            }else{
                dispatch({
                    type: ERROR,
                    payload: {message: "Ocurrio un error...intentelo mas tarde"}
                });
            }
        }
    }
}

export function listDogs(){
    console.log("[ src/Store/Actions/index.js/listDogs ] INICIO");
    return async function(dispatch){
        try{
            const response = (await axios.get("http://localhost:3001/dogs/listDogs")).data;

            dispatch({
                type: LIST_DOGS,
                payload: response
            });

        }catch(error){
            dispatch({
                type: ERROR,
                payload: error
            });
        }
    };
}

export function listTemperaments(){
    console.log("[ src/Store/Actions/index.js/listTemperaments ] INICIO");
    return async function(dispatch){
        try{
            const response = (await axios.get("http://localhost:3001/dogs/listTemperaments")).data;

            dispatch({
                type: LIST_TEMPERAMENTS,
                payload: response
            });
            
        }catch(error){
            dispatch({
                type: ERROR,
                payload: error
            });
        }
    };
}

export function getByName(name) {
    console.log("[ src/Store/Actions/index.js/getByName(name) ] INICIO ");
    return async function (dispatch) {//Dispatch que podemos usar gracias a la asincronia provista por el middleware thunk
        try {
            var response = (await axios.get(`http://localhost:3001/dogs/getByName?name=${name}`)).data;
            console.log("[ src/Store/Actions/index.js/getByName(name) ] Resultado cantidad: " + response.length); 
            return dispatch ({
                type: GET_BY_NAME,
                payload: response
            })
        } catch (error) {
            console.log("[ src/Store/Actions/index.js/getByName(name) ] Excepcion: error.message: " + error.message);
            if(error.message === "Request failed with status code 422"){
                dispatch({
                    type: GET_BY_NAME,
                    payload: []
                });
            }else{
                dispatch({
                    type: ERROR,
                    payload: {message: "Ocurrio un error...intentelo mas tarde"}
                });
            }
        }
    }
};

export function filterByOriginTemperament(filters){
    console.log("Origen: " + filters.origin);
    console.log("Temperamento: " + filters.temp);
    return {
        type: FILTER_ORIGIN_TEMPERAMENT,
        payload: filters
    }
}

export const orderByName = (order) => {
    console.log("orderByName: " + order);
    return {
      type: ORDER_BY_NAME,
      payload: order
    }
}
  
export const orderByWeight = (order) => {
    return {
      type: ORDER_BY_WEIGHT,
      payload: order
    }
}


export function getDogDetail(id) {
    return async function (dispatch) {
        try {
            console.log("getDogDetail(id): INICIO");
            var response = (await axios.get("http://localhost:3001/dogs/getDetail?idRaza="+id)).data;
            console.log("getDogDetail(id): Se recibio respuesta del backend");
            console.log("getDogDetail(id): response: " + response);

            dispatch({
                type: GET_DOG_DETAIL,
                payload: response
            });

        } catch (error) {
            console.log("[ src/Store/Actions/index.js/getDogDetail(id) ] Excepcion: error.message: " + error.message);
            if(error.message === "Request failed with status code 422"){
                dispatch({
                    type: GET_DOG_DETAIL,
                    payload: null
                });
            }else{
                dispatch({
                    type: ERROR,
                    payload: {message: "Ocurrio un error...intentelo mas tarde"}
                });
            }
        }
    }
};
/*
export function getDogDetail(id) {
    return async function (dispatch) {
        try {
            console.log("getDogDetail(id): INICIO");
            var response = (await axios.get("http://localhost:3001/dogs/"+id)).data;
            console.log("getDogDetail(id): Se recibio respuesta del backend");
            console.log("getDogDetail(id): response: " + response);

            dispatch({
                type: GET_DOG_DETAIL,
                payload: response
            });

        } catch (error) {
            console.log("[ src/Store/Actions/index.js/getDogDetail(id) ] Excepcion: error.message: " + error.message);
            if(error.message === "Request failed with status code 422"){
                dispatch({
                    type: GET_DOG_DETAIL,
                    payload: null
                });
            }else{
                dispatch({
                    type: ERROR,
                    payload: {message: "Ocurrio un error...intentelo mas tarde"}
                });
            }
        }
    }
};*/

export function firstPage(){
    return {
        type: FIRST_PAGE,
    }
}

export function prevNextPage(valor){
    return {
        type: PREV_NEXT_PAGE,
        payload: valor,
    }
}


export function lastPage(){
    return {
        type: LAST_PAGE,
    }
}