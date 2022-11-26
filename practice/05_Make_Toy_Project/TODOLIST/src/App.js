import { useState } from 'react';

function App() {
  const [toDO, setToDo] = useState("");
  const [toDoList, setToDoList] = useState([]);
  const onChange = (e) => setToDo(e.target.value);
  const onSubmit = (e) => {
    e.preventDefault();
    if(toDO === ""){
      return;
    }
    setToDoList((currentArray) => [toDO, ...currentArray]);
    setToDo("");
  };
  // console.log(toDoList);
  return (
    <div>
      <h1>My To Do List ({toDoList.length})</h1>
      <form onSubmit={onSubmit}>
        <input onChange={onChange} value={toDO} type="text" placeholder='Write your to do...'/>
        <button>Add To Do</button>
      </form>
      <hr />
      {toDoList.map((item, index)=><li key={index}>{item}</li>)}
    </div>
  );
}
export default App;
