import {
    BrowserRouter,
    Route,
    Routes
  } from "react-router-dom";
  
import { Home } from "./container/Home";
export const AppRoutes = () => {
    return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </BrowserRouter>
    )
  }
  
