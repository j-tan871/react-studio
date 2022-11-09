import React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

const CartItem = (props) => {
  return (
    <ListItem>
      <ListItemText primary={`${props.name}: ${props.price}`} />
    </ListItem>
  )
}

export default CartItem;