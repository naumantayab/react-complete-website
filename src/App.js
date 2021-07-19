import React from "react";
import MainApp from "./MainApp";
import { BrowserRouter } from "react-router-dom";
const App = () => {
  return (
    <>
      <div>
        <BrowserRouter>
          <MainApp />
        </BrowserRouter>
      </div>
    </>
  );
};
export default App;
