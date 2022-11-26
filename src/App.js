import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

function App() {
  return (
    <>
      <Header />
      <ItemListContainer saludo="Bienvenidos!!!" />
    </>
  );
}

export default App;
