import { FC, createContext, useState, useCallback } from "react";

import { Props } from "./types";

export const MenuContext = createContext({ isOpen: false, toggleMenu: () => {} });

export const MenuProvider: FC<Props> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  return (
    <MenuContext.Provider value={{ isOpen, toggleMenu }}>
      {children}
    </MenuContext.Provider>
  );
};