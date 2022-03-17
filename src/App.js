import { DrawingBranch } from "./DrawingBranch.js";
import { Footer } from "./Footer.js";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="header" />
      <DrawingBranch className="drawing-branch" />
      <Footer />
    </div>
  );
}

export default App;
