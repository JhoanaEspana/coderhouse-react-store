import React, { createContext, useState } from 'react'

export const CartContext = createContext();

export const CustomProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [qty, setQty] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const cantidad = 0;
    const totalC = 0;
    cart.forEach(producto => {
      cantidad += producto.cantidad;
      totalC += (producto.price * producto.cantidad)
    });
    setQty(cantidad);
    setTotal(totalC);
  }, [cart]);
  
  const addItem = (producto, cantidad) => {
    console.log(`esta funcion se encarga de agregar ${cantidad} cantidades del producto ${producto} al carrito`);
  }

  const deleteItem = (id) => {
    setCart(cart.filter(producto => producto.id !== id));
    
    //const filtrado = cart.filter(producto => producto.id !== id);
    //setCart(filtrado);
  }

  const IsInCart = (id) => {
    return cart.some(producto => producto.id === id)
  }
  
  const clear = () => {
    setCart([]);
    setQty(0);
    setTotal(0);
  }

  return(  
    <CartContext.Provider value={{cart, qty, total, addItem, deleteItem, IsInCart, clear}}>
      { children }
    </CartContext.Provider>
  );
};

