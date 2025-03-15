import React, { useState } from 'react';
import Modal from '../components/Modal';
import styles from './Certifications.module.css';

const Certifications = () => {
  const certifications = [
    { id: 1, name: "Certified JavaScript Developer" },
    { id: 2, name: "Certified React Developer" },
  ];

  const [selectedCertification, setSelectedCertification] = useState(null);

  return (
    <div className={styles.listContainer}>
      {certifications.map((cert) => (
        <div key={cert.id} className={styles.listItem}>
          <span className={styles.itemName}>{cert.name}</span>
          <div className={styles.buttonGroup}>
            <button className={styles.viewButton} onClick={() => setSelectedCertification(cert)}>
              View
            </button>
          </div>
        </div>
      ))}
      {selectedCertification && (
        <Modal onClose={() => setSelectedCertification(null)}>
          <div className={styles.modalContent}>
            <h2>{selectedCertification.name}</h2>
            <p>Details about {selectedCertification.name}.</p>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default Certifications;