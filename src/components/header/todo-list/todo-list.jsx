import React, { useState } from 'react';
import styles from './todo-list.module.scss';
import { message } from 'antd';

import notCheck from '../../../assets/svg/notCheck.svg';
import check from '../../../assets/svg/check.svg';
import remove from '../../../assets/svg/remove.svg';
import addTaskIcon from '../../../assets/svg/addTask.svg';
import {
  useFetchAddTaskMutation,
  useFetchAllTaskARemoveMutation,
  useFetchTaskRemoveMutation,
  useFetchTodoGetQuery,
} from '../../../redux/slice/todo';

const TodoList = () => {
  const { tasks, isLoading, isError } = useFetchTodoGetQuery();
  const [addTask] = useFetchAddTaskMutation();
  const [removeTask] = useFetchTaskRemoveMutation();
  const [removeAllTasks] = useFetchAllTaskARemoveMutation();

  const [inputValue, setInputValue] = useState('');
  const [checkTask, setCheckTask] = useState(false);
  const [isInputVisible, setInputVisible] = useState(false);

  const onAddTask = async () => {
    try {
      if (inputValue.trim() !== '') {
        await addTask({ title: inputValue, status: 'progress' });
        setInputValue('');
        setInputVisible(!isInputVisible);
        message.success('Task added successfully');
      }
    } catch (error) {}
  };

  const onRemoveTask = (id) => {
    removeTask(id);
    message.success('Task removed successfully');
  };

  const onRemoveAllTask = async () => {
    await removeAllTasks();
    message.success('All tasks removed successfully');
  };

  return (
    <div className={styles.root}>
      <ul className={styles.list}>
        {tasks?.map((task) => (
          <li className={styles.task} key={task._id}>
            <div className={styles.taskBlock}>
              <img
                onClick={() => setCheckTask(!checkTask)}
                width="18"
                height="18"
                src={checkTask ? check : notCheck}
                alt="Check Icon"
              />
              <p className={styles.taskTitle}>{task?.title}</p>
            </div>
            <img
              onClick={() => onRemoveTask(task._id)}
              width="26"
              height="26"
              src={remove}
              alt="Remove Icon"
            />
          </li>
        ))}
      </ul>
      <div className={styles.footer}>
        {isInputVisible ? (
          <div className={styles.addTask}>
            <input
              autoFocus={true}
              className={styles.addTaskInput}
              type="text"
              placeholder="Enter task name"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <button onClick={onAddTask}>Add Task</button>
          </div>
        ) : (
          <div className={styles.addTask} onMouseDown={() => setInputVisible(!isInputVisible)}>
            <img width="18" height="17" src={addTaskIcon} alt="Add Task Icon" />
            <span className={styles.taskCreate}>Create New Item</span>
          </div>
        )}
        <div className={styles.removeAllTasks} onClick={onRemoveAllTask}>
          Remove All
          <img width="26" height="26" src={remove} alt="Remove Icon" />
        </div>
      </div>
    </div>
  );
};

export default TodoList;
