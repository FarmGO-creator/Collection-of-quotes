import React from 'react';
import {Avatar, Divider, List, ListItem, ListItemAvatar} from "@mui/material";
import FolderIcon from "@mui/icons-material/Folder";
import {NavLink} from "react-router-dom";
import './AsideBar.css';

const AsideBar = () => {
  return (
    <List>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <FolderIcon />
          </Avatar>
        </ListItemAvatar>
        <NavLink className='link-Aside' to='/'>All</NavLink>
      </ListItem>

      <Divider />

      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <FolderIcon />
          </Avatar>
        </ListItemAvatar>
        <NavLink className='link-Aside'  to='/quotes/star-wars'>Star Wars</NavLink>
      </ListItem>

      <Divider />

      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <FolderIcon />
          </Avatar>
        </ListItemAvatar>
        <NavLink className='link-Aside' to='/quotes/famous-people'>Famous people</NavLink>
      </ListItem>

      <Divider />

      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <FolderIcon />
          </Avatar>
        </ListItemAvatar>
        <NavLink className='link-Aside' to='/quotes/saying'>Saying</NavLink>
      </ListItem>

      <Divider />

      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <FolderIcon />
          </Avatar>
        </ListItemAvatar>
        <NavLink className='link-Aside' to='/quotes/humour'>Humour</NavLink>
      </ListItem>

      <Divider />

      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <FolderIcon />
          </Avatar>
        </ListItemAvatar>
        <NavLink className='link-Aside' to='/quotes/motivational'>Motivational</NavLink>
      </ListItem>

      <Divider />
    </List>
  );
};

export default AsideBar;