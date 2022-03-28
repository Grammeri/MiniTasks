import React from 'react';
import {Todo} from "./Todo";
import {TodosPropsTypes} from "../App";

type TodolistPropsType = {
    todos:Array<TodosPropsTypes>
    toggleTodo:(id:string)=>void
}

export const Todolist = (props:TodolistPropsType) => {
    return (
        <>
            {props.todos.map(el => {
                return (<Todo key={el.id} el={el}
                              toggleTodo={props.toggleTodo}/>)
            })}
        </>
    );
};

