import React from 'react';
import { FaTimes } from 'react-icons/fa';

const Overview = ({ tasks, deleteTask }) => {
  return (
    <ul>
      {tasks.map((task) => {
        return (
          <li key={task.id}>
            {task.text} <FaTimes onClick={() => deleteTask(task.id)} />
          </li>
        );
      })}
    </ul>
  );
};

export default Overview;
