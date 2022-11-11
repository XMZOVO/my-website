import { Routes, Route } from "@solidjs/router";
import { Component, createSignal, lazy } from "solid-js";
import logo from "./logo.svg";
const Grammar = lazy(() => import("./pages/Grammar"));

const App: Component = () => {
  const [count, setCount] = createSignal(0);
  const interval = setInterval(() => setCount((c) => c + 1), 1000);
  return (
    <Routes>
      <Route path="/grammar" component={Grammar}></Route>
    </Routes>
  );
};

export default App;
