import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Mainpage from './component/Mainpage';
import Formpage from './component/Formpage';

function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
        <Route path='/' element={<Mainpage/>}/>
        <Route path='/Formpage' element={<Formpage/>}/>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
