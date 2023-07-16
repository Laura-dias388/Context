import { createContext } from "react";
import { MyContextType } from "../interface/ContextInterface";

const context = createContext<MyContextType>({});

export default context;
