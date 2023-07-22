
import axios from 'axios';
import './App.css';
import Login from './Components/Login';
import Signup from './Components/Signup';

function App() {

  function Change(){
    axios.delete("http://localhost:5000/64bb512f63d1d6619cce474e").then((e)=>console.log(e))
  }
  return (
    <div className="App">
      
      <button onClick={Change}>click</button>
      
    </div>
  );
}

export default App;
