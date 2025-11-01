import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserLayout from "./components/Layout/userLayout";
import Home from "./pages/Home";
import ProductsDetails from "./components/Products/ProductsDetails"; 
import { Toaster } from "sonner";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <BrowserRouter>
      <Toaster position="top-right" />
      <Routes>
        {/* User Layout routes */}
        <Route path="/" element={<UserLayout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login/>}/>
          <Route path="register" element={<Register/>}/>

          <Route path="product/:id" element={<ProductsDetails />} /> 
        </Route>

        {/* Admin Layout  */}
        {/* <Route path="/admin/*" element={<AdminLayout />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
