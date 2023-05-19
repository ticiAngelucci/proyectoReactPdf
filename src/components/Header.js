import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import logo from "../img/logo.png";

export default function MenuAppBar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ backgroundColor: "#48c1f4 !important" }}>
                <Toolbar sx={{ flexDirection: { xs: 'column', sm: 'row' }, maxWidth: { sm: "500px",md:"900px", lg: "1200px" }, width: { md: "100%" }, margin: "auto" }} >
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2, margin: { xs: "auto",sm: 0 } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <img src={logo} alt="logo" width="140px" />
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Firma Ciudadana
                    </Typography>

                    <div>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            sx={{ color: "white !important" }}
                        >
                            <AccountCircle sx={{ backgroundColor: "transparent !important" }} />
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
        </Box>
    );
}