import React from 'react';
import NewList from './components/NewList';
import InProgressList from './components/InProgressList';
import CompletedList from './components/CompleteList';
import './App.css';

function App() {
  return (
    <>
      <NewList />
      <InProgressList />
      <CompletedList />
    </>
  );
}

export default App;