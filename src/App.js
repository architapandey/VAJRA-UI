import "./App.css";
import Header from "./Components/Header";
import Body from "./Components/Body";
import Login from "./Components/Login";
import Download from "./Components/Download";
import Footer from "./Components/Footer";
function App() {
  return (
    <div className="">
      <Header />
      <div className="flex items-center justify-between gap-2 flex-wrap">
        <Body />
        <Login />
      </div>
      <Download />
      <Footer />
    </div>
  );
}

export default App;
