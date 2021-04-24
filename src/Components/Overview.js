import React from 'react';
import { FaTimes } from 'react-icons/fa';

const Overview = ({
  tasks,
  deleteTask,
  toggleInputField,
  handleOverviewChange,
  handleOverviewClick,
}) => {
  return (
    <ul>
      {tasks.map((task, index) => {
        return task.reSubmit ? (
          <li>
            <input onChange={handleOverviewChange} key={index} type="text" />
            <FaTimes onClick={() => deleteTask(task.id)} />
            <button onClick={() => handleOverviewClick(task.id)}>
              Resubmit
            </button>
          </li>
        ) : (
          <li key={task.id}>
            {task.text} <FaTimes onClick={() => deleteTask(task.id)} />
            <button onClick={() => toggleInputField(task.id)}>Edit</button>
          </li>
        );
      })}
    </ul>
  );
};

export default Overview;
