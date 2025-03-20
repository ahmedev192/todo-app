import React from "react";
import { Link } from "react-router-dom";

function Home({ tasks, deleteTask }) {
  return (
    <div>
      <h2>To-Do List</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.title}
            <div>
              <Link to={`/edit/${task.id}`}>
                <button>Edit</button>
              </Link>
              <button onClick={() => deleteTask(task.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
