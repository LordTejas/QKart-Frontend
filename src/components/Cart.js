import {
  AddOutlined,
  RemoveOutlined,
  ShoppingCart,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import { Typography } from "@mui/material";
import { Button, IconButton, Stack } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useHistory } from "react-router-dom";
import "./Cart.css";

// Definition of Data Structures used
/**
 * @typedef {Object} Product - Data on product available to buy
 * 
 * @property {string} name - The name or title of the product
 * @property {string} category - The category that the product belongs to
 * @property {number} cost - The price to buy the product
 * @property {number} rating - The aggregate rating of the product (integer out of five)
 * @property {string} image - Contains URL for the product image
 * @property {string} _id - Unique ID for the product
 */

/**
 * @typedef {Object} CartItem -  - Data on product added to cart
 * 
 * @property {string} name - The name or title of the product in cart
 * @property {string} qty - The quantity of product added to cart
 * @property {string} category - The category that the product belongs to
 * @property {number} cost - The price to buy the product
 * @property {number} rating - The aggregate rating of the product (integer out of five)
 * @property {string} image - Contains URL for the product image
 * @property {string} productId - Unique ID for the product
 */

/**
 * Returns the complete data on all products in cartData by searching in productsData
 *
 * @param { Array.<{ productId: String, qty: Number }> } cartData
 *    Array of objects with productId and quantity of products in cart
 * 
 * @param { Array.<Product> } productsData
 *    Array of objects with complete data on all available products
 *
 * @returns { Array.<CartItem> }
 *    Array of objects with complete data on products in cart
 *
 */
export const generateCartItemsFrom = (cartData, productsData) => {
  if (productsData.length === 0) return [];

  let cartItems = [];

  cartData.forEach(cartItem => {
    const cartItemData = productsData.find(productData => productData._id === cartItem.productId);
    cartItems.push({...cartItemData, ...cartItem});
  });

  return cartItems;
};

/**
 * Get the total value of all products added to the cart
 *
 * @param { Array.<CartItem> } items
 *    Array of objects with complete data on products added to the cart
 *
 * @returns { Number }
 *    Value of all items in the cart
 *
 */
export const getTotalCartValue = (items = []) => {
  if (items) {
    return items.reduce((acc, curr) => acc + (curr.cost * curr.qty), 0);
  }

  return 0;
};


// TODO: CRIO_TASK_MODULE_CHECKOUT - Implement function to return total cart quantity
/**
 * Return the sum of quantities of all products added to the cart
 *
 * @param { Array.<CartItem> } items
 *    Array of objects with complete data on products in cart
 *
 * @returns { Number }
 *    Total quantity of products added to the cart
 *
 */

export const getTotalItems = (items = []) => {
  if (!items) return 0;
  return items.reduce((acc, curr) => acc + curr.qty, 0);
};

// TODO: CRIO_TASK_MODULE_CHECKOUT - Add static quantity view for Checkout page cart
/**
 * Component to display the current quantity for a product and + and - buttons to update product quantity on cart
 * 
 * @param {Number} value
 *    Current quantity of product in cart
 * 
 * @param {Function} handleAdd
 *    Handler function which adds 1 more of a product to cart
 * 
 * @param {Function} handleDelete
 *    Handler function which reduces the quantity of a product in cart by 1
 * 
 * @param {Boolean} isReadOnly
 *    If product quantity on cart is to be displayed as read only without the + - options to change quantity
 * 
 */
const ItemQuantity = ({
  value,
  handleAdd,
  handleDelete,
  isReadOnly
}) => {

  return (
    <Stack direction="row" alignItems="center">
      {
        !isReadOnly
        &&
        <IconButton size="small" color="primary" onClick={handleDelete}>
          <RemoveOutlined />
        </IconButton>
      }
      <Box padding="0.5rem" data-testid="item-qty">
        {isReadOnly ? `Qty: ${value}`: value}
      </Box>
      {
        !isReadOnly
        &&
        <IconButton size="small" color="primary" onClick={handleAdd}>
          <AddOutlined />
        </IconButton>
      }
    </Stack>
  );
};

