import React from "react";

export default function Todo({
  id,
  title,
  description,
  dateCreated,
  complete,
  dateCompleted,
  author,
  updateTodoItem,
}) {
  return (
    <tr>
      <td>
        <div>
          <input
            type="checkbox"
            checked={complete || false}
            onChange={() => updateTodoItem(id)}
          />
          <label htmlFor="complete" className="form-label">
            &nbsp;&nbsp;&nbsp;complete
          </label>
        </div>
      </td>
      <td>{author}</td>
      <td>{title}</td>
      <td>{description}</td>
      <td>{dateCreated}</td>
      <td>{dateCompleted}</td>
    </tr>
  );
}
