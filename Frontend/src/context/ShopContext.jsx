import { createContext } from "react";
import { cardData, creditCardData, issueSubMenu } from "../assets/assets";

export const ShopContext = createContext();

const value = {
    issueSubMenu,
    cardData,
    creditCardData
};

const ShopContextProvider = (props) => {
  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  )
};

export default ShopContextProvider