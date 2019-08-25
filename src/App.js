import React from 'react';
import './App.css';
import GlobalSpinner from './components/GlobalSpinner/GlobalSpinner'
import GlobalSpinnerContextProvider from './context/GlobalSpinnerContext';
import RandomComments from './components/RandomComments'
function App() {
  return (
    <GlobalSpinnerContextProvider>
      <div className="App">
        <GlobalSpinner />
        <RandomComments />
      </div>
    </GlobalSpinnerContextProvider>
  );
}

export default App;


