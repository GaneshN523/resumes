import React from 'react';
import styles from './Sidebar.module.css';

const Sidebar = ({ activePage, onSelectPage, mobileSidebarOpen, onCloseSidebar }) => {
  const menuItems = [
    { id: 'resumes', label: 'Resumes' },
    { id: 'skills', label: 'Skills' },

  ];

  return (
    <>
      <div className={`${styles.sidebar} ${mobileSidebarOpen ? styles.mobileOpen : ''}`}>
        {mobileSidebarOpen && (
          <button className={styles.closeButton} onClick={onCloseSidebar}>
            ×
          </button>
        )}
        {menuItems.map(item => (
          <button
            key={item.id}
            className={`${styles.menuItem} ${activePage === item.id ? styles.active : ''}`}
            onClick={() => onSelectPage(item.id)}
          >
            {item.label}
          </button>
        ))}
      </div>
      {mobileSidebarOpen && <div className={styles.backdrop} onClick={onCloseSidebar}></div>}
    </>
  );
};

export default Sidebar;