import { useState } from "react";

import Button from "@/components/Button";

function App() {
  const [counter, setCounter] = useState(0);

  const counterHandler = () => setCounter((prevState) => prevState + 1);
  const resetCounterHandler = () => setCounter(0);

  return (
    <main className="max-w-5xl mx-auto flex flex-col justify-center items-center">
      <h1 className="text-lg font-bold">Counter App with Vite</h1>
      <section className="flex flex-col gap-y-4 justify-center items-center">
        <span className="text-lg font-bold">{counter}</span>
        <Button onClick={counterHandler}>Count</Button>
        <Button onClick={resetCounterHandler}>Reset</Button>
      </section>
    </main>
  );
}

export default App;
