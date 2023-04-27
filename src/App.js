import React from "react";
import "./index.css";
import TransactionContainer from "./components/TransactionContainer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>The Royal Bank of Flatiron</h2>
      </header>
      

      <TransactionContainer />
    </div>
  );
}

export default App;
