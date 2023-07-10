import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home.jsx";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <div className="app">
      <Navbar />
      <div className= "contentApp">
        <Home />
      </div>
      <Footer/>
    </div>
  );
}

export default App;
