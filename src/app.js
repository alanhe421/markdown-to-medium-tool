import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { setContent } from './state.js';

import HalfPage from './components//halfpage/halfpage.js';
import TextField from './components//textfield/textfield.js';
import Medium from './components/medium/medium.js';
import AppBar from './components/appbar/appbar.js';
import './app.css';

export const App = props => {
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    const handlePaste = (e) => {
      const items = e.clipboardData.items;
      
      for (const item of items) {
        if (item.kind === 'file') {
          const file = item.getAsFile();
          if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
              const text = e.target.result;
              props.dispatch(setContent(text));
            };
            reader.readAsText(file);
            break;
          }
        }
      }
    };

    document.addEventListener('paste', handlePaste);
    return () => document.removeEventListener('paste', handlePaste);
  }, []);

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    
    const file = e.dataTransfer.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const text = e.target.result;
        props.dispatch(setContent(text));
      };
      reader.readAsText(file);
    }
  };

  return (
    <div 
      className={`container ${isDragging ? 'dragging' : ''}`}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <AppBar />
      <div className="main">
        <HalfPage header="Markdown" background="#efffff">
          <TextField />
        </HalfPage>
        <HalfPage header="Medium" subheader="(copy and paste to medium)">
          <Medium />
        </HalfPage>
      </div>
    </div>
  );
};

export default connect()(App);
