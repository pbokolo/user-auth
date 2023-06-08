import { Routes, Route } from "react-router-dom";
import { Auth, Lost, Profile } from "./pages";
function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Profile />} />
      <Route exact path="/auth" element={<Auth />} />
      <Route exact path="*" element={<Lost />} />
    </Routes>
  );
}

export default App;
