import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserLayout from "./components/Layout/userLayout";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<UserLayout/>}> {/*User Layout*/} </Route>
      <Route>{/*Amin Layout*/}</Route>

    </Routes>
    </BrowserRouter>
  );
}

export default App;
