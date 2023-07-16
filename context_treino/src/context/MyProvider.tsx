import { ReactNode, useState } from "react";
import context from "./MyContext";

export default function MyProvider({ children }: { children: ReactNode}) {
  const [state] = useState('valor aleatorio');
  const globalState = {// global
    state,
  };

  return (
    <context.Provider value={globalState}>
      {children}
    </context.Provider>
  );
}
