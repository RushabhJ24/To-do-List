import ToDoList from './components/ToDoList';
import getToDoItems from './ds/todos';

function App() {
  const todoitems = getToDoItems();
  const author = {
    firstname: 'Rushabh',
    lastname: "Jain",
    status: "WIP"
  }

  let clickhandler = (item) => console.log(item);
  let clickhandler2 = (item) => {console.log(`Item Clicked : `); 
  console.log(item)
  }

  return (
    <div className="App">
      <ToDoList myItems={todoitems} myTitle="My ToDos" taskauthor={author} clickevent={clickhandler}/>
      <ToDoList myItems={todoitems} myTitle="My ToDos" clickevent={clickhandler2}/>
    </div>
  );
}

export default App;
