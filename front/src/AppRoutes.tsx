import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PrimarySearchAppBar } from "./components/Header";
import { Home } from "./pages/Home";
import { SampleForm } from "./pages/SampleForm";
export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <PrimarySearchAppBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sample-form" element={<SampleForm />} />
      </Routes>
    </BrowserRouter>
  );
};
