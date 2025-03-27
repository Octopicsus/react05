import { BrowserRouter, Link, Route, Routes } from "react-router";

import "./App.css";
import Navigation from "./Widgets/Navigation/Navigation";
import MainPage from "./Extra/MainPage";
import InfoPage from "./Extra/InfoPage";
import ErrorPage from "./Extra/ErrorPage";
import DetailsPage from "./Extra/info/DetailsPage";
import ContactsPage from "./Extra/info/ContactsPage";
import ProductsPage from "./Extra/products/ProductsPage";
import ProductPage from "./Extra/products/ProductPage";
import AuthGuard from "./Extra/AuthGuard";
import { useState } from "react";

function App() {
  const [isAuthenticated, setIsAuthenticated ] = useState(false)
  return (
    <>
      {/*     <Navigation />
      <Extra /> */}

      <BrowserRouter>
      <button type="text" onClick={()=> setIsAuthenticated(true)}>Get Access</button>
        <header>
          <nav>
            <ul>
              <li>
                <Link to="/">Main</Link>
              </li>
              <li>
                <Link to="/info">Info</Link>
              </li>
           
              <li>
                <Link to="/products">Products</Link>
              </li>
            </ul>
          </nav>
        </header>

        <Routes>
          <Route path="/" element={<MainPage />} />

          <Route
            path="/info"
            element={<AuthGuard isAuth={isAuthenticated} Component={<InfoPage />} />}
          >
            <Route path="details" element={<DetailsPage />}></Route>
            <Route path="contacts" element={<ContactsPage />}></Route>
          </Route>

          <Route path="/products">
            <Route index element={<ProductsPage />} />
            <Route path=":productId" element={<ProductPage />}></Route>
          </Route>

          <Route path="*" element={<ErrorPage />} />
        </Routes>

        <footer>Footer</footer>
      </BrowserRouter>
    </>
  );
}

export default App;
