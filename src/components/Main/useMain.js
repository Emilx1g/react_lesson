import { useEffect, useState } from "react";

const useMain = () => {
  const [tasks, setTasks] = useState([]);
  const [taskId, setTaskId] = useState(null);
  const [showAddComment, setShowAddComment] = useState(false);
  const [editTaskId, setEditTaskId] = useState(null);
  const [editUser, setEditUser] = useState("");
  const [editDescription, setEditDescription] = useState("");

  useEffect(() => {
    const tasksData = localStorage.getItem("tasks");
    setTasks(JSON.parse(tasksData) || []);
  }, []);

  const saveEditedTask = () => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === editTaskId) {
        task.user = editUser;
        task.description = editDescription;
      }
      return task;
    });

    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    setEditTaskId(null);
    setEditUser("");
    setEditDescription("");
  };

  return {
    tasks,
    setTasks,
    taskId,
    setTaskId,
    showAddComment,
    setShowAddComment,
    editTaskId,
    setEditTaskId,
    editUser,
    setEditUser,
    editDescription,
    setEditDescription,
    saveEditedTask,
  };
};

export default useMain;
