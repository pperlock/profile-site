import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {HTML5Backend} from 'react-dnd-html5-backend';
import {DndProvider} from 'react-dnd';

import './App.scss';


import Intro from './pages/Intro/Intro';
import MainPage from './pages/MainPage/MainPage';


function App() {
  return (
    <DndProvider backend={HTML5Backend}>
    <div className="app">
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Intro}/>
                <Route path="/main" render={(props)=>(<MainPage {...props}/>)}/>
            </Switch>
        </BrowserRouter>
    </div>
    </DndProvider>
  );
}

export default App;
