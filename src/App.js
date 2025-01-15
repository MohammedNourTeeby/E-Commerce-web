import "./App.css";
import Main from "./Components/Main";
import FilterdProducts from "./Components/FilterdProducts";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main></Main>}></Route>
          <Route
            path="/filterdProducts/:type"
            element={<FilterdProducts></FilterdProducts>}
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
