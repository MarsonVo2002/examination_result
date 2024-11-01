import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SearchPage from "./Pages/SearchPage";
import Report from "./Pages/Report";
import Header from "./Component/Header";
import Menu from "./Component/Menu";
import Dashboard from "./Pages/Dashboard";
import Settings from "./Pages/Settings";
function App() {
  return (
    <div>
      <Router>
        <Header />
        <div className="flex flex-row w-full h-full">
          <Menu />
          <div className="w-full h-full flex flex-col items-center bg-gray-100">
            <Routes>
              <Route path="/" element={<Dashboard/>}></Route>
              <Route path="/report" element={<Report />}></Route>
              <Route path="/search" element={<SearchPage />}></Route>
              <Route path="/setting" element={<Settings/>}></Route>
            </Routes>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
