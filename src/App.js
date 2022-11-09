import "./App.css";
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";
import React from 'react';
import BakeryItem from './components/BakeryItem';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import CartItem from './components/CartItem';

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0.0);

  const addToCart = (bakeryItem) => {
    setCart([...cart, bakeryItem])
    setTotalPrice(totalPrice + bakeryItem.price)
  }

  return (
    <div className="App">
      <Box p={2} m={2}>
        <Typography variant="h1">My Bakery</Typography> {/* TODO: personalize your bakery (if you want) */}

        <Grid container spacing={2}>
          {bakeryData.map((item, index) => (
            <Box p={2} m={2}>
              <Grid item>
                <BakeryItem
                  key={index}
                  name={item.name}
                  price={item.price}
                  description={item.description}
                  image={item.image}
                  onClick={addToCart}
                />
              </Grid>
            </Box>
          ))}
        </Grid>

        <div>
          <Typography variant="h2">Cart</Typography>
          <List>
            {cart.map((item, index) => (
              <CartItem
                key={index}
                name={item.name}
                price={item.price}
              />
            ))}
          </List>
          <Typography variant="p">Total: {totalPrice}</Typography>
        </div>
      </Box>
    </div>
  );
}

export default App;
