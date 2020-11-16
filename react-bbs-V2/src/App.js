import BackImg from "./Bgimg.jpg";
import "./App.css";
import BbsMain from "./main/BbsMain";
import BbsNav from "./main/BbsNav";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  const background = {
    backgroundImage: `url(${BackImg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "100% 100%",
    backgroundAttachment: "scroll",
  };
  return (
    <div className="App">
      <header className="App-header" style={background}>
        <h3>REACT BBS 2020</h3>
        <p className="sub-title">React로 구현하는 BBS Project</p>
      </header>
      <Router>
        <BbsNav />
        <Route exact path="/" component={BbsMain} />
        <Route exact path="/admin" component={BbsMain} />
      </Router>
      <footer className="footer">
        <address>CopyRight &copy; smskit726@gmail.com</address>
      </footer>
    </div>
  );
}

export default App;
