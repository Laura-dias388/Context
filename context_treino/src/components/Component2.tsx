import { useContext } from "react";
import context from "../context/MyContext";

export default function Component2() {
  const { state } = useContext(context);

  return (
    <div>
      Component2
      { state }
    </div>
  )
}
