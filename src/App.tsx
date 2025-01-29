import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const incrementCount = () => setCount((prevCount) => prevCount + 1);

  return (
    <>
      <header className="page-container mt-44">
        <h1 className="text-center">WARP Design System workshop</h1>
      </header>
      <main className="page-container text-center">
      <svg width="160" height="140" xmlns="http://www.w3.org/2000/svg" version="1.1">
        <rect
          className="dv-s-stroke-line-primary"
          x="10"
          y="10"
          width="100"
          height="100"
          fill-opacity="0.5"
          stroke-opacity="0.8"
          stroke-width="15" />
      </svg>
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
