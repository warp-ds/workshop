import { useState } from "react";
import { FinnLogo } from "./Logo.tsx";

function App() {
  const [count, setCount] = useState(0);
  const incrementCount = () => setCount((prevCount) => prevCount + 1);

  return (
    <>
      <header className="page-container">
        <FinnLogo />
      </header>
      <main className="page-container text-center">
        <h1>Hello Vite + React!</h1>
        <p>
          <button onClick={incrementCount}>count is: {count}</button>
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="s-text-link"
            href="https://warp-ds.github.io/docs/"
            target="_blank"
            rel="noopener noreferrer"
          >
            WARP Documentation
          </a>
        </p>
      </main>
    </>
  );
}

export default App;
