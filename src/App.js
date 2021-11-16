//import logo from './logo.svg';
import "./App.css";
import Navbar from "./navbar/navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductsScreen from "./pages/ProductsScreen";
import AboutScreen from "./pages/AboutScreen";
import HomeScreen from "./pages/HomeScreen";
import 'tachyons'
function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     {/* <img src={logo} className="App-logo" alt="logo" /> */}
    //     <Navbar />
    //   </header>
    // </div>
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<HomeScreen/>} />
          <Route exact path="/products" element={<ProductsScreen/>} />
          <Route exact path="/about" element={<AboutScreen/>} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
