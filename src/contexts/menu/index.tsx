import { FC, createContext, useState, useCallback } from "react";

import { Props } from "./types";

export const MenuContext = createContext({
  isOpen: false,
  selected: 0,
  toggleMenu: () => {},
  selectMenu: (index: number) => {index}
});

export const MenuProvider: FC<Props> = ({ children }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selected, setSelected] = useState<number>(0);

  const toggleMenu = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const selectMenu = useCallback((index: number) => {
    setSelected(index);
  }, []);

  return (
    <MenuContext.Provider value={{ isOpen, selected, toggleMenu, selectMenu }}>
      {children}
    </MenuContext.Provider>
  );
};