/**
 * Component to display the Cart view
 * 
 * @param { Array.<Product> } products
 *    Array of objects with complete data of all available products
 * 
 * @param { Array.<Product> } items
 *    Array of objects with complete data on products in cart
 * 
 * @param {Function} handleDelete
 *    Current quantity of product in cart
 * 
 * @param {Boolean} isReadOnly
 *    If product quantity on cart is to be displayed as read only without the + - options to change quantity
 * 
 */
const Cart = ({
  products,
  items = [],
  handleQuantity,
  isReadOnly
}) => {

  const history = useHistory();
  
  // console.log(products);
  // console.log(items);

  if (!items.length) {
    return (
      <Box className="cart empty">
        <ShoppingCartOutlined className="empty-cart-icon" />
        <Box color="#aaa" textAlign="center">
          Cart is empty. Add more items to the cart to checkout.
        </Box>
      </Box>
    );
  }

  // items = generateCartItemsFrom(items, products);

  const CartItemView = (cartItem, isReadOnly) => (
  <Box display="flex" alignItems="flex-start" padding="1rem" key={cartItem.productId}>
      <Box className="image-container">
          <img
              src={cartItem.image}
              alt={cartItem.name}
              width="100%"
              height="100%"
          />
      </Box>
      <Box
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
          height="6rem"
          paddingX="1rem"
      >
          <div>{cartItem.name}</div>
          <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
          >
            {
              isReadOnly 
              ?
                <ItemQuantity
                value={cartItem.qty}
                isReadOnly
                />
              :
                <ItemQuantity
                value={cartItem.qty}
                handleAdd={() => handleQuantity(localStorage.getItem("token"), null, null, cartItem.productId, cartItem.qty + 1)}
                handleDelete={() => handleQuantity(localStorage.getItem("token"), null, null, cartItem.productId, cartItem.qty - 1)}
                />
            }

            <Box padding="0.5rem" fontWeight="700">
                ${cartItem.cost}
            </Box>
          </Box>
      </Box>
  </Box>
  );

  const CartItemsViewList = (cartItems, isReadOnly) => cartItems.map((cartItem) => CartItemView(cartItem, isReadOnly));

  return (
    <>
      <Box className="cart">
        {CartItemsViewList(items, isReadOnly)}
        <Box
          padding="1rem"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Box color="#3C3C3C" alignSelf="center">
            Order total
          </Box>
          <Box
            color="#3C3C3C"
            fontWeight="700"
            fontSize="1.5rem"
            alignSelf="center"
            data-testid="cart-total"
          >
            ${getTotalCartValue(items)}
          </Box>
        </Box>
        
        {
        !isReadOnly
        &&
        <Box display="flex" justifyContent="flex-end" className="cart-footer">
          <Button
            color="primary"
            variant="contained"
            startIcon={<ShoppingCart />}
            className="checkout-btn"
            onClick={() => history.push("/checkout")}
          >
            Checkout
          </Button>
        </Box>
        }

      </Box>

      {
        isReadOnly
        &&
        <Box className="cart">
          
          <Box
          padding="1rem"
          >

            <Box
            my={2}
            fontWeight="700"
            fontSize="1.4rem"
            alignSelf="flex-start">
              Order Details
            </Box> 

            <Box
            marginBottom="0.5rem"
            display="flex"
            justifyContent="space-between"
            alignItems="center">
              <Typography variant="body1">Products</Typography>  
              <Typography variant="body1">{getTotalItems(items)}</Typography>  
            </Box>

            <Box
            marginBottom="0.5rem"
            display="flex"
            justifyContent="space-between"
            alignItems="center">
              <Typography variant="body1">Subtotal</Typography>  
              <Typography variant="body1">${getTotalCartValue(items)}</Typography>  
            </Box>

            <Box
            marginBottom="0.5rem"
            display="flex"
            justifyContent="space-between"
            alignItems="center">
              <Typography variant="body1">Shipping Charges</Typography>  
              <Typography variant="body1">$0</Typography>  
            </Box>

            <Box
            mb={1}
            fontWeight="700"
            fontSize="1.2rem"
            display="flex"
            justifyContent="space-between"
            alignItems="center">
              <Box>Total</Box>  
              <Box>${getTotalCartValue(items)}</Box>  
            </Box>
          

          </Box>
        </Box>  

          
      }
    </>
  );
};

export default Cart;
