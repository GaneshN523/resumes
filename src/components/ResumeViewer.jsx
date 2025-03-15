import React from 'react';

const ResumeViewer = ({ pdf }) => {
  return (
    <object data={pdf} type="application/pdf" width="100%" height="100%">
      <p>
        Your browser does not support PDFs. Please download the PDF to view it: 
        <a href={pdf}>Download PDF</a>.
      </p>
    </object>
  );
};

export default ResumeViewer;