import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Select,
  MenuItem,
} from "@mui/material";
import "./Header.css";
import {useNavigate} from "react-router-dom"
import { createTheme,ThemeProvider } from "@mui/material";
const Header = () => {

    const history = useNavigate()
    const darkTheme = createTheme({
        palette: {
         primary:{
            main: '#fff'
         },
         type: 'dark',   
        }
    })
  return (
    <ThemeProvider theme={darkTheme}>

    <AppBar color="transparent" position="static">
      <Container>
        <Toolbar>
          <Typography
            className="title"
            sx={{
              display: "flex",
              color: "gold",
              fontWeight: "bold",
              fontFamily: "Montserrat",
              cursor: "pointer",
            }}
            onClick={()=>{history("/")}}
          >
            Crypto Hunter
          </Typography>
          <Select
            variant="outlined"
            style={{
              width: 100,
              height: 40,
              marginLeft: 15,
              color:'white'
            }}
          >
            <MenuItem value={"USD"}>USD</MenuItem>
            <MenuItem value={"INR"}>INR</MenuItem>
          </Select>
        </Toolbar>
      </Container>
    </AppBar>
    </ThemeProvider>
  );
};

export default Header;
