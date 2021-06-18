import './App.css';
import Home from './components/pages/Home'
import About from './components/pages/About'
import Posts from './components/pages/Posts'
import Contact from './components/pages/Contact'
import NotFound from './components/pages/NotFound'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/posts" component={Posts} />
          <Route exact path="/contact" component={Contact} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
