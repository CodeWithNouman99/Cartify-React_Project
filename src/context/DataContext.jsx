import { createContext, useContext, useState, useMemo } from "react";
import axios from "axios";

export const DataContext = createContext(null);

export const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);

  const fetchAllProducts = async () => {
    try {
      const response = await axios.get("https://dummyjson.com/products?limit=100");
      const ProductsData = response.data.products;
      setData(ProductsData);
    } catch (error) {
      console.log(error);
    }
  };

  const getUniqueCategory = (data, property) => {
    let newVal = data.map(curElem => curElem[property]);
    newVal = ["All",...new Set(newVal)];
    return newVal;
  };

  const categoryOnlyData = useMemo(() => getUniqueCategory(data, "category"), [data]);
  const brandOnlyData = useMemo(() => getUniqueCategory(data, "brand"), [data]);

  return (
    <DataContext.Provider value={{ data, setData, fetchAllProducts, categoryOnlyData,brandOnlyData }}>
      {children}
    </DataContext.Provider>
  );
};

export const getData = () => useContext(DataContext);