import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AddSchool from "./pages/AddSchool";
import ShowSchools from "./pages/ShowSchools";
import { NavLink } from "react-router-dom";
import { ToastContainer } from "react-toastify";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Router>
      <nav className="bg-blue-600 p-4 text-white shadow-md">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">School Directory</h1>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden block focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          <div className="hidden md:flex gap-6">
            <NavLink
              to="/add"
              className={({ isActive }) =>
                isActive
                  ? "underline font-semibold text-yellow-300"
                  : "hover:underline"
              }
            >
              ➕ Add School
            </NavLink>

            <NavLink
              to="/schools"
              className={({ isActive }) =>
                isActive
                  ? "underline font-semibold text-yellow-300"
                  : "hover:underline"
              }
            >
              🏫 Show Schools
            </NavLink>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden mt-4 flex flex-col gap-4">
            <NavLink
              to="/add"
              className={({ isActive }) =>
                isActive
                  ? "underline font-semibold text-yellow-300"
                  : "hover:underline"
              }
              onClick={() => setIsOpen(false)}
            >
              ➕ Add School
            </NavLink>

            <NavLink
              to="/schools"
              className={({ isActive }) =>
                isActive
                  ? "underline font-semibold text-yellow-300"
                  : "hover:underline"
              }
              onClick={() => setIsOpen(false)}
            >
              🏫 Show Schools
            </NavLink>
          </div>
        )}
      </nav>
      <ToastContainer position="top-center" />
      <Routes>
        <Route path="/add" element={<AddSchool />} />
        <Route path="/schools" element={<ShowSchools />} />
        <Route path="/" element={<ShowSchools />} />
      </Routes>
    </Router>
  );
}

export default App;
