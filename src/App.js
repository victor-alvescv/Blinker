import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Movies from "./pages/Movies";
import Landing from "./pages/Landing";
import { useState } from "react";
import MovieDetail from "./pages/MovieDetail";

function App() {
  const [search, setSearch] = useState("");

  function landingSearch(event) {
      setSearch(event);
  }


  return (
    <Router>
      <div id="app">
        <Routes>
          <Route
            path="/"
            element={<Landing landingSearch={landingSearch} search={search} />}
          ></Route>
          <Route path="/movies" element={<Movies search={search} />}></Route>
          <Route path="/movies/:id" element={<MovieDetail />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
