// src/components/Sidebar.jsx
import React, { useState } from 'react';
import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Collapse,
  IconButton,
  Typography,
} from '@mui/material';
import {
  FaHome,
  FaBook,
  FaUsers,
  FaRegChartBar,
  FaDoorOpen,
  FaFileInvoice,
  FaCogs,
  FaComments,
  FaBars,
} from 'react-icons/fa';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  const [openBookings, setOpenBookings] = useState(false);
  const [openPayments, setOpenPayments] = useState(false);
  const [openRooms, setOpenRooms] = useState(false);
  const [openReports, setOpenReports] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  // Functions to handle submenu toggle
  const handleBookingsClick = () => setOpenBookings(!openBookings);
  const handlePaymentsClick = () => setOpenPayments(!openPayments);
  const handleRoomsClick = () => setOpenRooms(!openRooms);
  const handleReportsClick = () => setOpenReports(!openReports);

  // Function to toggle sidebar visibility
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  const menuItems = [
    { text: 'Dashboard', icon: <FaHome />, link: '/dashboard' },
    {
      text: 'Bookings',
      icon: <FaBook />,
      hasSubMenu: true,
      subItems: [
        { text: 'All Bookings', link: '/bookings' },
        { text: 'Add Booking', link: '/bookings/add' },
        { text: 'Edit Booking', link: '/bookings/edit' },
      ],
    },
    {
      text: 'Payments',
      icon: <FaFileInvoice />,
      hasSubMenu: true,
      subItems: [
        { text: 'Payment Method', link: '/payments' },
        { text: 'Add Payment', link: '/payments/add' },
        { text: 'Invoice', link: '/payments/invoice' },
      ],
    },
    {
      text: 'Rooms',
      icon: <FaDoorOpen />,
      hasSubMenu: true,
      subItems: [
        { text: 'All Rooms', link: '/rooms' },
        { text: 'Add Room', link: '/rooms/add' },
        { text: 'Edit Room', link: '/rooms/edit' },
      ],
    },
    {
      text: 'Reports',
      icon: <FaRegChartBar />,
      hasSubMenu: true,
      subItems: [
        { text: 'Stocks', link: '/reports/stocks' },
        { text: 'Expenses', link: '/reports/expenses' },
        { text: 'Room Reports', link: '/reports/rooms' },
      ],
    },
    { text: 'Customers', icon: <FaUsers />, link: '/customers' },
    { text: 'Support', icon: <FaComments />, link: '/support' },
    { text: 'Settings', icon: <FaCogs />, link: '/settings' },
  ];

  return (
    <Box sx={{ display: 'flex', height: '100vh' }}>
      {/* Hamburger menu button */}
      <IconButton
        onClick={toggleSidebar}
        sx={{ position: 'fixed', top: 10, left: 10, zIndex: 1300, color: 'white' }}
      >
        <FaBars />
      </IconButton>

      {/* Sidebar */}
      <Box
        sx={{
          width: sidebarOpen ? 240 : 0, // Toggle width
          height: '100vh',
          backgroundColor: '#181D33',
          color: 'white',
          transition: 'width 0.3s',
          overflowX: 'hidden',
        }}
      >
        {/* Sidebar content */}
        <Box
          sx={{
            padding: 2,
            display: sidebarOpen ? 'flex' : 'none',
            justifyContent: 'center',
            alignItems: 'center',
            borderBottom: '1px solid #2a2f45',
          }}
        >
          <Typography variant="h6" component="div" fontWeight="bold">
            HotelSync
          </Typography>
        </Box>

        <List sx={{ marginTop: 2 }}>
          {menuItems.map((item, index) => (
            <React.Fragment key={index}>
              <ListItem
                button
                onClick={item.hasSubMenu ? (() => {
                  if (item.text === 'Bookings') handleBookingsClick();
                  if (item.text === 'Payments') handlePaymentsClick();
                  if (item.text === 'Rooms') handleRoomsClick();
                  if (item.text === 'Reports') handleReportsClick();
                }) : null}
                sx={{ paddingY: 1.5, '&:hover': { backgroundColor: '#2a2f45' } }}
                component={item.hasSubMenu ? null : NavLink} // Change this line
                to={item.hasSubMenu ? null : item.link} // Change this line
              >
                <ListItemIcon sx={{ color: 'white' }}>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
                {item.hasSubMenu && (
                  (item.text === 'Bookings' && openBookings) ||
                  (item.text === 'Payments' && openPayments) ||
                  (item.text === 'Rooms' && openRooms) ||
                  (item.text === 'Reports' && openReports)
                    ? <ExpandLess />
                    : <ExpandMore />
                )}
              </ListItem>

              {/* Submenu rendering */}
              {item.hasSubMenu && (
                <Collapse
                  in={
                    (item.text === 'Bookings' && openBookings) ||
                    (item.text === 'Payments' && openPayments) ||
                    (item.text === 'Rooms' && openRooms) ||
                    (item.text === 'Reports' && openReports)
                  }
                  timeout="auto"
                  unmountOnExit
                >
                  <List component="div" disablePadding>
                    {item.subItems.map((subItem, subIndex) => (
                      <ListItem
                        button
                        key={subIndex}
                        component={NavLink}
                        to={subItem.link}
                        sx={{ paddingLeft: 4, '&:hover': { backgroundColor: '#2a2f45' } }}
                      >
                        <ListItemText primary={subItem.text} />
                      </ListItem>
                    ))}
                  </List>
                </Collapse>
              )}
            </React.Fragment>
          ))}
        </List>
      </Box>
    </Box>
  );
};

export default Sidebar;
