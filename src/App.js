import "./App.css";
import Header from "./components/header/Header";
import Menu from "./components/menu/Menu";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="header">
          <Header />
        </div>
        <div className="middle">
          <Menu />
          <Main />
        </div>
        <div className="footer">
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
