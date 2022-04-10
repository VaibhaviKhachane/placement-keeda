import { Home } from "./routes/home";
import { Company } from "./routes/company"
import { Login } from "./routes/login"
import { SignUp } from "./routes/signup"
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom"
import { roleState } from "./atoms/roleState";
import { useRecoilValue } from "recoil";
import { Profile } from "./routes/profile";
import { Drives } from "./routes/drives";

function App() {
  const role = useRecoilValue(roleState);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/cmpny" element={<Company />} />
          <Route path="/stu" element={<h1>This is Student Page!</h1>} />
          <Route path="/tpo" element={<h1>This is TPO Page!</h1>} />
          <Route path={`/${role}/profile`} element={<Profile />} />
          <Route path={`/${role}/drives`} element={<Drives />} />
          <Route path="*" element={
            <div className="w-full min-h-screen grid place-items-center relative text-white bg-gray-900">
              <h1 className="font-semibold text-5xl select-none">404 | Page Not Found</h1>
              <div className="absolute top-36">
                <Link to="/">
                  <h1 role="link" className="leaf font-semibold text-2xl p-2">
                    Placement Keeda
                  </h1>
                </Link>
              </div>
            </div>
          } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
