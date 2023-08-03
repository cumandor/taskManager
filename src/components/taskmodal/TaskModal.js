import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styles from '../../styles/modules/taskModal.module.css';

function TaskModal({ closeModal }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [deadline, setDeadline] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = () => {
    const task = { title, description, deadline };
    dispatch({ type: 'ADD_TASK', payload: task });
    closeModal();
};

  return (
    <div className={styles.modal}>
      <div className={styles.modal__content}>
        <div className={styles.closeContainer}>
          <button className={styles.closeButton} onClick={closeModal}>
            &#10005;
          </button>
        </div>
        <h2>Create new task</h2>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="date"
          value={deadline}
          onChange={(e) => setDeadline(e.target.value)}
        />
        <button className={styles.saveButton} onClick={handleSubmit}>
          Save Task
        </button>
      </div>
    </div>
  );
}

export default TaskModal;
