import React from "react";
import Todo from "./Todo";

export default function TodoList({ todos = [], updateTodoItem }) {
  return (
    <div className="container">
      <h1>ToDo List</h1>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Status</th>
            <th scope="col">Author</th>
            <th scope="col">ToDo Title</th>
            <th scope="col">Description</th>
            <th scope="col">Date Created</th>
            <th scope="col">Date Completed</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((p, i) => (
            <Todo
              {...p}
              title={p.title}
              author={p.author}
              key={"post-" + i}
              updateTodoItem={updateTodoItem}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
