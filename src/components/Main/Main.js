import React from "react";
import Tasks from "../Tasks/Tasks";
import AddComment from "../AddComment/AddComment";
import useMain from "./useMain";

const Main = () => {
  const {
    tasks,
    setTasks,
    taskId,
    setTaskId,
    showAddComment,
    setShowAddComment,
    setEditTaskId,
    setEditUser,
    setEditDescription,
  } = useMain();

  const editTask = (taskId, user, description) => {
    setEditTaskId(taskId);
    setEditUser(user);
    setEditDescription(description);
  };

  return (
    <div>
      <Tasks
        tasks={tasks}
        setTasks={setTasks}
        setTaskId={setTaskId}
        setShowAddComment={setShowAddComment}
        editTask={editTask}
      />

      {showAddComment && (
        <AddComment
          taskId={taskId}
          tasks={tasks}
          setTasks={setTasks}
          setShowAddComment={setShowAddComment}
        />
      )}
    </div>
  );
};

export default Main;
