// import { Component, StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
// import { createBrowserRouter } from "react-router";
// import { RouterProvider } from "react-router/dom";
// import RootLayout from './layouts/RootLayout.jsx';
// import Home from './components/Home/Home.jsx';
// import FindPartners from './components/FindPartners/FindPartners.jsx';
// import AuthProvider from './contexts/AuthProvider.jsx';
// import Register from './components/Register/Register.jsx';
// import MyConnections from './components/MyConnections/MyConnections.jsx';
// import PartnerDetails from './components/PartnerDetails/PartnerDetails.jsx';
// import PrivateRoute from './contexts/PrivateRoute.jsx';
// import Login from './components/Login/Login.jsx';
// import CreateProfile from './components/CreateProfile/CreateProfile.jsx';
// import CreatePartner from './components/CreatePartner/CreatePartner.jsx';

// const router = createBrowserRouter([
//   {
//     path: "/",
//     Component: RootLayout,
//     children: [
//       {
//         index: true,
//         Component: Home
//       },
//       {
//         path: 'findPartners',
//         loader: () => fetch('http://localhost:3000/partners'),
//         Component: FindPartners
//       },
//       {
//         path: 'register',
//         Component: Register
//       },
//       {
//         path: 'login',
//         Component: Login
//       },
//       {
//         path: "createProfile",
//         element: <PrivateRoute><CreateProfile /></PrivateRoute>
//       },
//       // {
//       //   path: 'myConnection',
//       //   loader: ()=> fetch('http://localhost:3000/requests') ,
//       //   element: <PrivateRoute><MyConnections></MyConnections></PrivateRoute>
//       // },
//       {
//         path: "myConnection",
//         element: (
//           <PrivateRoute>
//             <MyConnections />
//           </PrivateRoute>
//         )
//       },
//       {
//         path: "partnerDetails/:id",
//         loader: ({ params }) => fetch(`http://localhost:3000/partners/${params.id}`),
//         element: <PrivateRoute><PartnerDetails></PartnerDetails></PrivateRoute>
//       },
//       {
//         path: 'createPartner',
//         element: <PrivateRoute><CreatePartner></CreatePartner></PrivateRoute>
//       }
//     ]
//   },
// ]);

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <AuthProvider>
//       <RouterProvider router={router} />
//     </AuthProvider>
//   </StrictMode>,
// )




import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import RootLayout from './layouts/RootLayout.jsx';
import Home from './components/Home/Home.jsx';
import FindPartners from './components/FindPartners/FindPartners.jsx';
import AuthProvider from './contexts/AuthProvider.jsx';
import Register from './components/Register/Register.jsx';
import MyConnections from './components/MyConnections/MyConnections.jsx';
import PartnerDetails from './components/PartnerDetails/PartnerDetails.jsx';
import PrivateRoute from './contexts/PrivateRoute.jsx';
import Login from './components/Login/Login.jsx';
import CreateProfile from './components/CreateProfile/CreateProfile.jsx';
import CreatePartner from './components/CreatePartner/CreatePartner.jsx';

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: Home },
      {
        path: 'findPartners',
        loader: () => fetch('http://localhost:3000/partners'),
        Component: FindPartners
      },
      { path: 'register', Component: Register },
      { path: 'login', Component: Login },

      {
        path: "createProfile",
        element: <PrivateRoute><CreateProfile /></PrivateRoute>
      },

      {
        path: "myConnection",
        element: (
          <PrivateRoute>
            <MyConnections />
          </PrivateRoute>
        )
      },

      {
        path: "partnerDetails/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:3000/partners/${params.id}`),
        element: (
          <PrivateRoute>
            <PartnerDetails />
          </PrivateRoute>
        )
      },

      {
        path: 'createPartner',
        element: (
          <PrivateRoute>
            <CreatePartner />
          </PrivateRoute>
        )
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />

      {/* toast container for registration */}
      <ToastContainer
        position="top-center"
        autoClose={1500}
        pauseOnHover={false}
      />
    </AuthProvider>
  </StrictMode>,
)
