import React, { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import axios from "axios";
import Home from "./Components/Home";
import AddTask from "./Components/AddTask";
import EditTask from "./Components/EditTask";

const API_URL = "https://jsonplaceholder.typicode.com/todos?_limit=5";

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios.get(API_URL).then((response) => setTasks(response.data));
  }, []);

  const addTask = (title) => {
    const newTask = { id: Date.now(), title };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const editTask = (id, updatedTitle) => {
    setTasks(
      tasks.map((task) =>
        task.id.toString() === id ? { ...task, title: updatedTitle } : task
      )
    );
  };

  return (
    <>
      <nav>
        <Link to="/">Home</Link> | <Link to="/add">Add Task</Link>
      </nav>
      <Routes>
        <Route
          path="/"
          element={<Home tasks={tasks} deleteTask={deleteTask} />}
        />
        <Route path="/add" element={<AddTask addTask={addTask} />} />
        <Route
          path="/edit/:id"
          element={<EditTask tasks={tasks} editTask={editTask} />}
        />
      </Routes>
    </>
  );
}

export default App;
