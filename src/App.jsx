import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Resumes from './pages/Resumes';
import Skills from './pages/Skills';
import styles from './App.module.css';

function App() {
  const [activePage, setActivePage] = useState('resumes');
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  const renderContent = () => {
    switch (activePage) {
      case 'resumes':
        return <Resumes />;
      case 'skills':
        return <Skills />;
      default:
        return <Resumes />;
    }
  };

  return (
    <div className={styles.appContainer}>
      <header className={styles.header}>
        <button className={styles.menuButton} onClick={() => setMobileSidebarOpen(true)}>
          ☰
        </button>
        <h1 className={styles.title}>Ganesh Nalawade Resumes & Professional Details</h1>
      </header>
      <div className={styles.content}>
        <Sidebar 
          activePage={activePage} 
          onSelectPage={(page) => { setActivePage(page); setMobileSidebarOpen(false); }}
          mobileSidebarOpen={mobileSidebarOpen}
          onCloseSidebar={() => setMobileSidebarOpen(false)}
        />
        <main className={styles.mainContent}>
          {renderContent()}
        </main>
      </div>
    </div>
  );
}

export default App;