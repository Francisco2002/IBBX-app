import React, { Suspense } from 'react';
import { RouterProvider } from 'react-router-dom';
import router from './routes';
import Layout from './components/Layout';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <Layout>
      <ToastContainer />
      <Suspense fallback={<></>}>
        <RouterProvider router={router} />
      </Suspense>
    </Layout>
  );
}

export default App;
