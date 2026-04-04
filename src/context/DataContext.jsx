import { createContext, useContext, useState } from "react";
import axios from "axios";

export const DataContext = createContext(null);

export const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);

  const fetchAllProducts = async () => {
    try {
      const response = await axios.get("https://dummyjson.com/products");
      const ProductsData = response.data.products;
      setData(ProductsData);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <DataContext.Provider value={{ data, setData, fetchAllProducts }}>
      {children}
    </DataContext.Provider>
  );
};
export const getData=()=> useContext(DataContext)