import { useContext } from "react";
import context from "../context/MyContext";

export default function Component1() {
  const { state } = useContext(context);
  return (
    <div>
      <p>Component1</p>
      <span>{state}</span>
    </div>
  )
}
