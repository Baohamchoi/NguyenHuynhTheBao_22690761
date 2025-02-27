import React, {useState, useEffect, useRef, useMemo, useReducer} from "react";

const toDoReducer = (state, action) =>{
    switch (action.type) {
        case 'ADD': 
            return [...state, action.payload];
        case 'TOGGLE':
            return state.map(todo => {
                todo.id === action.payload ? {...todo, complete: !todo.complete} : todo
            });
        case 'DELETE':
            return state.filter(todo => todo.id !== action.payload);
        default:
            return state;
    }
}

export default toDoReducer;