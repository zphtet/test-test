"use client";
import {
  createContext,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";

const initialState = {
  isAllSelected: false,
  pageIndex: 0,
  prevIndex: 0,
};
type StateType = typeof initialState;

type ProviderType = {
  state: StateType;
  setState: React.Dispatch<SetStateAction<StateType>>;
};

const TableContext = createContext<ProviderType | null>(null);

export const TableContextProvider = ({ children }: { children: ReactNode }) => {
  const [state, setState] = useState(initialState);
  const value = { state, setState };
  return (
    <TableContext.Provider
      value={{
        state: state,
        setState: setState,
      }}
    >
      {children}
    </TableContext.Provider>
  );
};

export const useTableContext = () => {
  const context = useContext(TableContext);
  if (!context) {
    throw new Error(
      "useTableContext must be used within a TableContextProvider"
    );
  }
  return context;
};
