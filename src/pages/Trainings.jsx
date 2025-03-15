import React, { useState } from 'react';
import Modal from '../components/Modal';
import styles from './Trainings.module.css';

const Trainings = () => {
  const trainings = [
    { id: 1, name: "Agile Training" },
    { id: 2, name: "DevOps Workshop" },
  ];

  const [selectedTraining, setSelectedTraining] = useState(null);

  return (
    <div className={styles.listContainer}>
      {trainings.map((training) => (
        <div key={training.id} className={styles.listItem}>
          <span className={styles.itemName}>{training.name}</span>
          <div className={styles.buttonGroup}>
            <button className={styles.viewButton} onClick={() => setSelectedTraining(training)}>
              View
            </button>
          </div>
        </div>
      ))}
      {selectedTraining && (
        <Modal onClose={() => setSelectedTraining(null)}>
          <div className={styles.modalContent}>
            <h2>{selectedTraining.name}</h2>
            <p>Details about {selectedTraining.name}.</p>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default Trainings;