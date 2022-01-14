import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Basket from "./Components/Main/Basket/Basket";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/basket" element={<Basket />} />
          <Route path="*" />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
