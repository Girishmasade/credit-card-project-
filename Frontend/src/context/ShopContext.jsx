import { createContext } from "react";
import { cardData, issueSubMenu } from "../assets/assets";

export const ShopContext = createContext();

const value = {
    issueSubMenu,
    cardData
};

const ShopContextProvider = (props) => {
  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  )
};

export default ShopContextProvider