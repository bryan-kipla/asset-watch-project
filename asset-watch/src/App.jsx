import { BrowserRouter, Routes, Route } from "react-router-dom";
import WatchList from "./components/watchList";
import AssetDetail from "./components/assetRow";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WatchList />} />
        <Route path="/asset/:id" element={<AssetDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

