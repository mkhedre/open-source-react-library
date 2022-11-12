import React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { Link } from 'react-router-dom';
const ListItemElement = ({ text, icon, route }) => {
  return (
    <ListItem key={text} component={Link} to={route}>
      <ListItemButton>
        <ListItemIcon>{React.createElement(icon)}</ListItemIcon>
        <ListItemText primary={text} />
      </ListItemButton>
    </ListItem>
  );
};

export default ListItemElement;
