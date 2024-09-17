import React, { useState } from "react";
import { FinnLogo } from "./Logo.tsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <header className="page-container">
        <FinnLogo />
      </header>
      <main className="page-container text-center">
        <h1 className="">Hello Vite + React!</h1>
        <p>
          <button onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="s-text-link"
            href="https://warp-ds.github.io/tech-docs/"
            target="_blank"
            rel="noopener noreferrer"
          >
            WARP Tech-docs
          </a>
          {" | "}
          <a
            className="s-text-link"
            href="https://warp-ds.github.io/tech-docs/css/"
            target="_blank"
            rel="noopener noreferrer"
          >
            WARP Css-docs
          </a>
        </p>
      </main>
    </>
  );
}

export default App;
