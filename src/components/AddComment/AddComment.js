import React, { useState } from "react";

const AddComment = (props) => {
  const { taskId, tasks, setTasks, setShowAddComment } = props;
  const [comment, setComment] = useState("");

  const add = () => {
    const newComment = {
      title: comment,
    };

    const updatedTasks = tasks.map((task) =>
      task.id === taskId
        ? { ...task, comments: [...task.comments, newComment] }
        : task
    );

    setTasks(updatedTasks);
    setShowAddComment(false);

    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  const cancel = () => {
    setShowAddComment(false);
  };

  return (
    <div>
      <input value={comment} onChange={(e) => setComment(e.target.value)} />
      <button onClick={cancel}>Cancel</button>
      <button onClick={add}>Add</button>
    </div>
  );
};

export default AddComment;
