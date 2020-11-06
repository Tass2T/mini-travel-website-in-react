import Footer from "./Footer";
import Home from "./Home";
import logo from './logo.png'
const { default: Header } = require("./Header");


function App() {
  return (
    <div className="App">
      <Header logo={logo}/>
      <Home />
      <Footer logo={logo}/>
    </div>
  );
}

export default App;
