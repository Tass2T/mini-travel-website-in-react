import Footer from "./Footer";
import Home from "./Home";
import logo from './logo.png'
import Header from './Header'
import {Route, Switch} from 'react-router-dom'
import Services from "./Services";
import About from './About'
import Error404 from './Error404'


function App() {
  return (
    <div className="App">
      <Header logo={logo}/>
      <div className="content">
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/services" component={Services}/>
        <Route path="/about" component={About}/>
        <Route path="*" component={Error404}/>
      </Switch>
      </div>
      <Footer logo={logo}/>
    </div>
  );
}

export default App;
