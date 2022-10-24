import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { usePersistedState } from "../utils/usePersistedState";

const Home: NextPage = () => {
  const [state, setState] = usePersistedState("theme", "dark");

  useEffect(() => {
    console.log(state);
  }, []);

  useEffect(() => {
    console.log("localstorage: " + localStorage.getItem("theme"));
  }, [state]);

  return (
    <>
      <h1>Hey</h1>
      <p>{state}</p>
      <button
        onClick={() => {
          state === "dark" ? setState("light") : setState("dark");
        }}
      >
        Toggle Theme
      </button>
    </>
  );
};

export default Home;
