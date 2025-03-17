import React, { useState } from 'react';
import Modal from '../components/Modal';
import styles from './Skills.module.css';

const Skills = () => {
  const skills = [
    { id: 1, name: "C Programming", details: "C is a general-purpose programming language that is extremely powerful and used for system programming, game development, and embedded systems." },
    { id: 2, name: "Data Structures & Algorithms", details: "DSA is the backbone of software development, covering concepts like arrays, linked lists, stacks, queues, trees, and algorithms like sorting and searching." },
    { id: 3, name: "Python Programming", details: "Python is a high-level programming language known for its ease of use, extensive libraries, and applications in web development, data science, and AI." },
    { id: 4, name: "Object Oriented Programming Concepts", details: "OOP is a programming paradigm based on the concept of objects, incorporating principles like encapsulation, inheritance, polymorphism, and abstraction." },
    { id: 5, name: "SQL", details: "SQL (Structured Query Language) is used for managing and querying relational databases, allowing CRUD operations and complex data manipulation." },
    { id: 6, name: "Version Control Git and GitHub", details: "Git is a distributed version control system that tracks changes in code, while GitHub is a cloud-based repository hosting service." }
  ];

  const [selectedSkill, setSelectedSkill] = useState(null);

  return (
    <div className={styles.listContainer}>
      {skills.map((skill) => (
        <div key={skill.id} className={styles.listItem}>
          <span className={styles.itemName}>{skill.name}</span>
          <div className={styles.buttonGroup}>
            <button className={styles.viewButton} onClick={() => setSelectedSkill(skill)}>
              View
            </button>
          </div>
        </div>
      ))}
      {selectedSkill && (
        <Modal onClose={() => setSelectedSkill(null)}>
          <div className={styles.modalWrapper}>
            <div className={styles.modalContent}>
              <h2>{selectedSkill.name}</h2>
              <p>{selectedSkill.details}</p>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default Skills;
