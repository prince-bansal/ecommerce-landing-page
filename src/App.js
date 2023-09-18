import logo from "./logo.svg";
import "./App.css";
import MySlider from "./components/MySlider";
import Products from "./components/Products";
import Why from "./components/Why";
import Footer from "./components/Footer";
import Choose from "./components/Choose";
import Search from "./components/Search";
function App() {
  return (
    <div className="App overflow-hidden">
      <div className="max-w-[80%] m-auto">
        <MySlider />
        <Products />
        <Why />
        <Choose />
        <Search />
        <Footer />
      </div>
    </div>
  );
}

export default App;
