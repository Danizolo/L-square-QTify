/**
 * @description      :
 * @author           : DHANUSH
 * @group            :
 * @created          : 23/09/2025 - 13:28:04
 *
 * MODIFICATION LOG
 * - Version         : 1.0.0
 * - Date            : 23/09/2025
 * - Author          : DHANUSH
 * - Modification    :
 **/
import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div>
      <BrowserRouter>
        <div className="flex flex-col items-center h-screen bg-gray-100 p-4">
          <Routes>
            <Route path="/" element={<Navbar />} />
            {/* <Route path="/about" element={<AboutPage />} /> */}
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
