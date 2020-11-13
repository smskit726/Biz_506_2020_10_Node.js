import BackImg from "./Bgimg.jpg";
import "./App.css";
import BbsMain from "./main/BbsMain";

function App() {
  const background = {
    backgroundImage: `url(${BackImg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundAttachment: "scroll",
  };
  return (
    <div className="App">
      <header className="App-header" style={background}>
        <h3>REACT BBS 2020</h3>
        <p>React로 구현하는 BBS Project</p>
      </header>
      <BbsMain />
      <footer className="footer">
        <address>CopyRight &copy; smskit726@gmail.com</address>
      </footer>
    </div>
  );
}

export default App;
