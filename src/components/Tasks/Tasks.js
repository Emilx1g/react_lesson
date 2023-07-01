import React, { useState } from "react";
import styles from "./styles";

const Tasks = (props) => {
  const { tasks, setTasks, setShowAddComment, setTaskId } = props;
  const [selectedTaskId, setSelectedTaskId] = useState(null);

  const addComment = (id) => {
    setTaskId(id);
    setShowAddComment(true);
  };

  const toggleComments = (id) => {
    setSelectedTaskId((prevTaskId) => (prevTaskId === id ? null : id));
  };

  const updateStatus = (taskId, newStatus) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        task.status = newStatus;
      }
      return task;
    });

    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    setSelectedTaskId(null);
  };

  return (
    <div>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.tdAndTh}>User</th>
            <th style={styles.tdAndTh}>Status</th>
            <th style={styles.tdAndTh}>Description</th>
            <th style={styles.tdAndTh}>Action</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <>
              <tr>
                <td style={styles.tdAndTh}>
                  {task.user.name} {task.user.surname}
                </td>
                <td style={styles.tdAndTh}>{task.status}</td>
                <td style={styles.tdAndTh}>{task.description}</td>
                <td style={styles.tdAndTh}>
                  <button onClick={() => addComment(task.id)}>
                    Add Comment
                  </button>
                  <button onClick={() => toggleComments(task.id)}>
                    View Comments
                  </button>
                  <button>Edit</button>
                  <button onClick={() => deleteTask(task.id)}>Delete</button>
                  <button onClick={() => updateStatus(task.id, "Active")}>
                    Active
                  </button>
                  <button onClick={() => updateStatus(task.id, "Deactive")}>
                    Deactive
                  </button>
                  <button onClick={() => updateStatus(task.id, "Done")}>
                    Done
                  </button>
                </td>
              </tr>
              {selectedTaskId === task.id && (
                <tr>
                  <td colSpan="4">
                    {task.comments.length > 0 ? (
                      task.comments.map((comment, index) => (
                        <p key={index}>{comment.title}</p>
                      ))
                    ) : (
                      <p>No comments available.</p>
                    )}
                  </td>
                </tr>
              )}
            </>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Tasks;
