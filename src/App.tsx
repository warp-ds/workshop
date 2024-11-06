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
