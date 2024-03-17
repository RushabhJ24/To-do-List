import ToDoList from './components/ToDoList';
import ToDoForm from './components/todoform';
import getToDoItems from './ds/todos';
import "./App.css";

function App() {
  const todoitems = getToDoItems();
  const author = {
    firstname: 'Rushabh',
    lastname: "Jain",
    status: "WIP"
  }

  let clickhandler = (item) => console.log(item);
  

  return (
    <div className="App">
      <ToDoList myItems={todoitems} myTitle="My ToDos" taskauthor={author} clickevent={clickhandler}/>
      <br/>
      <ToDoForm/>
    </div>
  );
}

export default App;
