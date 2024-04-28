"use client";
import {
  createContext,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";
type StateType = {
  isAllSelected: boolean;
  unselectedRowIds: [] | number[];
  unselectMode: boolean;
};

const initialState: StateType = {
  isAllSelected: false,
  unselectedRowIds: [],
  unselectMode: false,
};

// type ProviderType = {
//   state: StateType;
//   setState: React.Dispatch<SetStateAction<StateType>>;
// };
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
