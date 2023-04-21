import Start from "./src/pages/Start";
import Rules from "./src/pages/Rules";
import { StatusBar,View, Text } from "react-native";

export default function App() {
  return (
    <>
      <StatusBar color="light" />
      <Rules/>
    </>
  )
}