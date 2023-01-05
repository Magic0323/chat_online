import logo from "./logo.svg";
import "./App.css";
import { get } from "./utils/http";
import { Button } from "antd";
import { useNavigate } from 'react-router-dom'

function App() {
  const navigate = useNavigate();
  get("/getName", { name: "zs" }).then((res) => {
    console.log(res);
  });
  return (
    <div className="App">
      <Button onClick={()=>{
        navigate('/login', {
          state: {
          id: 'hha',
          }})
      }}>to login</Button>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
