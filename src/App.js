import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component";
import Home from "./routes/home/home.component";
import Authentication from "./routes/authentication/authentication.component";
import Slices from "./routes/slices/slices.component";
import PageNotFound from "./components/page-not-found/page-not-found.component";
import AddSlice from "./routes/add-slice/add-slice.component";

import "bulma/css/bulma.min.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="auth" element={<Authentication />} />
          <Route path="slices" element={<Slices />} />
          <Route path="addslice" element={<AddSlice />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
