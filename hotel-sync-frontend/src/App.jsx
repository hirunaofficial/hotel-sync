import React, { useState } from 'react'; // Add useState import
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/SideBar';
import AddBooking from './pages/Booking/AddBooking';
import AllBooking from './pages/Booking/AllBooking';
import EditBooking from './pages/Booking/EditBooking';
import AllRooms from './pages/Rooms/AllRooms';
import Stocks from './pages/Reports/Stocks';
import Customers from './pages/Customers';
import Support from './pages/Support';
import Settings from './pages/Settings';
import PaymentMethods from './pages/Payment/PaymentMethods';
import Header from './components/Header';
import Footer from './components/Footer';
import Dashboard from './pages/Dashboard';
import NotFound from './pages/NotFound'; // Import the Not Found component
import { Box } from '@mui/material';


const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true); // Initialize state for sidebar

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen); // Toggle sidebar state
  };

  return (
    <Router>
      <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
        <Header toggleSidebar={toggleSidebar} />
        <div style={{ display: 'flex', flex: 1 }}>
          <Sidebar sidebarOpen={sidebarOpen} />
          <Box component="main" sx={{ flex: 1, padding: '16px', display: 'flex', flexDirection: 'column' }}>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/bookings" element={<AllBooking />} />
              <Route path="/bookings/add" element={<AddBooking />} />
              <Route path="/bookings/edit/:id" element={<EditBooking />} /> {/* Consider passing an ID */}
              <Route path="/rooms" element={<AllRooms />} />
              <Route path="/reports/stocks" element={<Stocks />} />
              <Route path="/customers" element={<Customers />} />
              <Route path="/support" element={<Support />} />
              <Route path="/settings" element={<Settings />} />
              <Route path='/payments' element={<PaymentMethods/>}/>
              <Route path="*" element={<NotFound />} /> {/* Catch-all for undefined routes */}
            </Routes>
          </Box>
        </div>
        <Footer /> {/* Place footer here to ensure it's at the bottom of the page */}
      </div>
    </Router>
  );
};

export default App;
