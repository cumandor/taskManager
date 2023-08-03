import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import styles from '../../styles/modules/uncompletedTasksPage.module.css';

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

const TaskContainer = styled.div`
  border: solid 1px black;
  border-radius: 40px;
  padding: 10px;
  margin: 10px;
`;


function UncompletedTasksPage() {
  const uncompletedTasks = useSelector((state) => state.tasks.filter((task) => !task.completed));

  return (
    <>
      <h3 className={styles.uncompleted_page}>Uncompleted Tasks</h3>
      {uncompletedTasks.map((task) => (
        <TaskContainer key={task.id}>
          <TaskTitle>{task.title}</TaskTitle>
          <TaskDescription>{task.description}</TaskDescription>
          <TaskDeadline>{task.deadline}</TaskDeadline>
        </TaskContainer>
      ))}
    </>
  );
}

export default UncompletedTasksPage;
