import { useState } from 'react';
import './App.css';
import About from './Components/About';
import Alert from './Components/Alert';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import {Route, Routes , BrowserRouter as Router, Link} from 'react-router-dom'

function App() {
  const[mode, setMode] = useState('light');
  const[alert,setAlert] = useState(null);
  const showAlert=(message,type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null);
    },4000);
  }
  function removeclasslist(){
    document.body.classList.remove('bg-success');
    document.body.classList.remove('bg-primary');
    document.body.classList.remove('bg-secondary');
    document.body.classList.remove('bg-info');
    document.body.classList.remove('bg-warning');
  }
  const toggleMode =(cls)=>{
    removeclasslist();
    if(cls === 'tg'){
      if(mode === 'dark'){
        setMode('light');
        document.body.style.background = 'white';
        showAlert('light mode enable',"Succes");
        document.title = 'Home-Light Mode';
      }else{
        setMode('dark');
        document.body.style.background = 'grey';
        showAlert('dark mode enable',"Succes");
        document.title = `Home-Dark Mode`;
      }
    }else{
    document.body.classList.add('bg-'+cls);
    showAlert(`${cls}mode enable`,"Succes");
    document.title = `Home-${cls} Mode`;
    setTimeout(()=>{
      document.title="Install textUtils";
    },3000)
    setTimeout(()=>{
      document.title="TextUtils is Awesome";
    },1500)
    }
  }
  return (
    <Router>
      <div className="react">
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert Alert={alert}/>
        <Routes>
                 <Route exact path='/' element={<TextForm mode={mode} showAlert={showAlert}/>}></Route>
                 <Route exact path='/about' element={<About/>}></Route>
                 {/* <Route exact path='/contact' element={< Contact />}></Route> */}
          </Routes>
      
      
    </div>
    </Router>
    
  );
}

export default App;
