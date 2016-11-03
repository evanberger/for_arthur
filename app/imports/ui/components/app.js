import React from 'react';
import Header from './header';

const App = ({ children }) => {
  return (
    <div>
      <Header />

      <div>
        {children}
      </div>
    </div>
  );
};

export default App;
