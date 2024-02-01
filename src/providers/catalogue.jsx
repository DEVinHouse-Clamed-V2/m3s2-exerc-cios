import { createContext, useState } from "react";

//context
export const CatalogueContext = createContext([]);

//provider
export const CatalogueProvider = ({ children }) => {
  const [catalogue, setCatalogue] = useState([
    { name: "Book", price: 20 },
    { name: "T-shirt", price: 50 },
    { name: "Banana", price: 3 },
  ]);

  //adicionar
  const addToCatalogue = (item) => {
    setCatalogue([...catalogue, item]);
  };

  //remover
  const removeFromCatalogue = (item) => {
    const newCatalogue = catalogue.filter(
      (itemOnCatalogue) => itemOnCatalogue.name !== item.name
    );

    setCatalogue(newCatalogue);
  };

  return (
    <CatalogueContext.Provider
      value={{ catalogue, addToCatalogue, removeFromCatalogue }}
    >
      {children}
    </CatalogueContext.Provider>
  );
};
