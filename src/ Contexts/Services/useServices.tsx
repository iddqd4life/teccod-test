import {createContext, useContext} from "react";
import type ServicesContextType from "./types.tsx";

export const ServiceContext = createContext<ServicesContextType | null>(null);

export const useServices = (): ServicesContextType => {
    const context = useContext<ServicesContextType | null>(ServiceContext);
    if (!context) throw new Error("forgot ServiceProvider, dummy");
    return context;
}