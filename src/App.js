import React, { useState } from "react";
import UserBar from "./UserBar";
import CreateTodo from "./CreateTodo";
import TodoList from "./TodoList";

function App() {
  const [user, setUser] = useState();

  const initialTodos = [
    {
      id: 1,
      title: "Pay Credit Card Bill",
      description: "Amount $956.87",
      dateCreated: new Date().toLocaleString(),
      complete: true,
      dateCompleted: new Date().toLocaleString(),
      author: "Unknown",
    },
    {
      id: 2,
      title: "Attend A Zoom Meeting",
      description: "Topic : 'Moderen Lifestyle'",
      dateCreated: new Date().toLocaleString(),
      complete: false,
      dateCompleted: null,
      author: "Unknown",
    },
    {
      id: 3,
      title: "Go to Six Flags",
      description: "Amazing...",
      dateCreated: new Date().toLocaleString(),
      complete: false,
      dateCompleted: null,
      author: "Unknown",
    },
  ];

  const [todos, setTodoList] = useState(initialTodos);

  function createTodoItem(title, description, author) {
    const newTodo = {
      id: todos.length + 1,
      title: title,
      description: description,
      complete: false,
      dateCreated: new Date().toLocaleString(),
      author: author,
    };
    setTodoList([newTodo, ...todos]);
  }

  function updateTodoItem(id) {
    const updatedTodos = todos.map((todo) => {
      if (id === todo.id) {
        let dateCompleted = null;
        if (!todo.complete) {
          dateCompleted = new Date().toLocaleString();
        }
        return { ...todo, complete: !todo.complete, dateCompleted };
      }
      return todo;
    });
    setTodoList(updatedTodos);
  }

  return (
    <div>
      <UserBar user={user} setUser={setUser} />
      <br />
      <br />
      <hr />
      <br />
      <CreateTodo user={user} createTodoItem={createTodoItem} />
      <TodoList todos={todos} updateTodoItem={updateTodoItem} />
    </div>
  );
}

export default App;
