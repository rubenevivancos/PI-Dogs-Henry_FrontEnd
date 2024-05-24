//import React, { useState } from "react";
import React from "react";
import { useDispatch } from "react-redux";

import { orderByName, orderByWeight } from "../../../Store/Actions/index";
import "./order.css";


export default function Order() {
    const dispatch = useDispatch();

    const selectedOrder = (e) => {
        e.preventDefault()
        const order = e.target.value;
        if(order === "name_asc" || order === "name_des") {
          console.log("dispatch(orderByName(order))");
          dispatch(orderByName(order))
        } 
        if(order === "weight_asc" || order === "weight_des") {
          console.log("dispatch(orderByWeight(order))");
          dispatch(orderByWeight(order))
        }
    }

    return(
        <div>
            <div>Ordenar por:</div>
            <select name="orderBy" onChange={selectedOrder}>
              <option value="name_asc">Nombre (asc)</option>
              <option value="name_des">Nombre (des)</option>
              <option value="weight_asc">Peso (asc)</option>
              <option value="weight_des">Peso (des)</option>
            </select>
        </div>
    )
}