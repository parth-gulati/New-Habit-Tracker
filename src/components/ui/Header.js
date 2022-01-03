import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import { styled } from "@mui/system";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { makeStyles } from "@mui/styles";
import logo from "../../assets/spiderman.svg";

const pages = ["Tracker", "Stats", "About"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const StyledTab = styled(Tab)(({ theme }) => ({
  fontFamily: "Montserrat",
  fontWeight: 300,
  textTransform: "none",
  color: theme.palette.common.white,
  "&.Mui-selected": {
    color: theme.palette.common.white,
    fontWeight: theme.typography.fontWeightMedium,
  },
}));

const LogoContainer = styled(IconButton)(({ theme }) => ({
  height: "2rem",
  color: theme.palette.common.pitchBlack,
}));

const StyledDiv = styled(`div`)(({theme})=>({
  ...theme.mixins.toolbar,
  marginBottom: "1em",
  [theme.breakpoints.down("md")]: {
    marginBottom: "1em"
  },
  [theme.breakpoints.down("xs")]: {
    marginBottom: "1em"
  }
  
}))

const StyledTabsContainer = styled(Tabs)(({ theme }) => ({
  marginLeft: "auto",
  marginRight: "4rem",
  "& .MuiTabs-indicator": {
    backgroundColor: theme.palette.common.white,
    opacity: 0.4,
  },
}));

const StyledMenu = styled(Menu)(({ theme }) => ({
  "& .MuiPaper-root": {
    backgroundColor: theme.palette.common.red,
    color: theme.palette.common.white,
    ...theme.typography.tab,
    fontFamily: "Montserrat",
    borderRadius: "0px",
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
  },
  "& .MuiMenuItem-root": {
    ...theme.typography.tab,
    minWidth: 40,
    textAlign: 'center'
  },
}));

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [currentTab, setCurrentTab] = React.useState(0);

  const setHandleChange = (e, value) => {
    setCurrentTab(value);
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <>
    <AppBar position="fixed" color="primary">
      <Container maxWidth="xl">
        <Toolbar disableGutters={false}>
          <LogoContainer
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
          >
            <img style={{ height: "inherit" }} alt="Spiderman" src={logo} />
          </LogoContainer>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
          >
            Habit Tracker
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <StyledMenu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  {page}
                </MenuItem>
              ))}
            </StyledMenu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <LogoContainer
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
            >
              <img style={{ height: "inherit" }} alt="Spiderman" src={logo} />
            </LogoContainer>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <StyledTabsContainer
              value={currentTab}
              onChange={setHandleChange}
              indicatorColor="primary"
            >
              {pages.map((page) => (
                <StyledTab key={page} label={page} onClick={handleCloseNavMenu}/>
              ))}
            </StyledTabsContainer>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar
                  sx={{ bgcolor: `#B11313` }}
                  alt="Remy Sharp"
                  src="/static/images/avatar/2.jpg"
                />
              </IconButton>
            </Tooltip>
            <StyledMenu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseNavMenu}>
                  {setting}
                </MenuItem>
              ))}
            </StyledMenu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
    <StyledDiv />
    </>
  );
};
export default ResponsiveAppBar;
