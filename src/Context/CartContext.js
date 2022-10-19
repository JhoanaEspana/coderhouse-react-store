import React, { createContext } from 'react'

export const Context = createContext([]);

export const CustomProvider = ({ children }) => {
  return (
    <Context.Provider value={{}}>{ children }</Context.Provider>
  )
}

