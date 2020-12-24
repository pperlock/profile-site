import react from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import './App.scss';

import Intro from './pages/Intro/Intro';
import About from './pages/About/About';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Intro}/>
                <Route path="/about" render={(props)=>(<About {...props}/>)}/>
            </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
