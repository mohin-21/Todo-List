import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';

export default function TodoList() {
    let [todos, setTodos] = useState([{ task: "Code", id: uuidv4(), isDone: false }]);
    let [newTodo, setNewTodo] = useState([]);

    let addTask = () => {
        setTodos(preTodos => {
            return ([...preTodos, { task: newTodo, id: uuidv4(), isDone: false }])
        });
        setNewTodo("");
    }
    let updateVal = (event) => {
        setNewTodo(event.target.value);
    }
    let removeTask = (id) => {
        setTodos((preTodos) => todos.filter((preTodos) => preTodos.id != id));

    }
    let upperCase = () => {
        setTodos((preTodos) =>
            preTodos.map((todo) => {
                return {
                    ...todo, task: todo.task.toUpperCase()
                }
            })
        );

    }

    let upperCaseOne = (id) => {
        setTodos((preTodos) => 
            preTodos.map((todo) => {
                if (todo.id == id) {
                    return {
                        ...todo, task: todo.task.toUpperCase()
                    }
                } else {
                    return todo;
                }
            })
        )
    
    }

    let done = (id) => {
        setTodos((preTodos) => 
            preTodos.map((todo) => {
                if (todo.id == id) {
                    return {
                        ...todo, isDone: true
                    }
                } else {
                    return todo;
                }
            })
        )
    
    }

    let allDone = () =>{
        setTodos((preTodos) =>
            preTodos.map(todo =>{
                return {
                    ...todo, isDone: true
                }
            })
        )
    }

    return (
        <>  
            <div className="top"> <i className="fa-solid fa-bars"></i> Todo List</div>
            <div className="box">
                <input type="text" placeholder="Add Tasks" value={newTodo} onChange={updateVal}/>
                <button onClick={addTask} className="btn">Add</button>
            </div>
            <hr />
            <ul>
                {
                    todos.map((el) => {
                        return <li key={el.id}>
                            <span style={el.isDone ? {textDecoration: "line-through"}: {}}>{el.task}</span>
                            &nbsp; &nbsp;
                            <button onClick={() => { removeTask(el.id) }} className="remove-btn">Remove</button>
                            <button onClick={() => { done(el.id) }} className="btn">Done</button>
                        </li>
                    })
                }
            </ul>

            <button onClick={allDone} className="btn">Done All</button>

        </>
    )
}