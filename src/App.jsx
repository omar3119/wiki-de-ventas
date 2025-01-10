import { HashRouter, Routes, Route } from "react-router-dom";
import {useState} from "react";

//Components
import CardComplete from "./components/CardComplete";

//Pages
import Home from "../src/page/Home";
import NoFound from "../src/page/NoFound";
import Wiki from "../src/page/Wiki";

import WikiPage from "../src/page/WikiPage";
import Contact from "../src/page/Contact";

//context
import { FilterCardProvider } from "../src/context";
import Header from "./components/Header";
import { AuthProvider, useAuth } from "./context/auth";
//Styles
import "./App.css";
import LoginPage from "./page/LoginPage";

function App() {
  const [url, setUrl] = useState("/wiki");
  return (
    <HashRouter>
      <AuthProvider>
        <FilterCardProvider>
          <CardComplete />
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path={url} element={<Wiki />}>
              <Route path={":nameFilter"} element={<WikiPage />} />
            </Route>
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/*" element={<NoFound />} />
          </Routes>
        </FilterCardProvider>
      </AuthProvider>
    </HashRouter>
  );
}

export default App;
