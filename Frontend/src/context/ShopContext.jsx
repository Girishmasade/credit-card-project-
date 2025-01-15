import { createContext } from "react";
import { blogData, cardData, creditCardData, issueSubMenu } from "../assets/assets";

export const ShopContext = createContext();

const value = {
    issueSubMenu,
    cardData,
    creditCardData,
    blogData
};

const ShopContextProvider = (props) => {
  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  )
};

export default ShopContextProvider