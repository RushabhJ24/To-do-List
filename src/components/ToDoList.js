import React from 'react';
import bootstrap from 'bootstrap/dist/css/bootstrap.css';
//import getToDoItems, {getTitle} from '../ds/todos';
// import "./ToDoList.css"
// import styled from "./ToDoList.module.css"
// import styled from 'styled-components';

// const List = styled.ul`
// list-style: none;    
// background-color: lightskyblue;
// `

// const ListItem = styled.li`
// border-bottom: 1px solid gray;
// line-height: 30px;`

function ToDoList({myItems,myTitle,taskauthor={firstname: 'Rushabh',
lastname: "Jain",
status: "Default WIP"}, clickevent}){
    // const todoitems = getToDoItems();
    const todoitems=myItems;
    return(
        <><h2>{myTitle}</h2>
        
        <ul className="list-group">
            {todoitems.map((item)=>(
                <li key={item} className="list-group-item" onClick={()=>clickevent(item)}>{item}<br/>
                <small>{taskauthor.firstname} {taskauthor.lastname} - {taskauthor.status}</small></li>
            ))}
            
            
        </ul>
        </>
    )
}

export default ToDoList;