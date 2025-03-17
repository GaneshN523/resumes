import React from 'react';

const ResumeViewer = ({ pdf }) => {
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <embed src={pdf} type="application/pdf" width="100%" height="100%" />
    </div>
  );
};

export default ResumeViewer;
