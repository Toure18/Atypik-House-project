import { useState } from 'react'
import './App.css'
import Header from './Header'
import Sidebar from './Sidebar'
import Home from './Home'
import UserList from './Utilisateurs'
import UserProfile from './userp'
import PropertyList from './propriete'
import ReservationList from './reservations'
import PaymentList from './paiementlist'
import CommentList from './listcommentaires'
import AddProperty from './newproperty'
import AddReservation from './addreservation'
import EditProperty from './editproperty'
import AdminList from './Admincomptes'
import EditAccount from './editadmin'
import Notifications from './Notifications'
import AddAdminAccount from './addadmin'
import MessageList from './messageList'
import AdminLogin from './adminlogin'
import MessageDetails from './messagedetails'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }

  return (
    <div className='grid-container'>
      <Header OpenSidebar={OpenSidebar}/>
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
      <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/utilisateurs" element={<UserList />} />
        <Route path="/profile/:id" element={<UserProfile />} /> 
        <Route path="/proprietes" element={<PropertyList />} />
        <Route path="/reservations" element={<ReservationList />} />
        <Route path="/paymentlist" element={<PaymentList />} />
        <Route path="/comentaireslist" element={<CommentList />} />
        <Route path="/addproperty" element={<AddProperty />} />
        <Route path="/addreservation" element={<AddReservation />} />
        <Route path="/editproperty" element={<EditProperty />} />
        <Route path="/AdminList" element={<AdminList />} />
        <Route path="/EditAccount" element={<EditAccount />} />
        <Route path="/addadmin" element={<AddAdminAccount />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/messagelist" element={<MessageList />} />
        <Route path="/detailmessage" element={<MessageDetails />} />
        <Route path="/login" element={<AdminLogin />} />
      </Routes>
    </Router>
    </div>
  )
}

export default App
