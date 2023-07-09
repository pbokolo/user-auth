import { Routes, Route } from "react-router-dom";
import { Home, Lost } from "./ui/pages";
function App() {
  return (
    <div className="app">
      <Routes>
        <Route exact path="/" element={<Home />} />

        <Route exact path="*" element={<Lost />} />
      </Routes>
    </div>
  );
}

export default App;
