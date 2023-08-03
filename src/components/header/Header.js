import React, { useState } from 'react';
import styles from '../../styles/modules/header.module.css';
import TaskModal from '../taskmodal/TaskModal';
import { Link } from 'react-router-dom';

function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
};

  const closeModal = () => {
    setIsModalOpen(false);
};

  return (
    <header className={styles.header}>
      <h1 className={styles.header__logo}>Task Manager</h1>
      <button className={styles.header__addtask} onClick={openModal}>
        Create Task
      </button>
        <Link to="/" className={styles.header__addtask}>All tasks</Link>
        <Link to="/CompletedTasksPage" className={styles.header__addtask}>Completed Tasks</Link>
        <Link to="/UncompletedTasksPage" className={styles.header__addtask}>Uncompleted tasks</Link>
      {isModalOpen && <TaskModal closeModal={closeModal} />}
    </header>
  );
}

export default Header;
