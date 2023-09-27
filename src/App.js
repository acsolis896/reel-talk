// src/App.js

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import DisplayNameLocationPhotoAdd from './DisplayNameLocationPhotoAdd';
import BirthdaySelection from './BirthdaySelection';
import GenreSelection from './GenreSelection';
import Top5MovieSelection from './Top5MovieSelection';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/location" component={DisplayNameLocationPhotoAdd} />
        <Route path="/birthday" component={BirthdaySelection} />
        <Route path="/genre" component={GenreSelection} />
        <Route path="/movies" component={Top5MovieSelection} />
        {/* Add a default route for the initial onboarding page */}
        <Route path="/" component={DisplayNameLocationPhotoAdd} />
      </Switch>
    </Router>
  );
}

export default App;
