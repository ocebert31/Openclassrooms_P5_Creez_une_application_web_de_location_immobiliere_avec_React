import './App.css';
import Router from "./router";
import Headers from "./header/header";
import Footer from "./footer/footer";
import FetchData from "../src/recuperation-donnee/fetch";

function App() {
  return (
    <div className="App">
      <Headers/>
      <FetchData />
      <Router/>
      <Footer/>
    </div>
  );
}

export default App;


