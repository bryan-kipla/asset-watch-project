import React from "react";
import WatchList from "./components/watchList";
import "./App.css";

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Crypto Asset Watch</h1>
      </header>
      <main>
        <WatchList />
      </main>
    </div>
  );
}

export default App;
