import React, { useState } from "react";
import styles from "./styles";

const Tasks = (props) => {
  const { tasks, setTasks, setShowAddComment, setTaskId, editTask } = props;

  const [selectedTaskId, setSelectedTaskId] = useState(null);
  const [showComments, setShowComments] = useState(false);
  const [editedUser, setEditedUser] = useState({ name: "", surname: "" });
  const [editedDescription, setEditedDescription] = useState("");

  const addComment = (id) => {
    setTaskId(id);
    setShowAddComment(true);
  };

  const toggleComments = (id) => {
    setSelectedTaskId((prevTaskId) => (prevTaskId === id ? null : id));
    setShowComments(true);
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
    // setSelectedTaskId(null);
  };

  const saveEditedTask = (taskId) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        task.user = { ...editedUser };
        task.description = editedDescription;
      }
      return task;
    });

    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    setSelectedTaskId(null);
    // setEditedUser({ name: "", surname: "" });
    // setEditedDescription("");
  };

  const handleEditTask = (task) => {
    const {
      id: taskId,
      user: { name: userName, surname: userSurname },
      description,
    } = task;
    setSelectedTaskId(taskId);
    setEditedUser({ name: userName, surname: userSurname });
    setEditedDescription(description);
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
                  {selectedTaskId === task.id && !showComments ? (
                    <>
                      <input
                        type="text"
                        value={editedUser.name}
                        onChange={(e) =>
                          setEditedUser({
                            ...editedUser,
                            name: e.target.value,
                          })
                        }
                      />
                      <input
                        type="text"
                        value={editedUser.surname}
                        onChange={(e) =>
                          setEditedUser({
                            ...editedUser,
                            surname: e.target.value,
                          })
                        }
                      />
                    </>
                  ) : (
                    `${task.user.name} ${task.user.surname}`
                  )}
                </td>
                <td style={styles.tdAndTh}>{task.status}</td>
                <td style={styles.tdAndTh}>
                  {selectedTaskId === task.id && !showComments ? (
                    <input
                      type="text"
                      value={editedDescription}
                      onChange={(e) => setEditedDescription(e.target.value)}
                    />
                  ) : (
                    task.description
                  )}
                </td>
                <td style={styles.tdAndTh}>
                  <button onClick={() => addComment(task.id)}>
                    Add Comment
                  </button>
                  <button onClick={() => toggleComments(task.id)}>
                    View Comments
                  </button>
                  {selectedTaskId === task.id ? (
                    <>
                      <button onClick={() => saveEditedTask(task.id)}>
                        Save
                      </button>
                      <button
                        onClick={() => {
                          setSelectedTaskId(null);
                          setShowComments(false);
                        }}
                      >
                        Cancel
                      </button>
                    </>
                  ) : (
                    <button onClick={() => handleEditTask(task)}>Edit</button>
                  )}
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
              {selectedTaskId === task.id && showComments && (
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
