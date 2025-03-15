import React, { useState } from 'react';
import Modal from '../components/Modal';
import ResumeViewer from '../components/ResumeViewer';
import styles from './Resumes.module.css';

// Import PDF files
import Ganesh_Nalawade from '../assets/Ganesh_Nalawade.pdf';
import Ganesh_Nalawade_ATS from '../assets/Ganesh_Nalawade_ATS.pdf';

const Resumes = () => {
  const resumes = [
    { id: 1, name: "Resume - Normal", file: Ganesh_Nalawade },
    { id: 2, name: "Resume - ATS", file: Ganesh_Nalawade_ATS },
  ];

  const [selectedResume, setSelectedResume] = useState(null);

  const handleShare = async (resume) => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: resume.name,
          text: `Check out my resume: ${resume.name}`,
          url: resume.file,
        });
      } catch (error) {
        console.error("Error sharing:", error);
      }
    } else {
      alert("Sharing is not supported in your browser. Please copy this link: " + resume.file);
    }

  };

  return (
    <div className={styles.listContainer}>
      {resumes.map((resume) => (
        <div key={resume.id} className={styles.listItem}>
          <span className={styles.itemName}>{resume.name}</span>
          <div className={styles.buttonGroup}>
            <button className={styles.viewButton} onClick={() => setSelectedResume(resume)}>
              View
            </button>
            <button className={styles.shareButton} onClick={() => handleShare(resume)}>
              Share
            </button>
            <a className={styles.downloadButton} href={resume.file} download>
              Download
            </a>
          </div>
        </div>
      ))}
      {selectedResume && (
        <Modal onClose={() => setSelectedResume(null)}>
          <div className={styles.viewerContainer}>
            <ResumeViewer pdf={selectedResume.file} />
          </div>
        </Modal>
      )}
    </div>
  );
};

export default Resumes;