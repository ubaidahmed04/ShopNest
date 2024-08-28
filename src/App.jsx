import React, { useState, useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
import Loader from './Loader'; // Import the Loader component

function App({ router }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000); // Show the loader for 2 seconds
  }, []);

  return (
    <>
      {loading ? <Loader /> : <RouterProvider router={router} />}
    </>
  );
}

export default App;
