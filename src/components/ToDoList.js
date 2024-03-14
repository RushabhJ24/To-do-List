import React from 'react';
//import bootstrap from 'bootstrap/dist/css/bootstrap.css';

function ToDoList(){
    const todoitems = ["Pick up groceries",
"Pay electricity bill",
"Visit doctor for regular checkup",
"Attend webinar on chatgpt"];
    
    return(
        <><div>My toDos</div>
        <ul className='list-group'>
            {todoitems.map((item)=>(
                <li key={item} className='list-group-item'>{item}}</li>
            ))}
            
            
        </ul>
        </>
    )
}

export default ToDoList;