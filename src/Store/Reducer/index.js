import { LIST_DOGS, LIST_TEMPERAMENTS, FIRST_PAGE, 
    PREV_NEXT_PAGE, LAST_PAGE, 
    ERROR, ITEMS_BY_PAGE,
    CREATE_SUCCESS, GET_BY_NAME, FILTER_ORIGIN_TEMPERAMENT,
    ORDER_BY_NAME, ORDER_BY_WEIGHT, GET_DOG_DETAIL } from "../Action-Types/actionTypes"


const initialState = {
    listDogsCopy: [],
    listDogs: [],
    listTemperaments: [],
    dogDetail: null,
    currentPage: 1,
    totalDogs: 0,
    itemsByPage: ITEMS_BY_PAGE,
    error: {},
    success: {}   
};


function rootReducer(state = initialState, action) {
    switch (action.type) {
        case LIST_DOGS:
            return {
                ...state,
                listDogs: action.payload,
                totalDogs: action.payload.length,
                listDogsCopy: action.payload,
                success: {},
                error: {},
                currentPage: 1,
                dogDetail: null
            }

        case GET_BY_NAME:
            if(action.payload.length){
                return {
                    ...state,
                    listDogs: action.payload,
                    totalDogs: action.payload.length,
                    currentPage: 1,
                    error: {},
                }
            }else{
                return {
                    ...state,
                    listDogs: action.payload,
                    error: {message: "NO HAY RESULTADOS"}
                }
            }

        case GET_DOG_DETAIL:
            if(action.payload){
                return {
                    ...state,
                    dogDetail: action.payload
                }
            }else{
                return {
                    ...state,
                    dogDetail: null,
                    error: {message: "NO HAY RESULTADOS"}
                }
            }

        case LIST_TEMPERAMENTS:
            return {
                ...state,
                listTemperaments: action.payload,
            }

        case FIRST_PAGE:
            return {
                ...state,
                currentPage: 1,
            }

        case PREV_NEXT_PAGE:
            let valor = action.payload;

            if((state.currentPage+valor) < 1){ 
                valor = 0;
            };
            if((state.currentPage+valor) > Math.ceil(state.totalDogs/state.itemsByPage)){
                valor = 0;
            };

            return {
                ...state,
                currentPage: state.currentPage + valor,
            }

        case LAST_PAGE:
            return {
                ...state,
                currentPage: (state.totalDogs === 0) ? 1 : 
                                    Math.ceil(state.totalDogs/state.itemsByPage), 
            }

        case CREATE_SUCCESS:
            return {
                ...state,
                success: action.payload
            }

        case FILTER_ORIGIN_TEMPERAMENT:
            let listDogs = state.listDogsCopy;
            const filters = action.payload;
            let listDogsFilter = filters.origin === "0" ? listDogs : listDogs.filter(e => e.creadoEnDB.toString() === filters.origin);
            listDogsFilter = filters.temp === "0" ? listDogsFilter : listDogsFilter.filter(e => e.temperament.includes(filters.temp))

            if(listDogsFilter.length){
                return {
                    ...state,
                    listDogs: listDogsFilter,
                    currentPage: 1,
                    totalDogs: listDogsFilter.length,
                    error: {}
                }
            }else{
                return {
                    ...state,
                    listDogs: listDogsFilter,
                    error: {message: "NO HAY RESULTADOS"}
                }
            }

        case ORDER_BY_NAME:
            let errMsg = {message: "NO HAY RESULTADOS"};

            if(action.payload === "name_asc"){
                state.listDogsCopy.sort((a, b) => a.name.localeCompare(b.name));
                if(state.listDogs.length){
                    state.listDogs.sort((a, b) => a.name.localeCompare(b.name));
                    errMsg = {};
                }
            }else{
                state.listDogsCopy.sort((a, b) => b.name.localeCompare(a.name));
                if(state.listDogs.length){
                    state.listDogs.sort((a, b) => b.name.localeCompare(a.name));
                    errMsg = {};
                }
            }

            return {
                ...state,
                listDogs: state.listDogs,
                listDogsCopy: state.listDogsCopy,
                currentPage: 1,
                error: errMsg
            }

        case ORDER_BY_WEIGHT:
            let err = {message: "NO HAY RESULTADOS"};

            if(action.payload === "weight_asc"){
                state.listDogsCopy.sort((a, b) => Number(a.weight_min) - Number(b.weight_min));
                if(state.listDogs.length){
                    state.listDogs.sort((a, b) => Number(a.weight_min) - Number(b.weight_min));
                    err = {};
                }
            }else{
                state.listDogsCopy.sort((a, b) => Number(b.weight_min) - Number(a.weight_min));
                if(state.listDogs.length){
                    state.listDogs.sort((a, b) => Number(b.weight_min) - Number(a.weight_min));
                    err = {};
                }
            }

            return {
                ...state,
                listDogs: state.listDogs,
                listDogsCopy: state.listDogsCopy,
                currentPage: 1,
                error: err
            }

        case ERROR:
            return {
                ...state,
                error: action.payload
            }
    
        default :  
            return {
                ...state
            }   
    };
}

export default rootReducer;