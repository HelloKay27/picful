import "./App.css";
import LandingPage from "./components/LandingPage";
import "./index.css";
import "react-datepicker/dist/react-datepicker.css";

function App() {
  return (
    <div
      className='App'
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
      }}
    >
      <LandingPage />
    </div>
  );
}

export default App;
