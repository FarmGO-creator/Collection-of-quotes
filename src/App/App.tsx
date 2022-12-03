import React from 'react';
import {Box, Paper} from "@mui/material";
import {Route, Routes} from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";
import Quotes from "../containers/Quotes/Quotes";
import CreateQuote from "../containers/CreateQuote/CreateQuote";
import EditQuote from "../containers/EditQuote/EditQuote";
import AsideBar from "../components/AsideBar/AsideBar";

function App() {
  return (
    <>
      <header>
        <NavBar/>
      </header>

      <Box className="wrapper" sx={{display: 'flex'}}>
        <Box component='aside' sx={{width: '400px', flexShrink: 1, height: '90vh'}}>
          <Paper sx={{height: '100%'}} elevation={3}>
            <AsideBar/>
          </Paper>
        </Box>
        <Box component='main' sx={{flexGrow: 1, height: '90vh'}}>
          <Paper sx={{height: '100%'}} elevation={5}>
            <Routes>
              <Route path='/quotes/:name' element={(
                <Quotes/>
              )} />
              <Route path='/' element={(
                <Quotes/>
              )}/>
              <Route path='/CreateQuote' element={(
                <CreateQuote/>
              )}/>
              <Route path='/EditQuote/:id' element={(
                <EditQuote/>
              )}/>
            </Routes>
          </Paper>
        </Box>
      </Box>
    </>
  );
}

export default App;
