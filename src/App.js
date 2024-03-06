import './App.css';
import Router from "./router";
import Headers from "./header/header";
import Footer from "./footer/footer";

function App() {
  return (
    <div className="App">
      <Headers/>
      <Router/>
      <Footer/>
    </div>
  );
}

export default App;


