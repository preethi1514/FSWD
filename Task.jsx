import React, { useState } from "react";

const Task = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.trim() === "") return;
    setTasks([...tasks, task]);
    setTask("");
  };

  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>📝 Task Dashboard</h2>

        <div style={styles.inputBox}>
          <input
            type="text"
            placeholder="Enter a task..."
            value={task}
            onChange={(e) => setTask(e.target.value)}
            style={styles.input}
          />
          <button onClick={addTask} style={styles.addButton}>
            Add
          </button>
        </div>

        <ul style={styles.list}>
          {tasks.map((item, index) => (
            <li key={index} style={styles.listItem}>
              {item}
              <button
                onClick={() => removeTask(index)}
                style={styles.removeButton}
              >
                ✕
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const styles = {
  container: {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #667eea, #764ba2)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Arial, sans-serif",
  },
  card: {
    background: "#fff",
    padding: "25px",
    borderRadius: "10px",
    width: "320px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
  },
  title: {
    textAlign: "center",
    marginBottom: "20px",
  },
  inputBox: {
    display: "flex",
    gap: "10px",
    marginBottom: "15px",
  },
  input: {
    flex: 1,
    padding: "8px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  addButton: {
    padding: "8px 12px",
    borderRadius: "5px",
    border: "none",
    background: "#667eea",
    color: "#fff",
    cursor: "pointer",
  },
  list: {
    listStyle: "none",
    padding: 0,
  },
  listItem: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "8px",
    marginBottom: "8px",
    background: "#f4f4f4",
    borderRadius: "5px",
  },
  removeButton: {
    background: "red",
    color: "#fff",
    border: "none",
    borderRadius: "50%",
    width: "22px",
    height: "22px",
    cursor: "pointer",
  },
};

export default Task;
