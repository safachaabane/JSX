import logo from './logo.svg';
import './App.css';
import ReactPlayer from "react-player";

function App() {
  return (
    <div className="App">
        <div style={{border:"solid 1px black", maxWidth:"100vw", margin:"70px"}}>
          <h1 className="title red">Your name here</h1>
            <img src="/logo512.png" className="logopub"/>
            <img src={logo} className="logosrc"/>

        </div>
        <ReactPlayer width='320px' height='240px' controls 
        url="https://www.youtube.com/watch?v=UVCP4bKy9Iw"
      />
    </div>
  );
}

export default App;
