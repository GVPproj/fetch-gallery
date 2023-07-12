import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <header>
        <h1 className="text-2xl sm:text-4xl italic">Fetch Gallery</h1>
      </header>
      <main>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </main>
    </>
  );
}

export default App;
