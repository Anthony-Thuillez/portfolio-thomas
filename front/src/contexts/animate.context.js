import React, { createContext, useReducer } from 'react'

export const AnimateContext = createContext([{}, () => {}])

const initState = {
  menuBtnIsFocus: false,
  sideMenuIsOpen: false,
  firstScroll: false
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_MENU_BTN_IS_FOCUS':
      return { ...state, menuBtnIsFocus: action.value }

    case 'SET_SIDE_MENU_IS_OPEN':
      return { ...state, sideMenuIsOpen: action.value }

    case 'SET_ON_FIRST_SCROLL':
      return { ...state, firstScroll: action.value }
  
    default:
      return state
  }
}

const AnimateContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initState)
  return (
    <AnimateContext.Provider value={{ state, dispatch }} >
      { children }
    </AnimateContext.Provider>
  )
}

export default AnimateContextProvider
