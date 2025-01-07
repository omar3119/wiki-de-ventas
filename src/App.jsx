import {
  HashRouter,
  Routes,
  Route,
} from "react-router-dom";

//Components

//Pages
import Home from "../src/page/Home";
import NoFound from "../src/page/NoFound";
import Wiki from "../src/page/Wiki";

import WikiPage from "../src/page/WikiPage";
import Contact from "../src/page/Contact";

//context
import { FilterCardProvider } from "../src/context";
import Header from "./components/Header";
//Styles
import "./App.css";

function App() {
  return (
    <HashRouter>
      <FilterCardProvider>
        <Header />

        <Routes>
        <Route path="/" element={<Home />}/>

          <Route path={"/wiki"} element={<Wiki />}>
            <Route path={":nameFilter"} element={<WikiPage />} />
          </Route>
          <Route path="/contact" element={<Contact />} />

          <Route path="/*" element={<NoFound />} />
        </Routes>
      </FilterCardProvider>
    </HashRouter>
  );
}

export default App;
