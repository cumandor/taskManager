import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styles from '../../styles/modules/editTaskModal.module.css';

function EditTaskModal({ closeModal, task }) {
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);
  const [deadline, setDeadline] = useState(task.deadline);

  const dispatch = useDispatch();

  const handleSubmit = () => {
    const editedTask = { ...task, title, description, deadline };
    dispatch({ type: 'EDIT_TASK', payload: editedTask });
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
        <h2>Edit Task</h2>
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
          Save Changes
        </button>
      </div>
    </div>
  );
}

export default EditTaskModal;
