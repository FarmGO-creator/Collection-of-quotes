import React from 'react';
import {AppBar, MenuItem, MenuList, Toolbar, Typography} from "@mui/material";
import {NavLink} from "react-router-dom";
import './NavBar.css'

const NavBar = () => {
  return (
    <AppBar sx={{position: 'relative'}} component="nav">
      <Toolbar>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
        >Сборник цитат</Typography>

        <MenuList sx={{display: 'flex'}}>

          <MenuItem>
            <NavLink className='link' to='/'>Цитаты</NavLink>
          </MenuItem>

          <MenuItem>
            <NavLink className='link' to='/createQuote'>Создать цитату</NavLink>
          </MenuItem>

        </MenuList>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;