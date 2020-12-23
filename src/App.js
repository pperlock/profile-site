import react from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import './App.scss';

import Intro from './pages/Intro/Intro';
import Home from './pages/Home/Home';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Intro}/>
                <Route path="/home" component={Home}/>
            </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
