import React from 'react';
import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import { useState } from 'react';


// Note: Rendering a single component to build components in isolation
const App = () => {
 // create a state variable to control the modal
  

  
  return (
    <div className="App">
       <HomeRoute />
      
    </div>
  );
};

export default App;
