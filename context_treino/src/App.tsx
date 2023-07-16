import Component1 from "./components/Component1";
import Component2 from "./components/Component2";
import MyProvider from "./context/MyProvider";

export default function App() {
  return (
    <MyProvider>
      <Component1 />
      <Component2 />
    </MyProvider>
  )
}
