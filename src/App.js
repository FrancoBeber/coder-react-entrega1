import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/item" element={<ItemDetailContainer />} />
        <Route path="/genero/:catId" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        <Route path="/inicio" element={<ItemListContainer />} />
        <Route path="*" element={<h1>404: Recurso no encontrado</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
