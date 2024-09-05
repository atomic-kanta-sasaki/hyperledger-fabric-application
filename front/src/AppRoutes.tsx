import {
    BrowserRouter,
    Route,
    Routes
  } from "react-router-dom";
import { PrimarySearchAppBar } from "./component/Header";
import { Home } from "./container/Home";
export const AppRoutes = () => {
    return (
      <BrowserRouter>
        <PrimarySearchAppBar />
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </BrowserRouter>
    )
  }
  
