"use client";
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";
interface Menu {
  openMenu: boolean;
  classMenu: "" | "open";
  classNavbar: "" | "moveMenu";
}
interface ContextMenu {
  menu: Menu;
  setMenu?: Dispatch<SetStateAction<Menu>>;
}

const initialValues: Menu = {
  openMenu: false,
  classMenu: "",
  classNavbar: "moveMenu",
};
export const MenuContext = createContext<ContextMenu>({ menu: initialValues });

export const MenuContextProvider = ({ children }: { children: ReactNode }) => {
  const [menu, setMenu] = useState<Menu>(initialValues);
  return (
    <MenuContext.Provider value={{ menu, setMenu }}>
      {children}
    </MenuContext.Provider>
  );
};
export const useMenuContext = () => {
  return useContext(MenuContext);
};
