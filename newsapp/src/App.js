// import './App.css';
import Navbar from './Components/Navbar';
import News from './Components/News';

function App() {
  return (
    <div className="App">
      <Navbar />
      <News pageSize="15"/>
    </div>
  );
}

export default App;
