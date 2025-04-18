import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Outlet } from 'react-router-dom';

const drawerWidth = 240;



export default function ResponsiveDrawer() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      {/* ヘッダ */}
      <AppBar
        position="fixed"
        sx={{
        //   width: { sm: `calc(100% - ${drawerWidth}px)` },
        // ml: { sm: `${drawerWidth}px` },
          width: "100%",
          ml: 0,
          height: 40,
          backgroundColor: "#191e25",
          boxShadow: "none",
        }}
      >
        <Toolbar sx={{ height: "100%", display: "flex", alignItems: "flex-start" }}>
          {/* <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton> */}
          <Typography variant="h6" noWrap component="div" sx={{ textAlign: "left", flexGrow: 1, mt: "5px" }}>
            Sensor Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      
      {/* サイドバー */}
      {/* <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      > */}
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        {/* <Drawer
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          slotProps={{
            root: {
              keepMounted: true, // Better open performance on mobile.
            },
          }}
        >
          {drawer}
        </Drawer> */}
        {/* <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer> */}
      {/* </Box> */}
      
      {/* ボディ */}
      <Box
        component="main"
        sx={{ 
            flexGrow: 1, 
            p: 3, 
            //   width: { sm: `calc(100% - ${drawerWidth}px)` }
            width: "100%", // 幅を明示的に指定
            display: "flex", // Outlet の中のコンテンツを正しく配置
            justifyContent: "center", // 中央揃えに
            alignItems: "flex-start", // 上から配置
            }}
      >
        <Toolbar />
        <Box sx={{ width: "100%", maxWidth: "1200px" }}> {/* コンテンツ幅を適切に */}
            <Outlet />
        </Box>
      </Box>
    </Box>
  );
}
