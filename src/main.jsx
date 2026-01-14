import { StrictMode, Suspense } from 'react'
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
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CreatePartner from './components/CreatePartner/CreatePartner.jsx';
import Profile from './components/pages/Profile/Profile .jsx';
import NotFoundPage from './components/NotFoundPage/NotFoundPage.jsx';
import Loading from './components/Loading/Loading.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: Home },
      {
        path: 'findPartners',
        loader: () => fetch('http://localhost:3000/partners'),
        // Component: FindPartners
        // element: <FindPartners></FindPartners>
        element: <Suspense fallback={<Loading />}>
          <FindPartners />
        </Suspense>

      },
      { path: 'register', Component: Register },
      { path: 'login', Component: Login },
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
      },
      {
        path: 'profile',
        element: <PrivateRoute>
          <Profile />
        </PrivateRoute>
      }
    ]
  },
  {
    path: '*',
    Component: NotFoundPage
  }
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
