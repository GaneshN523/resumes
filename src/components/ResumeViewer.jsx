import React from 'react';

const ResumeViewer = ({ pdf }) => {
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <iframe
        src={pdf}
        style={{ width: '100%', height: '100%', border: 'none' }}
        title="Resume Viewer"
      />
    </div>
  );
};

export default ResumeViewer;
