import { useState } from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Home from './Home';
import UserList from './Utilisateurs';
import UserProfile from './userp';
import PropertyList from './propriete';
import ReservationList from './reservations';
import PaymentList from './paiementlist';
import CommentList from './listcommentaires';
import AddProperty from './newproperty';
import AddReservation from './addreservation';
import EditProperty from './editproperty';
import AdminList from './Admincomptes';
import EditAccount from './editadmin';
import Notifications from './Notifications';
import AddAdminAccount from './addadmin';
import MessageList from './messageList';
import AdminLogin from './adminlogin';
import MessageDetails from './messagedetails';
import ProtectedRoute from './protectedRoute';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  return (
    <div className="grid-container">
      <Header OpenSidebar={OpenSidebar} />
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
      <Router>
        <Routes>
          <Route path="/login" element={<AdminLogin />} />
          {/* Protected routes */}
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route
            path="/utilisateurs"
            element={
              <ProtectedRoute>
                <UserList />
              </ProtectedRoute>
            }
          />
          <Route
            path="/profile/:id"
            element={
              <ProtectedRoute>
                <UserProfile />
              </ProtectedRoute>
            }
          />
          <Route
            path="/proprietes"
            element={
              <ProtectedRoute>
                <PropertyList />
              </ProtectedRoute>
            }
          />
          <Route
            path="/reservations"
            element={
              <ProtectedRoute>
                <ReservationList />
              </ProtectedRoute>
            }
          />
          <Route
            path="/paymentlist"
            element={
              <ProtectedRoute>
                <PaymentList />
              </ProtectedRoute>
            }
          />
          <Route
            path="/comentaireslist"
            element={
              <ProtectedRoute>
                <CommentList />
              </ProtectedRoute>
            }
          />
          <Route
            path="/addproperty"
            element={
              <ProtectedRoute>
                <AddProperty />
              </ProtectedRoute>
            }
          />
          <Route
            path="/addreservation"
            element={
              <ProtectedRoute>
                <AddReservation />
              </ProtectedRoute>
            }
          />
          <Route
            path="/editproperty/:id"
            element={
              <ProtectedRoute>
                <EditProperty />
              </ProtectedRoute>
            }
          />
          <Route
            path="/AdminList"
            element={
              <ProtectedRoute>
                <AdminList />
              </ProtectedRoute>
            }
          />
          <Route
            path="/EditAccount/:id"
            element={
              <ProtectedRoute>
                <EditAccount />
              </ProtectedRoute>
            }
          />
          <Route
            path="/addadmin"
            element={
              <ProtectedRoute>
                <AddAdminAccount />
              </ProtectedRoute>
            }
          />
          <Route
            path="/notifications"
            element={
              <ProtectedRoute>
                <Notifications />
              </ProtectedRoute>
            }
          />
          <Route
            path="/messagelist"
            element={
              <ProtectedRoute>
                <MessageList />
              </ProtectedRoute>
            }
          />
          <Route
            path="/detailmessage"
            element={
              <ProtectedRoute>
                <MessageDetails />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
