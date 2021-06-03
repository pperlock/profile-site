import {BrowserRouter, Route, Switch} from 'react-router-dom';

import { HTML5Backend } from 'react-dnd-html5-backend';
import { TouchBackend } from 'react-dnd-touch-backend';

import { DndProvider, TouchTransition, MouseTransition, Preview} from 'react-dnd-multi-backend';

import objectAssign from 'object-assign';

import './styles/globalstyles.scss';
import './styles/globalimports.scss';
import './styles/trailMarkers.scss';

import Intro from './pages/Intro/Intro';
import MainPage from './pages/MainPage/MainPage';

export const HTML5toTouch = {
  backends: [
    {
      id: 'html5',
      backend: HTML5Backend,
      transition: MouseTransition,
    },
    {
      id: 'touch',
      backend: TouchBackend,
      options: {enableMouseEvents: true},
      preview: true,
      transition: TouchTransition,
    },
  ],
}

// const generatePreview = ({itemType, item, style}) => {
//   console.log(item);
//     // return <div className="dnd" style={{ backgroundColor: 'red' }}>{itemType}</div>;
//     return <img className={`skills__icon ${item.skill}`} style={style}/>;
// };

const generatePreview= ({itemType, item, style}) => {
  objectAssign(style, {backgroundColor: 'red', width: '50px', height: '50px'});
  return <div style={style}>Generated {itemType}</div>;
}

function App() {
  return (
    // <DndProvider backend={HTML5Backend}>
    <DndProvider options={HTML5toTouch}>
      <Preview generator={generatePreview} />
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
