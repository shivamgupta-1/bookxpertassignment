import { createContext } from "react";
import Store from "./store";
import { useContext } from "react";



export const Rootstore = {
    // add other stores here
    store: new Store(),
};

export const StoreContext = createContext(Rootstore);
export const useStore = () => useContext(StoreContext);