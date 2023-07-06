import { Routes, Route } from "react-router-dom";
import { Auth, Home, Lost } from "./ui/pages";
function App() {
  return (
    <div className="app">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/auth" element={<Auth />} />
        <Route exact path="*" element={<Lost />} />
      </Routes>
    </div>
  );
}

export default App;
