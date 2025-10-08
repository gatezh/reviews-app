import { BrowserRouter, Routes, Route } from "react-router";

import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";

import "./App.css";

// Vite exposes the configured base at import.meta.env.BASE_URL.
// Normalize it: use `undefined` for dev (so BrowserRouter behaves normally),
// otherwise strip the trailing slash for a clean basename like "/reviews-app".
const rawBase = import.meta.env.BASE_URL || "/";
const basename = rawBase === "/" ? undefined : rawBase.replace(/\/$/, "");

function App() {
  return (
    <BrowserRouter basename={basename}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
