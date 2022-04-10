import { Home } from "./routes/home";
import { Company } from "./routes/company"
import { Login } from "./routes/login"
import { SignUp } from "./routes/signup"
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/cmpny" element={<Company />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
