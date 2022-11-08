import React, { createContext, useState, useEffect } from 'react'

export const CartContext = createContext();

const localStorageCart = () => {
  const cartList = localStorage.getItem('shoppinglist')
  return cartList ? JSON.parse(cartList) : []
}

export const CustomProvider = ({ children }) => {
  const [cart, setCart] = useState(localStorageCart);
  const [cantidad, setCantidad] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    localStorage.setItem('shoppinglist', JSON.stringify(cart))

    let cantidad = 0;
    let totalC = 0;
    cart.forEach(producto => {
      cantidad += producto.cantidad;
      totalC += (producto.precio * producto.cantidad)
    });
    setCantidad(cantidad);
    setTotal(totalC);
  }, [cart]);
  
  const addItem = (producto, cantidad) => {
    if(isInCart(producto.id)){
      setCart(cart.map(item => {
        return item.id === producto.id ? {...item, cantidad: item.cantidad + cantidad } : item
      }));
    }else{
      setCart([...cart, {...producto, cantidad}]);
    }
    //console.log(`esta funcion se encarga de agregar ${cantidad} cantidades del producto ${producto} al carrito`);
  }

  // console.log('carrito', cart);
  // console.log('total', total);

  const deleteItem = (id) => {
    setCart(cart.filter(producto => producto.id !== id));
    
    //const filtrado = cart.filter(producto => producto.id !== id);
    //setCart(filtrado);
  }

  const isInCart = (id) => {
    return cart.some(producto => producto.id === id)
  }
  
  const clear = () => {
    setCart([]);
    setCantidad(0);
    setTotal(0);
  }

  return(  
    <CartContext.Provider value={{
      cart,
      cantidad,
      total,
      addItem,
      deleteItem,
      isInCart,
      clear
      }}>
        { children }
    </CartContext.Provider>
  );
};

