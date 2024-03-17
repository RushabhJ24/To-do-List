import React from "react";

function ToDoForm(){
    return (
        <>
            <h2>To Do Form</h2>
            <form onSubmit={(event) =>{
                event.preventDefault();
                console.log("Form is Submitted");
            }}>
                <div className="m-3">
                    <label htmlFor="fullname" className="form-label">Fuull Name</label>
                    <input type="text" className="form-control" id="fullname"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="age" className="form-label">Age</label>
                    <input id="age" type="number" className="form-control" />
                </div>
                <button className="btn btn-primary">Save</button>
            </form>
        </>
    )
}

export default ToDoForm;