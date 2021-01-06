import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';
import Homepage from '../../pages/Homepage/Homepage';
import ProjectPortfolio from '../../pages/ProjectPortfolio';
import Contact from '../../pages/Contact';
import './App.css';

const App = () => {
  return (
    <Router>
      <Header />
      <div>
        <Switch>
          <Route exact path='/' component={ Homepage } />
          <Route exact path='/portfolio' component={ ProjectPortfolio } />
          <Route exact path='/contact' component={ Contact } />
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
