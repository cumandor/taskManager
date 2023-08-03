import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from '../../styles/modules/allTasks.module.css';
import EditTaskModal from '../editTaskModal/EditTaskModal';
import styled from 'styled-components'; 

const TaskTitle = styled.h4`
  color: rgb(0, 0, 0);
  font-size: 24px;
  font-family: 'Rubik', sans-serif;
`;

const TaskDescription = styled.p`
  color: rgb(95, 95, 95);
  font-size: 18px;
  font-family: 'Rubik', sans-serif;
`;

const TaskDeadline = styled.p`
color: rgb(122, 122, 122);
`;

const Checkbox = styled.input`
  background-color: rgb(95, 95, 95);
`;

const DeleteButton = styled.button`
  background-color: rgb(0, 0, 0);
  color: white;
  font-size: 14px;
  border: solid 1px black;
  border-radius: 30px;
  padding: 10px;
  cursor: pointer;
  transition: all .1s ease;
  margin: 5px;
  &:hover {
    background-color: white;
    color: black;
    border: solid 1px black;
  }
`;

const EditButton = styled.button`
  background-color: rgb(0, 0, 0);
  color: white;
  font-size: 14px;
  border: solid 1px black;
  border-radius: 30px;
  padding: 10px;
  cursor: pointer;
  transition: all .1s ease;
  margin: 5px;
  &:hover {
    background-color: white;
    color: black;
    border: solid 1px black;
}
`;

const TaskContainer = styled.div`
  border: solid 1px black;
  border-radius: 40px;
  padding: 10px;
  margin: 10px;
`;

function AllTasks() {
  const allTasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);
  const [showUncompleted, setShowUncompleted] = useState(false);

  const handleDelete = (taskId) => {
    dispatch({ type: 'DELETE_TASK', payload: taskId });
};

  const handleToggleCompleted = (taskId) => {
    dispatch({ type: 'TOGGLE_COMPLETED_TASK', payload: taskId });
};

  const openEditModal = (task) => {
    setSelectedTask(task);
    setEditModalOpen(true);
};

  const closeEditModal = () => {
    setEditModalOpen(false);
};

  const filteredTasks = showUncompleted
    ? allTasks.filter((task) => !task.completed)
    : allTasks;

    return (
      <>
        <h3 className={styles.alltasks__page}>All Tasks</h3>
        {filteredTasks.map((task) => (
          <TaskContainer key={task.id}>
            <TaskTitle>{task.title}</TaskTitle>
            <TaskDescription>{task.description}</TaskDescription>
            <TaskDeadline>{task.deadline}</TaskDeadline>
            <Checkbox
              type="checkbox"
              checked={task.completed}
              onChange={() => handleToggleCompleted(task.id)}
            /> Completed?
            <DeleteButton onClick={() => handleDelete(task.id)}>Delete</DeleteButton>
            <EditButton onClick={() => openEditModal(task)}>Edit</EditButton>
          </TaskContainer>
        ))}
        {editModalOpen && selectedTask && (
          <EditTaskModal closeModal={closeEditModal} task={selectedTask} />
        )}
      </>
    );

}

export default AllTasks;
