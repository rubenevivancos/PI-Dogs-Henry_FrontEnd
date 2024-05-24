import { useSelector, useDispatch } from "react-redux";

import { firstPage, prevNextPage, lastPage } from "../../Store/Actions/index.js";
import "./pagination.css";


export default function Pagination() {
   
    const currentPage = useSelector((state) => state.currentPage);
    let dispatch = useDispatch();

    function first(e){
        dispatch(firstPage());
    }

    function prev(e){
        dispatch(prevNextPage(-1));
    }

    function next(e){
        dispatch(prevNextPage(1));
    }   

    function last(e){
        dispatch(lastPage());
    }


    return (
        <div className="container_pages">
            <button className="button_page" onClick={first}>
                {"First"}
            </button>
            <button className="button_page" onClick={prev}>
                {"Prev"}
            </button>
            <h3 className="number_page">
                {currentPage}
            </h3>
            <button className="button_page" onClick={next}>
                {"Next"}
            </button>
            <button className="button_page" onClick={last}>
                {"Last"}
            </button>
        </div>
    );    
}