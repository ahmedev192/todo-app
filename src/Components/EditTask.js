import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function EditTask({ tasks, editTask }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const task = tasks.find((t) => t.id.toString() === id);

  const [title, setTitle] = useState(task ? task.title : "");

  const handleSubmit = (e) => {
    e.preventDefault();
    editTask(id, title);
    navigate("/");
  };

  if (!task) return <h2>Task not found!</h2>;

  return (
    <form onSubmit={handleSubmit}>
      <h2>Edit Task</h2>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Update Task"
      />
      <button type="submit">Update</button>
    </form>
  );
}

export default EditTask;
