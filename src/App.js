import {BrowserRouter, Route, Switch} from 'react-router-dom';

import './App.scss';

import Intro from './pages/Intro/Intro';
import About from './pages/About/About';
import Skills from './pages/Skills/Skills';
import Experience from './pages/Experience/Experience';
import Projects from './pages/Projects/Projects';
import Contact from './pages/Contact/Contact';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Intro}/>
                <Route path="/about" render={(props)=>(<About {...props}/>)}/>
                <Route path="/skills" render={(props)=>(<Skills {...props}/>)}/>
                <Route path="/experience" render={(props)=>(<Experience {...props}/>)}/>
                <Route path="/projects" render={(props)=>(<Projects {...props}/>)}/>
                <Route path="/contact" render={(props)=>(<Contact {...props}/>)}/>
            </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
