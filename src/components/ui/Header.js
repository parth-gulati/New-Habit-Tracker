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
import { ToastContainer, toast } from "react-toastify";
import Avatar from "@mui/material/Avatar";
import { styled } from "@mui/system";
import { Link, useLocation } from "react-router-dom";
import { SwipeableDrawer, List, ListItem } from "@mui/material";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import logo from "../../assets/spiderman.svg";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { auth } from "../../firebase";
import { UserContext } from "../context/UserContext";

const pages = [
  { name: "Tracker", link: "/tracker" },
  { name: "Stats", link: "/stats" },
  { name: "About", link: "/about" },
];
const settings = ["Profile", "Account", "Logout"];

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

const StyledDiv = styled(`div`)(({ theme }) => ({
  ...theme.mixins.toolbar,
  marginBottom: "1em",
  [theme.breakpoints.down("md")]: {
    marginBottom: "1em",
  },
  [theme.breakpoints.down("xs")]: {
    marginBottom: "1em",
  },
}));

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
    textAlign: "center",
  },
}));

const StyledListItemText = styled(ListItemText)(({ theme }) => ({
  ...theme.typography.tab,
  color: theme.palette.common.white,
  textAlign: "center",
}));

const StyledListItemButton = styled(ListItemButton)(({ theme }) => ({
  minHeight: 50,
  "&.Mui-selected": {
    backgroundColor: theme.palette.common.darkRed
  }
}));

const StyledListItem = styled(ListItem)(({ theme }) => ({
  minWidth: 150,
  paddingLeft: "auto",
  "&.Mui-selected": {
    backgroundColor: theme.palette.common.darkRed
  }
}));

const StyledDrawer = styled(SwipeableDrawer)(({ theme }) => ({
  "& .MuiDrawer-paper": {
    backgroundColor: theme.palette.common.red,
  },
  "& .Mui-selected": {
    backgroundColor: theme.palette.common.darkRed,
  },
}));

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [currentTab, setCurrentTab] = React.useState(false);
  const [openDrawer, setOpenDrawer] = React.useState(false);
  const location = useLocation();
  const iOS =
    typeof navigator !== "undefined" &&
    /iPad|iPhone|iPod/.test(navigator.userAgent);

  React.useEffect(()=>{
    for(let i=0;i<=pages.length-1;i++){
      if(pages[i].link === location.pathname){
        setCurrentTab(i)
        return
      }
      setCurrentTab(false)
    }
  }, [location])

  const drawer = (
    <>
      <StyledDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
      >
        <List disablePadding>
          {pages.map((page, index) => (
            <StyledListItem
              selected={currentTab === index}
              component={Link}
              to={page.link}
              divider
              key={page.name}
              disablePadding
            >
              <StyledListItemButton
                onClick={() => {
                  setOpenDrawer(false);
                  setCurrentTab(index);
                }}
              >
                <StyledListItemText disableTypography primary={page.name} />
              </StyledListItemButton>
            </StyledListItem>
          ))}
        </List>
      </StyledDrawer>
    </>
  );

  const setHandleChange = (e, value) => {
    setCurrentTab(value);
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = (e) => {
    setOpenDrawer(false);
    console.log(e.target.innerText);
    setAnchorElNav(null);
    setAnchorElUser(null);
    if (e.target.innerText === "Logout") {
      setAnchorElNav(null);
      auth
        .signOut()
        .then((response) => {
          toast.success("Logged Out Successfully")
          console.log(response);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const user = React.useContext(UserContext);
  console.log(user);

  return (
    <>
    <ToastContainer/>
      <AppBar position="fixed" color="primary">
        <Container maxWidth="xl">
          <Toolbar disableGutters={false}>
            <LogoContainer
              size="large"
              component={Link}
              to="/"
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
              {user.loggedIn && (
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={() => setOpenDrawer(true)}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
              )}
              {drawer}
            </Box>
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <LogoContainer
                size="large"
                edge="start"
                component={Link}
                to="/"
                color="inherit"
                aria-label="menu"
              >
                <img style={{ height: "inherit" }} alt="Spiderman" src={logo} />
              </LogoContainer>
            </Box>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {user.loggedIn && (
                <StyledTabsContainer
                  value={currentTab}
                  onChange={setHandleChange}
                  indicatorColor="primary"
                >
                  {pages.map((page) => (
                    <StyledTab
                      component={Link}
                      to={page.link}
                      key={page.name}
                      label={page.name}
                      onClick={handleCloseNavMenu}
                    />
                  ))}
                </StyledTabsContainer>
              )}
            </Box>
            <Box sx={{ flexGrow: 0 }}>
              {user.loggedIn && (
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar
                      sx={{ bgcolor: `#B11313` }}
                      alt="Rando User"
                      src="/static/images/avatar/2.jpg"
                    />
                  </IconButton>
                </Tooltip>
              )}
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
