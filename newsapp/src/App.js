import Navbar from './Components/Navbar';
import News from './Components/News';
import {Routes, Route, BrowserRouter as Router } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'


function App() {
  let apiKey = process.env.REACT_APP_API_KEY
  return (
    <div className="App">
      <Router>
      <Navbar/>
        <Routes>
          <Route exact path='/' element={<News apiKey={process.env.REACT_APP_API_KEY} key="/" pageSize="15"/>}/>
          <Route exact path='/about' element={<News apiKey={process.env.REACT_APP_API_KEY} key="about" pageSize="15"/>}/>
          <Route exact path='/business' element={<News apiKey={apiKey} key="business"  pageSize="15" category="business"/>}/>
          <Route exact path='/entertainment' element={<News apiKey={apiKey} key="entertainment" pageSize="15" category="entertainment"/>}/>
          <Route exact path='/general' element={<News apiKey={apiKey} key="general" pageSize="15" category="general" />}/>
          <Route exact path='/health' element={<News apiKey={apiKey} key="health" pageSize="15" category="health"/>}/>
          <Route exact path='/science' element={<News apiKey={apiKey} key="science" pageSize="15" category="science"/>}/>
          <Route exact path='/sports' element={<News apiKey={apiKey} key="sports" pageSize="15" category="sports"/>}/>
          <Route exact path='/technology' element={<News apiKey={apiKey} key="technology" pageSize="15" category="technology"/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;